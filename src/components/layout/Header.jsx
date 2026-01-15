import { Link } from "react-router";

export default function Header() {
  return (
    <div className="navbar bg-blue-100 shadow-sm">
      <div className="navbar-start">
        <a className=" btn-ghost text-2xl font-bold text-blue-800">EventHub</a>
      </div>

      <div className="navbar-end">
        <Link
          to="/signin"
          className="btn p-4 m-2 text-blue-800 text-base border-b-slate-600 shadow-sm"
        >
          Sign In
        </Link>

        <button className="btn bg-blue-800 text-base text-gray-300 p-4 m-2">
          Sign Up
        </button>
      </div>
    </div>
  );
}
