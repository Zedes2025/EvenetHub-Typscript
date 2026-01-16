import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import HomePage, { loader as eventLoader } from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignIn from "./components/UI/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import useCreateEvent from "./pages/UseCreateEvent.jsx";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetailPage.jsx";
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
      },
      {
        path: "/create-event",
        element: <UseCreateEvent />,
      },
    ],
  },
]);

export default router;
