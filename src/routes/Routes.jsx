import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from '../components/Pages/Home/Home';
import BookingForm from '../components/Pages/Home/Shared/BookingForm/BookingForm';

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
      {
        path: '/:id',
        loader: () => fetch('data.json'),
        element: <BookingForm></BookingForm>
      }
    ],
  },
]);

export default router;
