import { useState } from "react";

export default function useCreateEvent() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitEvent = (e) => {
    e.preventDefault();
    // You can handle the POST request here or return inputs to handle in component
    console.log("Event submitted:", inputs);
  };

  return { inputs, handleChange, submitEvent };
}
