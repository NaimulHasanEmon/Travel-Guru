import BannerText from "../Shared/BannerText/BannerText";
import PlaceCard from "../Shared/PlaceCard/PlaceCard";
import Banner from '../Home/Banner/Banner';
import { useState } from "react";

const Home = () => {
  const [photo, setPhoto] = useState([]);

  return (
    <div className='flex'>
      {/* Background Banner */}
      <Banner></Banner>

      {/* Left Column */}
      <div>
        <BannerText></BannerText>
      </div>

      {/* Right Column */}
      <div>
        <PlaceCard
        ></PlaceCard>
      </div>
    </div>
  );
};

export default Home;
