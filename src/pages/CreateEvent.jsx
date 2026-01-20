// pages/CreateEvent.jsx
import { Form, redirect } from "react-router";

// ----- Action -----
export async function action({ request }) {
  // Get form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Get token (from localStorage for simplicity)
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You are not authorized. Please sign in.");
    return redirect("/signin");
  }

  // POST to API
  const res = await fetch("http://localhost:3001/api/events", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...data,
      latitude: Number(data.latitude),
      longitude: Number(data.longitude),
    }),
  });

  if (!res.ok) {
    const errData = await res.json();
    alert(errData.message || "Event creation failed");
    return null; // stay on page
  }

  alert("Event creation successful!");
  return redirect("/"); // redirect after success
}

// ----- Component -----
export default function CreateEvent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="md:text-6xl sm:text-2xl font-serif">Create an Event</h1>
      <Form
        method="post"
        className="flex flex-col gap-4 w-7xl max-w-md p-6 border rounded-2xl border-amber-500 bg-blue-200"
      >
        <label className="flex flex-col gap-1 text-sm font-medium">
          Title
          <input
            type="text"
            name="title"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Description
          <textarea
            name="description"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Date & Time
          <input
            type="datetime-local"
            name="date"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Location
          <input
            type="text"
            name="location"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Latitude
          <input
            type="number"
            name="latitude"
            inputMode="decimal"
            step="0.000001"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium">
          Longitude
          <input
            type="number"
            name="longitude"
            inputMode="decimal"
            step="0.000001"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </label>
        <button type="submit" className="border bg-amber-400 p-2 rounded">
          Submit
        </button>
      </Form>
    </div>
  );
}
