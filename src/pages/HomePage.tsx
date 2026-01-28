import { useLoaderData, Link } from "react-router";
import EventCard from "../components/UI/EventCard";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
};

export async function loader() {
  const res = await fetch("http://localhost:3001/api/events");
  if (!res.ok) throw new Error("Cannot fetch data:");
  const data = await res.json();
  console.log(data);
  return data;
}

export default function EventPage() {
  const events = useLoaderData<{ results: Event[] }>(); //-------------------------Type declaration
  const results = events.results; /*to access the array within the object*/
  if (results.length === 0) {
    return <div className="p-4 text-gray-600">No events found.</div>;
  }

  return (
    <div className=" m-6 pb-6 grid grid-cols-2 lg:grid-cols-3 gap-y-6 justify-center">
      {results.map((result) => {
        const [dateSplit, timeFull] = result.date.split("T");
        return (
          <Link key={result.id} to={`/events/${result.id}`}>
            <EventCard
              title={result.title}
              date={dateSplit}
              location={result.location}
            />
          </Link>
        );
      })}
    </div>
  );
}
