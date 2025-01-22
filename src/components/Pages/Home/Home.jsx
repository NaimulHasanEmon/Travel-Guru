import BannerText from "../Shared/BannerText/BannerText";
import PlaceCard from "../Shared/PlaceCard/PlaceCard";
import Banner from '../Home/Banner/Banner';
import { useEffect, useState } from "react";

import coxBazar from '../../../assets/images/photos/CoxBazar.jpg';
import sreemongol from '../../../assets/images/photos/Sreemongol.png';
import sundarban from '../../../assets/images/photos/sundorbon.png';
import sajek from '../../../assets/images/photos/Sajek.png';

const Home = () => {
  const [photo, setPhoto] = useState(coxBazar);
  const photos = [coxBazar, sreemongol, sundarban, sajek];
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className='flex'>
      {/* Background Banner */}
      <Banner
      photo={photos[photoIndex]}
      ></Banner>

      {/* Left Column */}
      <div>
        <BannerText></BannerText>
      </div>

      {/* Right Column */}
      <div>
        <PlaceCard
        photo={photos[photoIndex]}
        ></PlaceCard>
      </div>
    </div>
  );
};

export default Home;
