import { Form, Link } from "react-router";
import type { SignInProps } from "../../types";
export default function SignInForm({ error }: SignInProps) {
  return (
    <Form method="post" className="flex items-center w-full">
      <fieldset className="fieldset bg-base-200 border-base-300 items-center rounded-box w-96 border p-6 mx-auto mt-10 mb-20">
        <legend className="fieldset-legend text-xl justify-center font-semibold pt-12">
          Sign In
        </legend>

        <label className="label text-base font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="input w-auto input-bordered text-base h-12"
          placeholder="Email"
          required
        />

        <label className="label text-base font-medium mt-2">Password</label>
        <input
          type="password"
          name="password"
          className="input w-auto input-bordered text-base h-12"
          placeholder="Password"
          required
        />

        <button className="btn btn-primary mt-6 text-base h-12">Sign In</button>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </fieldset>
    </Form>
  );
}
