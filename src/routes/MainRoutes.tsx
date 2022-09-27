import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Album } from "../pages/album/Album";
import { Photo } from "../pages/photo/Photo";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/albums/:id", element: <Album /> },
    { path: "/photos/:id", element: <Photo /> },
  ]);
};
