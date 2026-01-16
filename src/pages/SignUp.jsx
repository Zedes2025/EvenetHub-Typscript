import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SignUp() {
  const [credentials, setCredentials] = useState({ name: "", email: "", rpassword: "", password: "" });
  const handleChange = (e) => setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const navigate = useNavigate();
  const submitRegistration = async (e) => {
    e.preventDefault();

    if (credentials.name.length < 2) {
      alert("Name length should be at least 2 characters long");
      return;
    }
    if (credentials.password.length < 8) {
      alert("Password length should be at least 8 characters long");
      return;
    }
    if (credentials.password !== credentials.rpassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    if (response.ok) {
      alert("Registration successful!");
      navigate("/signin"); // Redirect the user
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Registration failed");
    }
  };

  return (
    <>
      <form onSubmit={submitRegistration} className=" flex items-center w-full ">
        <fieldset className="fieldset bg-base-200 border-base-300 items-center rounded-box w-120 border p-6 mx-auto mt-10 mb-20">
          <h2 className="fieldset-legend text-xl justify-center font-semibold">Create an account</h2>
          <p className="text-center m-2 mb-4 text-lg">Join EventHub to create and manage events</p>

          <label className="label text-base font-medium">Full Name</label>
          <input type="text" name="name" required onChange={handleChange} value={credentials.name} className="input  w-auto input-bordered text-base h-12" placeholder="Full Name" />

          <label className="label text-base font-medium">Email</label>
          <input type="email" name="email" required onChange={handleChange} value={credentials.email} className="input  w-auto input-bordered text-base h-12" placeholder="Email" />

          <label className="label text-base font-medium mt-2">Password</label>
          <input type="password" name="password" required onChange={handleChange} value={credentials.password} className="input w-auto input-bordered text-base h-12" placeholder="Password" />
          <label className="label text-base font-medium mt-2">Repeat password</label>
          <input type="password" name="rpassword" required onChange={handleChange} value={credentials.rpassword} className="input  w-auto input-bordered text-base h-12" placeholder="Repeat above password" />
          <button className="btn btn-primary mt-6 text-base h-12">Sign Up</button>
          <p className="text-center mt-4">
            Already have an account?
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </fieldset>
      </form>
    </>
  );
}
