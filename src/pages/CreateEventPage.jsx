import { useState } from "react";

export default function CreateEventPage() {
  const [inputs, setInputs] = useState({ title: "", description: "", date: "", location: "", latitude: "", longitude: "" });
  const handleChange = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <h1 className="md:text-6xl sm:text-2xl font-serif ">Create an Event</h1>
      <form onSubmit={submitEvent} className="flex flex-col gap-4 w-7xl max-w-md p-6 border rounded-2xl border-amber-500 bg-blue-200">
        <label className="flex flex-col gap-1 text-sm font-medium">
          Title
          <input type="text" name="title" required onChange={handleChange} value={inputs.title} className="border border-black-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Description
          <textarea type="text" name="description" required onChange={handleChange} value={inputs.description} className="border border-black-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Date & Time
          <input type="datetime-local" name="date" required onChange={handleChange} value={inputs.date} className="border border-black-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Location
          <input type="text" name="location" required onChange={handleChange} value={inputs.location} className="border border-black-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Latitude
          <input type="number" name="latitude" required onChange={handleChange} value={inputs.latitude} className="border border-black-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Longitude
          <input type="number" name="longitude" required onChange={handleChange} value={inputs.longitude} className="border border-black-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </label>
        <button type="submit" className="border bg-amber-400 p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
