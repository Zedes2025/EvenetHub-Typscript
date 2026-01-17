import { useNavigate, Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
export default function SignIn() {
  const { isAuthenticated, user, token, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // asks the context
      navigate("/"); // UI decision
    } catch (err) {
      console.log(err.message); // UI decision
    }
  };

  return (
    <div className=" flex items-center w-full ">
      <fieldset className="fieldset bg-base-200 border-base-300 items-center rounded-box w-96 border p-6 mx-auto mt-10 mb-20">
        <legend className="fieldset-legend text-xl justify-center font-semibold pt-12">Sign In</legend>

        <label className="label text-base font-medium">Email</label>
        <input type="email" className="input  w-auto input-bordered text-base h-12" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="label text-base font-medium mt-2">Password</label>
        <input
          type="password"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // update state
        />

        <button className="btn btn-primary mt-6 text-base h-12" onClick={handleSubmit}>
          Sign In
        </button>
        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </fieldset>
    </div>
  );
}
