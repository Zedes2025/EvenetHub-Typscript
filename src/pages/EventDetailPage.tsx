// EventDetailPage.jsx
import { useLoaderData, Form, Link, redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";

// ----------------- Loader -----------------
export async function loader({ params }: ActionFunctionArgs) {
  const eventId = params.id;
  const res = await fetch(`http://localhost:3001/api/events/${eventId}`);
  if (!res.ok) throw new Error("Cannot fetch data");
  const data = await res.json();
  return data;
}

// ----------------- Action -----------------
export async function action({ request, params }: ActionFunctionArgs) {
  const eventId = params.id;
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Not authorized");
    return redirect("/signin");
  }

  if (request.method.toUpperCase() === "DELETE") {
    const res = await fetch(`http://localhost:3001/api/events/${eventId}`, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errData = await res.json();
      alert(errData.message || "Event deletion failed");
      return null;
    }

    alert("Event deleted successfully!");
    return redirect("/");
  }

  return null;
}

// ----------------- Component -----------------
export default function EventDetailPage() {
  const eventMatch = useLoaderData();
  const [dateSplit, timeFull] = eventMatch.date.split("T");
  const time = timeFull.slice(0, 5);

  return (
    <div className="hero bg-neutral-500 h-screen w-screen">
      <div className="hero-content text-center">
        <div className="flex flex-col gap-5 max-w-7xl bg-white p-6 rounded-xl shadow-lg">
          <h1 className="lg:text-6xl font-bold text-gray-900">{eventMatch.title}</h1>
          <p className="py-6 text-amber-950 lg:text-xl italic">{eventMatch.description}</p>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-left border-t pt-6">
            <p>
              <strong>Date:</strong> {dateSplit}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <p>
              <strong>Location:</strong> {eventMatch.location}
            </p>
            <p>
              <strong>Organizer:</strong> {eventMatch.organizerId}
            </p>
            <p>
              <strong>Coordinates:</strong> {eventMatch.latitude}, {eventMatch.longitude}
            </p>
          </div>

          <div className="flex justify-between">
            <Link to="/" className="bg-stone-400 px-4 py-2 rounded shadow hover:bg-amber-500 block text-center text-amber-950">
              Go Back
            </Link>

            <Form method="delete">
              <button type="submit" className="bg-stone-400 px-4 py-2 rounded shadow hover:bg-amber-500 block text-center text-amber-950">
                Delete Event
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
