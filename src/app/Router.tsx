import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { WelcomePage } from "../pages/WelcomePage";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "/", element: <WelcomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};
