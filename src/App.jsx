import AppLayout from "./layout/AppLayout";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/appointments",
          element: <Appointments />,
        },
        {
          path: "/payments",
          element: <Payments />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
