import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import HomePage, { loader as eventLoader } from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetailPage.jsx";
import CreateEventPage from "./pages/CreateEventPage.jsx";

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
        path: "/events/:id",
        element: <EventDetailPage />,
        loader: eventDetailLoader,
      },
      {
        path: "/create-event",
        element: <CreateEventPage />,
      },
    ],
  },
]);

export default router;
