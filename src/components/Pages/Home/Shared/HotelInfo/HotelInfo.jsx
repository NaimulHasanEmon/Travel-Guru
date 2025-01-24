import { useLoaderData } from "react-router-dom";
import HotelInfoCard from "../HotelInfoCard/HotelInfoCard";
import map from "../../../../../assets/images/photos/Map.jpg";

const HotelInfo = () => {
  const hotelInfo = useLoaderData();
  console.log(hotelInfo);

  return (
    <div className="flex justify-center">
      <div className='absolute top-[20%]'>
        <div className='flex justify-center gap-10'>
          <div className='flex flex-col justify-center w-1/2 gap-2'>
            {hotelInfo.map((hotel) => (
              <HotelInfoCard key={hotel.id} hotel={hotel}></HotelInfoCard>
            ))}
          </div>
          <div className="w-1/2">
            <img src={map} className='h-[470px]' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
