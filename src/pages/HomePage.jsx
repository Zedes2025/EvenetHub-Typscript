import { useLoaderData, useNavigate } from "react-router";
import EventCard from "../components/UI/EventCard";

export async function loader() {
  const res = await fetch("http://localhost:3001/api/events");
  if (!res.ok) throw new Error("Cannot fetch data:");
  const data = await res.json();
  console.log(data);
  return data;
}

export default function EventPage() {
  const events = useLoaderData();
  const results = events.results; /*to access the array within the object*/
  if (results.length === 0) {
    return <div className="p-4 text-gray-600">No events found.</div>;
  }
  const navigate = useNavigate();

  function openEvent(result) {
    navigate(`/events/${result}`);
  }

  return (
    <div className=" m-6 pb-6 grid grid-cols-2 lg:grid-cols-3 gap-y-6 justify-center">
      {results.map((result) => {
        const [dateSplit, timeFull] = result.date.split("T");
        return <EventCard key={result.id} title={result.title} date={dateSplit} location={result.location} ViewDetailsBtn={() => openEvent(result.id)} />;
      })}
    </div>
  );
}
