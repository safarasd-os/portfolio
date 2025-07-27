import { Dashboard, HomeLayout, MovieFlix } from "./pages";
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
        path: "MovieFlix",
        element: <MovieFlix />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
