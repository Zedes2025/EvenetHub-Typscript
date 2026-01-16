import { Link } from "react-router";
export default function SignUp() {
  return (
    <div className=" flex items-center w-full ">
      <fieldset className="fieldset bg-base-200 border-base-300 items-center rounded-box w-120 border p-6 mx-auto mt-10 mb-20">
        <h2 className="fieldset-legend text-xl justify-center font-semibold">
          Create an account
        </h2>
        <p className="text-center m-2 mb-4 text-lg">
          Join EventHub to create and manage events
        </p>

        <label className="label text-base font-medium">Full Name</label>
        <input
          type="text"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Full Name"
        />
        {/* <label className="label text-base font-medium">
          Choose your username
        </label>
        <input
          type="text"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Username"
        /> */}
        <label className="label text-base font-medium">Email</label>
        <input
          type="email"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Email"
        />

        <label className="label text-base font-medium mt-2">Password</label>
        <input
          type="password"
          className="input w-auto input-bordered text-base h-12"
          placeholder="Password"
        />
        <label className="label text-base font-medium mt-2">
          Repeat password
        </label>
        <input
          type="password"
          className="input  w-auto input-bordered text-base h-12"
          placeholder="Password"
        />
        <button className="btn btn-primary mt-6 text-base h-12">Sign Up</button>
        <p className="text-center mt-4">
          Already have an account?
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </fieldset>
    </div>
  );
}
