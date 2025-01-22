import BannerText from "../Shared/BannerText/BannerText";
import PlaceCard from "../Shared/PlaceCard/PlaceCard";
import Banner from "../Home/Banner/Banner";
import BookingButton from "../Shared/BannerText/BookingButton/BookingButton";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData(); // Load the data from JSON
  const [photoIndex, setPhotoIndex] = useState(0); // Manage the active index

  const currentPlace = data[photoIndex]; // Get the active place based on the index

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % data.length); // Rotate through places
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const handleLeftArrow = () => {
    setPhotoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleRightArrow = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const setActivePhoto = (photo) => {
    const newIndex = data.findIndex((place) => place.photo === photo);
    if (newIndex !== -1) setPhotoIndex(newIndex);
  };

  return (
    <div>
      <div className='flex'>
        {/* Banner */}
        <Banner photoBG={currentPlace.photoBG} />

        {/* Banner Text */}
        <BannerText
          placeName={currentPlace.placeName}
          id={currentPlace.id}
          info={currentPlace.info}
        />

        {/* Booking Button */}
        <div className="absolute left-20 lg:bottom-10 xl:bottom-36">
          <BookingButton
          id={currentPlace.id}
          ></BookingButton>
        </div>

        {/* Place Card and Buttons */}
        <div>
          <PlaceCard
            data={data}
            currentPhoto={currentPlace.photo}
            photos={data.map((place) => place.photo)}
            setActivePhoto={setActivePhoto}
          />

          {/* Left and Right Arrows */}
          <div className='absolute lg:bottom-[50px] lg:right-[165px] xl:bottom-[120px] xl:right-[305px] flex gap-2'>
            <div
              onClick={handleLeftArrow}
              className='text-4xl bg-[#22cb96] rounded-full text-white hover:bg-emerald-600 cursor-pointer'
            >
              <IoIosArrowBack />
            </div>
            <div
              onClick={handleRightArrow}
              className='text-4xl bg-[#22cb96] rounded-full text-white hover:bg-emerald-600 cursor-pointer'
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
