import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "../Views/Signup";
import Login from "../Views/Login";
import Dashboard from "../Views/Dashboard";
import AddCard from "../Views/AddCard";
import UpdateCard from "../Views/UpdateCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addCard",
    element: <AddCard />,
  },
  {
    path: "/updateCard",
    element: <UpdateCard />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
