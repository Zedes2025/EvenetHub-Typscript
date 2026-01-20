import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import HomePage, { loader as eventLoader } from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignIn from "./components/UI/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetailPage.jsx";

import CreateEvent, { action as createAction } from "./pages/CreateEvent.jsx";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

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
      },
      {
        path: "/signup",
        element: <SignUp />,
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
