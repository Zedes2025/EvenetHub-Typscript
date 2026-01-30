import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import HomePage, { loader as eventLoader } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignIn, { action as signInAction } from "./pages/SignIn";

import SignUp, { action as signUpAction } from "./pages/SignUp";

import EventDetailPage, { loader as eventDetailLoader, action as eventDetailAction } from "./pages/EventDetailPage";

import CreateEvent, { action as createAction } from "./pages/CreateEvent";

import ProtectedRoute from "./routes/ProtectedRoute";

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
