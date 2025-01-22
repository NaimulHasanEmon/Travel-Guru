import BannerText from "../Shared/BannerText/BannerText";
import PlaceCard from "../Shared/PlaceCard/PlaceCard";
import Banner from "../Home/Banner/Banner";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import coxBazar from "../../../assets/images/photos/CoxBazar.jpg";
import sreemongol from "../../../assets/images/photos/Sreemongol.png";
import sundarban from "../../../assets/images/photos/sundorbon.png";
import sajek from "../../../assets/images/photos/Sajek.png";

const Home = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [coxBazar, sreemongol, sundarban, sajek];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos]);

  // handle left arrow function
  const handleLeftArrow = () => {
    setPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // handle right arrow function
  const handleRightArrow = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // The selected photo based on the current index
  const currentPhoto = photos[photoIndex];

  return (
    <div className='flex'>
      {/* Background Banner */}
      <Banner photo={currentPhoto} />

      {/* Left Column */}
      <div>
        <BannerText />
      </div>

      {/* Right Column */}
      <div>
        <div>
          <PlaceCard
            photo={currentPhoto} // Send the current photo to PlaceCard
            photos={photos} // Send the entire photos array to PlaceCard
          />
        </div>

        {/* Navigation Arrows */}
        <div className='absolute bottom-[50px] right-[550px] flex gap-2'>
          <div
          onClick={() => handleLeftArrow()}
          className='text-4xl bg-slate-600 rounded-full text-white hover:bg-teal-400 cursor-pointer'>
            <IoIosArrowBack />
          </div>
          <div
          onClick={() => handleRightArrow()}
          className='text-4xl bg-slate-600 rounded-full text-white hover:bg-teal-400 cursor-pointer'>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
