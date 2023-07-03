import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import HomeLayout from "../Layouts/HomeLayout";

const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      // errorElement: <ErrorPage/>
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
);

export default Routes;
