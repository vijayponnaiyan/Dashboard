import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Overview /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
