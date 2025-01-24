import { useLoaderData } from "react-router-dom";
import HotelInfoCard from "../HotelInfoCard/HotelInfoCard";
import HotelMap from "../HotelMap/HotelMap";
import { useState } from "react";

const HotelInfo = () => {
  const allHotel = useLoaderData();

  // Default values for map
  const [location, setLocation] = useState({
    latitude: allHotel[0].latitude,
    longitude: allHotel[0].longitude,
  });

  // Update location
  const handleLocationChange = (latitude, longitude) => {
    setLocation({ latitude, longitude });
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='absolute lg:top-[20%] xl:top-[15%]'>
          <div className='flex justify-center gap-10 w-screen px-32 overflow-x-hidden'>
            <div className='flex flex-col justify-center gap-2 w-2/3'>
              {allHotel.map((hotel) => (
                <HotelInfoCard key={hotel.id} hotel={hotel} onLocationChange={handleLocationChange}></HotelInfoCard>
              ))}
            </div>
            <div className='w-1/3'>
              <div className="sticky top-20"><HotelMap
              location={location}
              ></HotelMap></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
