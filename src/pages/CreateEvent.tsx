// pages/CreateEvent.jsx
import { Form, redirect } from "react-router";
import CreateEventForm from "../components/UI/CreateEventForm";

// Pure UI wrapper
export default function CreateEvent() {
  return <CreateEventForm title="" description="" date="" location="" latitude={0} longitude={0} />;
}

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
