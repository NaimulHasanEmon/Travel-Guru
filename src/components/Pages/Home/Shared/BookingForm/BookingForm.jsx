import { Link, useLoaderData, useParams } from "react-router-dom";
import BannerText from "../../../Shared/BannerText/BannerText";
import Banner from "../../Banner/Banner";

const BookingForm = () => {
  const places = useLoaderData(); // All data
  const { id } = useParams(); // id that is clicked

  // Find the information of the place based on the clicked id
  const place = places.find((item) => item.id === parseInt(id));
  const { id:placeId, placeName, info, photoBG } = place;

  return (
    <div>
      <div>
        <Banner photoBG={photoBG}></Banner>
        <BannerText placeName={placeName} id={placeId} info={info}></BannerText>

        {/* Data Form */}
        <div class='absolute inset-0 left-[600px] flex flex-col items-center justify-center h-screen'>
          <div class={`w-full max-w-md bg-white bg-opacity-0 ${placeName === 'Sundarbans' && 'bg-opacity-25'} rounded-lg shadow-md p-6`}>
            <h2 className={`text-5xl Cox-bazar-title font-bold text-gray-900 ${placeName === "Cox's Bazar" && 'text-white'} mb-4`}>{placeName}</h2>
            <form class='flex flex-col'>
              <label
                class='text-sm mb-2 text-gray-900'
                for='origin'
              >
                Origin
              </label>
              <input
                class='bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
                type='text'
              />
              <label
                class='text-sm mb-2 text-gray-900'
                for='destination'
              >
                Destination
              </label>
              <input
                class='bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
                type='text'
                value={placeName}
                disabled
              />

              {/* Date */}
              <div className='flex justify-between gap-4 relative'>
                <div className='flex flex-col w-full'>
                  <label className='text-sm mb-2 text-gray-900' htmlFor='date1'>
                    From
                  </label>
                  <input
                    className='custom-date-input bg-gray-100 text-gray-900 border-0 rounded-md p-2'
                    id='date1'
                    type='date'
                  />
                  <span className='absolute inset-y-0 left-[165px] top-7 flex items-center pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 text-black'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                      />
                    </svg>
                  </span>
                </div>
                <div className='flex flex-col w-full'>
                  <label className='text-sm mb-2 text-gray-900' htmlFor='date2'>
                    To
                  </label>
                  <input
                    className='custom-date-input bg-gray-100 text-gray-900 border-0 rounded-md p-2'
                    id='date2'
                    type='date'
                  />{" "}
                  <span className='absolute inset-y-0 right-3 top-7 flex items-center pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 text-black'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Start Booking Button */}
              <div className='w-full mt-6 button-login uppercase'>
                <Link to=''>
                  <div className='flex items-center'>
                    <span>Start Booking</span>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
