// pages/CreateEvent.jsx
import { Form, redirect } from "react-router";
import CreateEventForm from "../components/UI/CreateEventForm";
import type { ActionFunctionArgs } from "react-router";
import type { EventFormData } from "../types";

// Pure UI wrapper
export default function CreateEvent() {
  return (
    <CreateEventForm
      title=""
      description=""
      date=""
      location=""
      latitude={0}
      longitude={0}
    />
  );
}

// ----- Action -----
export async function action({ request }: ActionFunctionArgs) {
  // Get form data
  const formData = await request.formData();
  // const data: EventFormData = Object.fromEntries(formData);
  const data: EventFormData = {
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    date: String(formData.get("date") ?? ""),
    location: String(formData.get("location") ?? ""),
    latitude: Number(formData.get("latitude") ?? "0"),
    longitude: Number(formData.get("longitude") ?? "0"),
  };

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
