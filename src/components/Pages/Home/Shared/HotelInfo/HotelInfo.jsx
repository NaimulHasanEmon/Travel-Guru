import { useLoaderData } from "react-router-dom";
import HotelInfoCard from "../HotelInfoCard/HotelInfoCard";

const HotelInfo = () => {
  const hotelInfo = useLoaderData();
  console.log(hotelInfo);

  return (
    <div className='flex justify-center'>
      <div className='absolute lg:top-[20%] xl:top-[15%]'>
        <div className='flex justify-center gap-10 px-10 w-3/5'>
          <div className='flex flex-col justify-center gap-2'>
            {hotelInfo.map((hotel) => (
              <HotelInfoCard key={hotel.id} hotel={hotel}></HotelInfoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
