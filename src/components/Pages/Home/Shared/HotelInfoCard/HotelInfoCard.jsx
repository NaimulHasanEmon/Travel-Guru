import { IoPersonOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";

const HotelInfoCard = ({ hotel }) => {
  const {
    image,
    name,
    guests,
    bedrooms,
    beds,
    baths,
    wifi,
    cancellationFlexibility,
    rating,
    numberOfRatings,
    pricePerNight,
    totalCost,
  } = hotel;

  return (
    <div>
      <div className='flex bg-base-100 shadow-xl rounded-2xl'>
        <div className='w-1/2'>
          <img
            src={image}
            alt='Shoes'
            className='h-40 w-full object-cover p-2 rounded-2xl'
          />
        </div>
        <div className='w-1/2 p-2'>
          {/* Hotel Name */}
          <p className='font-bold text-lg'>{name}</p>

          {/* Features (bed, bath...etc) */}
          <div className='grid grid-cols-2 gap-2 border-b-2 border-base-300 pb-2 text-sm'>
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <IoPersonOutline />
              </div>
              <p>{guests} guests</p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <IoBedOutline />
              </div>
              <p>{bedrooms} bedrooms</p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <MdOutlineBedroomChild />
              </div>
              <p>{beds} beds</p>
            </div>
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <FaBath />
              </div>
              <p>{baths} baths</p>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <div className='text-[#f1cc10]'>
              <FaWifi />
            </div>
            <div>Wifi: {wifi ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoCard;
