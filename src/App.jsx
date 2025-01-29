import {
  Dashboard,
  Refractometer,
  HomeLayout,
  InventoryTracker,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "refractometer",
        element: <Refractometer />,
      },
      {
        path: "inventroy-tracker",
        element: <InventoryTracker />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
