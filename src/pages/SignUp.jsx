import SignUpForm from "../components/UI/SignUpForm";
import { redirect } from "react-router";

// Pure UI wrapper
export default function SignUp() {
  return <SignUpForm />;
}

// Declarative action for data-router
export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const rpassword = formData.get("rpassword");

  // validation
  if (name.length < 2) {
    alert("Name must be at least 2 characters");
    return null;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return null;
  }
  if (password !== rpassword) {
    alert("Passwords do not match");
    return null;
  }

  // API call
  const response = await fetch("http://localhost:3001/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    alert(errorData.message || "Registration failed");
    return null;
  }

  alert("Registration successful!");
  return redirect("/signin"); // declarative redirect
}
