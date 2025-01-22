import "./BannerText.css";

const BannerText = ({ placeName, info }) => {
  return (
    <div className='absolute lg:top-[25%] xl:top-[30%] left-10 w-1/2 px-10'>
      <p className='text-8xl Cox-bazar-title text-white mb-2'>{placeName}</p>
      <p className='under-cox-bazar-title text-xl text-white'>{info}</p>
    </div>
  );
};

export default BannerText;
