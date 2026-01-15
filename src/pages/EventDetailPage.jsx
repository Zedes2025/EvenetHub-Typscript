import { useLoaderData } from "react-router";

export async function loader({ params }) {
  console.log(params); /*this is an hook, which passes the path from router.jsx "/events/:event" to EventDetailpage , so this path value is assigned in EventPage.jsx with "Link to={`/events/${result.title}`}", so here it brings result.title as an params*/
  const res = await fetch(`http://localhost:3001/api/events/${params.id}`);
  if (!res.ok) throw new Error("Cannot fetch data");
  const data = await res.json();
  return data;
}

export default function EventDetailPage() {
  const eventMatch = useLoaderData();
  return (
    <div className="hero bg-neutral-700 h-screen w-screen">
      <div className="hero-content text-center">
        <div className="max-w-5xl bg-white p-9 rounded-xl shadow-lg">
          <h1 className="lg:text-6xl font-bold text-gray-900">{eventMatch.title}</h1>
          <p className="py-6 text-gray-700 lg:text-xl italic">{eventMatch.description}</p>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-left border-t pt-6">
            <p>
              <strong>Date:</strong> {eventMatch.date}
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
        </div>
      </div>
    </div>
  );
}
