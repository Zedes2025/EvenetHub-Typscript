import { Link } from "react-router";
export default function SignIn() {
  return (
    <div className=" flex items-center w-full ">
      <fieldset className="fieldset bg-base-200 border-base-300 items-center rounded-box w-96 border p-6 mx-auto mt-10 mb-20">
        <legend className="fieldset-legend text-xl justify-center font-semibold">
          Sign In
        </legend>

        <label className="label text-base font-medium">Email</label>
        <input
          type="email"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Email"
        />

        <label className="label text-base font-medium mt-2">Password</label>
        <input
          type="password"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Password"
        />

        <button className="btn btn-primary mt-6 text-base h-12">Sign In</button>
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
