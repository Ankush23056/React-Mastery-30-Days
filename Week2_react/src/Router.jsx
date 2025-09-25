import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Day9 from "./Day9";
import About from "./Components/day9/About";
import Contact from "./Components/day9/Contact";
import Dashboard from "./Components/day9/Dashboard";
import Profile from "./Components/day9/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Day9 />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
