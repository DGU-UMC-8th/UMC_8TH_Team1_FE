import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import FindHome from "./pages/FindHome";
import CreateTeam from "./pages/CreateTeam"; // 이건 라우팅 안에 넣을 수 있음

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "find",
        element: <FindHome />,
      },
      {
        path: "create-team",
        element: <CreateTeam />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

