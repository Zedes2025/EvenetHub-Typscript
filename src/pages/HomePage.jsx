import { useState } from "react";
import { useLoaderData } from "react-router";
import EventCard from "../components/UI/EventCard.jsx";
import { useNavigate } from "react-router";

export async function loader() {
  const res = await fetch("http://localhost:3001/api/events");
  if (!res.ok) throw new Error("Cannot fetch data:");
  const data = await res.json();
  console.log(data);
  return data;
}

export default function HomePage() {
  const events = useLoaderData();

  const results = events.results; /*to access the array within the object*/
  if (results.length === 0) {
    return <div className="p-4 text-gray-600">No events found.</div>;
  }
  const navigate = useNavigate();

  function openEvent(eventId) {
    navigate(`/events/${eventId}`);
  }

  return (
    <div className=" m-6 pb-6 grid grid-cols-2 lg:grid-cols-3 gap-y-6 justify-center">
      {results.map((result) => {
        const [date, timeFull] = result.date.split("T");
        return (
          <EventCard
            key={result.id}
            title={result.title}
            description={result.description}
            date={date}
            time={timeFull.slice(0, 5)}
            location={result.location}
            ViewDetailsBtn={() => openEvent(result)}
          />
        );
      })}
    </div>
  );
}

// {
//id
//   title,
//description,
//   date,
//time
//   location,

//   onClickCard,
// }
