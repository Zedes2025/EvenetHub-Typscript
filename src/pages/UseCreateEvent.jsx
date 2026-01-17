import { useState } from "react";
import { useNavigate } from "react-router";

export default function UseCreateEvent() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputs.title, description: inputs.description, date: inputs.date, location: inputs.location, latitude: Number(inputs.latitude), longitude: Number(inputs.longitude) }),
    });
    if (response.ok) {
      alert("Event creation is successful!");
      navigate("/"); // Redirect the user
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Event creation failed");
    }
    console.log("Event submitted:", inputs);
  };

  return { inputs, handleChange, submitEvent };
}
