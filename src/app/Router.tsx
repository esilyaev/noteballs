import { MainLayout } from "@/layouts/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { additionalRoutes, mainRoutes } from "./AppRoutes";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: mainRoutes.map((el) => ({
        path: el.path,
        element: el.element,
      })),
    },
    {
      path: "/",
      element: <MainLayout />,
      children: additionalRoutes.map((el) => ({
        path: el.path,
        element: el.element,
      })),
    },
  ]);

  return <RouterProvider router={router} />;
};
