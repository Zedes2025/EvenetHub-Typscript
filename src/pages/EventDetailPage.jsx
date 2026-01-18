import { Link, useLoaderData, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export async function loader({ params }) {
  console.log(params); /*check it out , what is params in console to understand the below code*/
  const eventId = params.id;
  const res = await fetch(`http://localhost:3001/api/events/${eventId}`);
  if (!res.ok) throw new Error("Cannot fetch data");
  const data = await res.json();
  return data;
}

export default function EventDetailPage() {
  const { isAuthenticated, token } = useAuth();
  const eventMatch = useLoaderData();
  const navigate = useNavigate();
  const [dateSplit, timeFull] = eventMatch.date.split("T");
  const time = timeFull.slice(0, 5);
  const deleteEvent = async (e) => {
    const id = eventMatch.id;
    console.log(id);
    const response = await fetch(`http://localhost:3001/api/events/${id}`, {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      alert("Event Deletion is successful!");
      navigate("/");
    }
  };
  return (
    <div className="hero bg-neutral-500 h-screen w-screen">
      <div className="hero-content text-center">
        <div className="flex flex-col  gap-5 max-w-7xl bg-white p-6 rounded-xl shadow-lg">
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
            <Link to="/" className="bg-stone-400 px-4 py-2 rounded shadow hover:bg-amber-500 block text-center  text-amber-950">
              Go Back
            </Link>
            {isAuthenticated && (
              <button onClick={deleteEvent} className="bg-stone-400 px-4 py-2 rounded shadow hover:bg-amber-500 block text-center  text-amber-950">
                Delete Event
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
