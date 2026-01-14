import { useLoaderData } from "react-router";
import EventCard from "../components/UI/EventCard.jsx";
// export async function loader() {
//   const res = await fetch("http://localhost:3001/api/events?page=1");
//   if (!res.ok) throw new Error("Cannot fetch data:");
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

export default function HomePage() {
  // const events = useLoaderData();

  // const results = events.results; /*to access the array within the object*/
  // if (results.length === 0) {
  //   return <div className="p-4 text-gray-600">No events found.</div>;
  // }

  return (
    <div>
      <EventCard />
      {/* {results.map((result) => (
        <li
          key={result.id}
          className="pb-4 border-b border-gray-200 last:border-0"
        >
          <strong className="text-lg text-gray-900 block">
            {result.title}
          </strong>
          <p className="text-gray-600 mt-1 leading-relaxed">
            {result.description}
          </p>
        </li>
      ))} */}
    </div>
  );
}
