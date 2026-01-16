import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext.jsx";
export default function Header() {
  const { isAuthenticated, user, token, login, logout, register } = useAuth();
  const handleLogout = () => {
    if (isAuthenticated) {
      logout(); // clears state + localStorage
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="navbar bg-stone-300 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className=" btn-ghost text-2xl font-bold text-amber-950">
          EventHub
        </Link>
      </div>

      <div className="navbar-end">
        {isAuthenticated && (
          <button>
            <Link
              to="/create-event"
              className="btn p-4 m-2 text-amber-950 text-base border-b-slate-600 shadow-sm"
            >
              Create Event
            </Link>
          </button>
        )}
        <button onClick={handleLogout}>
          <Link
            to="/signin"
            className="btn p-4 m-2 text-amber-950 text-base border-b-slate-600 shadow-sm"
          >
            {!isAuthenticated ? "Sign In" : "Sign Out"}
          </Link>
        </button>

        {!isAuthenticated && (
          <button className="btn text-amber-950 text-base border-b-slate-600 p-4 m-2">
            <Link to="/signup" className="hover:underline">
              Sign up
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}
