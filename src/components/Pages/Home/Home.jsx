import BannerText from "../Shared/BannerText/BannerText";
import PlaceCard from "../Shared/PlaceCard/PlaceCard";
import Banner from "../Home/Banner/Banner";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import coxBazar from "../../../assets/images/photos/CoxBazar.jpg";
import Sreemangal from "../../../assets/images/photos/sreemongol.png";
import Sundarbans from "../../../assets/images/photos/sundorbon.png";
import Sajek from "../../../assets/images/photos/Sajek.png";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [coxBazar, Sreemangal, Sundarbans, Sajek];

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos]);

  const handleLeftArrow = () => {
    setPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const handleRightArrow = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const currentPhoto = photos[photoIndex];

  const setActivePhoto = (photo) => {
    const newIndex = photos.indexOf(photo);
    if (newIndex !== -1) {
      setPhotoIndex(newIndex); // Update the index to the selected photo
    }
  };

  return (
    <div className='flex'>

      {/* Banner (bg img) */}
      <Banner
      data={data}
      photo={currentPhoto} />

      {/* Banner Texts */}
      <div>
        <BannerText
        data={data}
         />
      </div>

      {/* Place card and buttons */}
      <div>
        {/* PlaceCard */}
        <div>
          <PlaceCard
            data={data}
            photo={currentPhoto}
            photos={photos}
            setActivePhoto={setActivePhoto} // Pass the handler to PlaceCard
          />
        </div>

        {/* Left and Right Arrows */}
        <div className='absolute lg:bottom-[50px] lg:right-[165px] xl:bottom-[120px] xl:right-[305px] flex gap-2'>
          <div
            onClick={() => handleLeftArrow()}
            className='text-4xl bg-[#22cb96] rounded-full text-white hover:bg-emerald-600 cursor-pointer'
          >
            <IoIosArrowBack />
          </div>
          <div
            onClick={() => handleRightArrow()}
            className='text-4xl bg-[#22cb96] rounded-full text-white hover:bg-emerald-600 cursor-pointer'
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
