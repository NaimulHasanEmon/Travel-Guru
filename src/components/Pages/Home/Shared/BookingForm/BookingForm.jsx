import { useLoaderData, useParams } from "react-router-dom";
import BannerText from "../../../Shared/BannerText/BannerText";
import Banner from "../../Banner/Banner";

const BookingForm = () => {
  const places = useLoaderData(); // All data
  const { id } = useParams(); // id that is clicked

  // Find the information of the place based on the clicked id
  const place = places.find((item) => item.id === parseInt(id));
  const { placeName, info, id: placeId, photo } = place;

  return (
    <div>
      <div>
        <Banner photo={photo}></Banner>
        <BannerText placeName={placeName} id={placeId} info={info}></BannerText>

        {/* Data Form */}
        <div class='absolute inset-0 left-[600px] flex flex-col items-center justify-center h-screen'>
          <div class='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
            <h2 class='text-2xl font-bold text-gray-900 mb-4'>Sign Up for {placeName}</h2>
            <form class='flex flex-col'>
              <input
                placeholder='First Name'
                class='bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
                type='text'
              />
              <label
                class='text-sm mb-2 text-gray-900 cursor-pointer'
                for='age'
              >
                Age
              </label>
              <input
                class='bg-gray-100 text-gray-900 border-0 rounded-md p-2'
                id='age'
                type='date'
              />
              <button
                class='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150'
                type='submit'
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
