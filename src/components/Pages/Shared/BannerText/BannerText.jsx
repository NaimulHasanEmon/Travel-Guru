import { Link } from "react-router-dom";
import "./BannerText.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const BannerText = () => {
  return (
    <div className='absolute top-[30%] left-10 w-1/2 px-10'>
      <p className='text-9xl Cox-bazar-title text-white'>Cox's Bazar</p>
      <p className='under-cox-bazar-title text-white'>
        Cox's Bazar, located in Bangladesh, is renowned for its breathtaking
        120-kilometer-long sandy beach, the world's longest uninterrupted sea
        beach. Popular for its serene beauty, vibrant sunsets, and cultural
        diversity, it attracts tourists globally for relaxation and exploration.
      </p>

      {/* Login Button */}
      <div className='mt-10'>
        <Link
        to=''
        className='w-40 button-login'>
          <div className='flex items-center'>
            <span>Booking</span>
            <span>
              <FaLongArrowAltRight />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BannerText;
