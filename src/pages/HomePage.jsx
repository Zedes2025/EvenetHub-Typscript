import { useLoaderData } from "react-router";
import { Link } from "react-router";

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
    navigate(`/events/${result.id}`);
  }

  return (
    <div className="m-6 pb-6 grid grid-cols-2 lg:grid-cols-3 gap-y-6 justify-center">
      {results.map((result) => {
        return (
          <div className="card m-10  bg-stone-100 w-96 shadow-sm ">
            <div className="card-body">
              <h2 className="card-title text-blue-950"> {result.title}</h2>
              <p className="line-clamp-3">{result.description}</p>
            </div>
            <div className="card-title  mt-0 mb-6 m-4 p-4">Location: {result.location} </div>
            <button onClick={openEvent(result)} className="bg-blue-400 px-4 py-2 rounded shadow hover:bg-amber-500 block text-center">
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
