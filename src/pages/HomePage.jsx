import { useLoaderData } from "react-router";

export async function loader() {
  const res = await fetch("http://localhost:3001/api/events?page=1&limit=10");
  if (!res.ok) throw new Error("Cannot fetch data:");
  const data = await res.json();
  console.log(data);
  return data;
}

export default function HomePage() {
  const events = useLoaderData();
  const results = events.results; /*to access the array within the object*/
  return (
    <div>
      {results.map((result) => (
        <li key={result.id} className="pb-4 border-b border-gray-200 last:border-0">
          <strong className="text-lg text-gray-900 block">{result.title}</strong>
          <p className="text-gray-600 mt-1 leading-relaxed">{result.description}</p>
        </li>
      ))}
    </div>
  );
}
