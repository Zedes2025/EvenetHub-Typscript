import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout.js";
import HomePage, { loader as eventLoader } from "./pages/HomePage.js";
import ErrorPage from "./pages/ErrorPage.js";
import SignIn, { action as signInAction } from "./pages/SignIn.js";

import SignUp, { action as signUpAction } from "./pages/SignUp.js";

import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetailPage.js";

import CreateEvent, { action as createAction } from "./pages/CreateEvent.js";

import ProtectedRoute from "./routes/ProtectedRoute.js";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: eventLoader,
      },
      {
        path: "/signin",
        element: <SignIn />,
        action: signInAction,
      },
      {
        path: "/signup",
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: "/events/:id",
        element: <EventDetailPage />,
        loader: eventDetailLoader,
        action: eventDetailAction,
      },
      {
        path: "/create-event",
        element: (
          <ProtectedRoute>
            <CreateEvent />
          </ProtectedRoute>
        ),
        action: createAction,
      },
    ],
  },
]);

export default router;
