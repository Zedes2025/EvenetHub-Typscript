import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import EventPage, { loader as eventLoader } from "./pages/EventPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetailPage.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EventPage />,
        loader: eventLoader,
      },
      {
        path: "/events/:id",
        element: <EventDetailPage />,
        loader: eventDetailLoader,
      },
    ],
  },
]);

export default router;
