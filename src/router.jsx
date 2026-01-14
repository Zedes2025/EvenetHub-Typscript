import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
//import HomePage, { loader as eventLoader } from "./pages/HomePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        //loader: eventLoader,
      },
    ],
  },
]);

export default router;
