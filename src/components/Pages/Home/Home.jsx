import BannerText from "../Shared/BannerText/BannerText";
import PlaceCard from "../Shared/PlaceCard/PlaceCard";

const Home = () => {
  return (
    <div className='flex'>
      {/* Left Column */}
      <div>
        <BannerText></BannerText>
      </div>
      {/* Right Column */}
      <div>
        <PlaceCard></PlaceCard>
      </div>
    </div>
  );
};

export default Home;
