import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from '../components/Pages/Home/Home';
import BookingForm from '../components/Pages/Home/Shared/BookingForm/BookingForm';
import Login from "../components/Pages/Home/Shared/Login/Login";
import Register from "../components/Pages/Home/Shared/Register/Register";
import HotelInfo from "../components/Pages/Home/Shared/HotelInfo/HotelInfo";
import HotelInfoCard from "../components/Pages/Home/Shared/HotelInfoCard/HotelInfoCard";

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
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/hotelinfo',
        loader: () => fetch('hotel.json'),
        element: <HotelInfo></HotelInfo>
      },
    ],
  },
]);

export default router;
