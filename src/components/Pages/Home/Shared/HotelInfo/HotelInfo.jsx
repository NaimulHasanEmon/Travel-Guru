import { useLoaderData } from "react-router-dom";
import HotelInfoCard from "../HotelInfoCard/HotelInfoCard";
import map from "../../../../../assets/images/photos/Map.jpg";

const HotelInfo = () => {
  const hotelInfo = useLoaderData();
  console.log(hotelInfo);

  return (
    <div className="flex justify-center">
      <div className='absolute lg:top-[20%] xl:top-[15%]'>
        <div className='flex justify-center gap-10 px-10'>
          <div className='flex flex-col justify-center w-3/5 gap-2'>
            {hotelInfo.map((hotel) => (
              <HotelInfoCard key={hotel.id} hotel={hotel}></HotelInfoCard>
            ))}
          </div>
          <div className="w-2/5">
            <img src={map} className='lg:h-[350px] xl:h-[470px]' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
