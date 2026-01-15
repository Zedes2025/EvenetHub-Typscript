import { Link, useLoaderData } from "react-router";

export async function loader({ params }) {
  console.log(
    params
  ); /*this is an hook, which passes the path from router.jsx "/events/:event" to EventDetailpage , so this path value is assigned in EventPage.jsx with "Link to={`/events/${result.title}`}", so here it brings result.title as an params*/
  const res = await fetch(`http://localhost:3001/api/events/${params.id}`);
  if (!res.ok) throw new Error("Cannot fetch data");
  const data = await res.json();
  return data;
}

export default function EventDetailPage() {
  const eventMatch = useLoaderData();
  const [dateSplit, timeFull] = eventMatch.date.split("T");
  const time = timeFull.slice(0, 5);
  return (
    <div className="hero bg-neutral-700 h-screen w-screen">
      <div className="hero-content text-center">
        <div className="flex flex-col  gap-5 max-w-7xl bg-white p-6 rounded-xl shadow-lg">
          <h1 className="lg:text-6xl font-bold text-gray-900">
            {eventMatch.title}
          </h1>
          <p className="py-6 text-gray-700 lg:text-xl italic">
            {eventMatch.description}
          </p>

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
              <strong>Coordinates:</strong> {eventMatch.latitude},{" "}
              {eventMatch.longitude}
            </p>
          </div>
          <div>
            <Link
              to="/"
              className="bg-blue-400 px-4 py-2 rounded shadow hover:bg-amber-500 block text-center"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
