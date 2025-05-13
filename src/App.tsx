import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import FindHome from "./pages/FindHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "find",
        element: <FindHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
