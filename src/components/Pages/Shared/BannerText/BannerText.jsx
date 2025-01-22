import { Link } from "react-router-dom";
import "./BannerText.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const BannerText = ({ placeName, info }) => {
  return (
    <div className="absolute lg:top-[25%] xl:top-[30%] left-10 w-1/2 px-10">
      <p className="text-8xl Cox-bazar-title text-white mb-2">{placeName}</p>
      <p className="under-cox-bazar-title text-xl text-white">{info}</p>

      {/* Booking Button */}
      <div className="lg:mt-5 xl:mt-10">
        <Link to="" className="w-40 button-login">
          <div className="flex items-center">
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

