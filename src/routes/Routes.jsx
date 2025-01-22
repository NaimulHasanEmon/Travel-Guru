import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from '../components/Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('data.json'),
        element: <Home></Home>
      },
    ],
  },
]);

export default router;
