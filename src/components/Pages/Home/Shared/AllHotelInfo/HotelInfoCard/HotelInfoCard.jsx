import { IoPersonOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaBath } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { FaTv } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { RiFridgeFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

const HotelInfoCard = ({ hotel, onLocationChange }) => {
  const {
    image,
    name,
    guests,
    bedrooms,
    beds,
    baths,
    wifi,
    rating,
    numberOfRatings,
    pricePerNight,
    totalCost,
    pets,
    ac,
    tv,
    kitchen,
    miniFridge,
    parking,
    coffeeMaker,
    latitude,
    longitude,
  } = hotel;

  return (
    <div>
      {/* Cards */}
      <div className='flex bg-base-100 shadow-xl rounded-2xl'>
        <div className='w-1/3 my-auto'>
          <img
            src={image}
            alt='Shoes'
            className='xl:h-full w-full object-cover p-2 rounded-2xl'
          />
        </div>
        <div className='w-2/3 p-2'>
          {/* Hotel Name */}
          <p className='font-bold text-lg'>{name}</p>

          {/* All Features */}
          <div className='grid grid-cols-3 gap-2 pb-2'>
            {/* Guests */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <IoPersonOutline />
              </div>
              <p className='text-sm'>{guests} Guests</p>
            </div>

            {/* Bedroom */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <IoBedOutline />
              </div>
              <p className='text-sm'>{bedrooms} Bedrooms</p>
            </div>

            {/* Beds */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <MdOutlineBedroomChild />
              </div>
              <p className='text-sm'>{beds} Beds</p>
            </div>

            {/* Bath */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <FaBath />
              </div>
              <p className='text-sm'>{baths} Baths</p>
            </div>

            {/* Wifi */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <FaWifi />
              </div>
              <p className='text-sm'>{wifi ? "Free Wifi" : "Not Available"}</p>
            </div>

            {/* Pets */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <MdOutlinePets />
              </div>
              <p className='text-sm'>{pets ? "Allowed" : "Not Allowed"}</p>
            </div>

            {/* AC */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <TbAirConditioning />
              </div>
              <p className='text-sm'>{ac ? "AC" : "No AC"}</p>
            </div>

            {/* TV */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <FaTv />
              </div>
              <p className='text-sm'>{tv ? "TV" : "No TV"}</p>
            </div>

            {/* Kitchen */}
            <div className='flex items-center gap-1' title='Kitchen'>
              <div className='text-[#f1cc10]'>
                <FaKitchenSet />
              </div>
              <p className='text-sm'>{kitchen ? "Kitchen" : "No Kitchen"}</p>
            </div>

            {/* Mini Fridge */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <RiFridgeFill />
              </div>
              <p className='text-sm'>
                {miniFridge ? "Mini Fridge" : "No Fridge"}
              </p>
            </div>

            {/* Parking */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <FaCar />
              </div>
              <p className='text-sm'>{parking ? "Parking" : "No Parking"}</p>
            </div>

            {/* Coffee Maker */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <GiCoffeeCup />
              </div>
              <p className='text-sm'>
                {coffeeMaker ? "Coffee Maker" : "No Coffee Maker"}
              </p>
            </div>
          </div>

          {/* Rating & Pricing */}
          <div className='flex justify-between gap-3 pr-10'>
            {/* Rating */}
            <div className='flex items-center gap-1'>
              <div className='text-[#f1cc10]'>
                <FaStar />
              </div>
              <div>
                <p>
                  {rating} ({numberOfRatings})
                </p>
              </div>
            </div>

            {/* Price Per Night */}
            <div className='flex items-center gap-1'>
              <div>
                <div className='flex items-center'>
                  <div className='font-bold'>
                    <span>${pricePerNight}/</span>
                  </div>
                  <div>
                    <p>night</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className='flex items-center gap-1'>
              <div>
                <div className='flex items-center gap-1'>
                  <div className='font-bold'>
                    <span>${totalCost}</span>
                  </div>
                  <div>
                    <p>total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Show On Map Button */}
          <div className='mt-2'>
            <button
              className='bg-blue-500 w-full text-white py-1 px-3 rounded hover:bg-blue-700'
              onClick={() => onLocationChange(latitude, longitude)}
            >
              Show on Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoCard;
