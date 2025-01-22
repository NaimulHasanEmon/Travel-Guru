import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookingButton = ({id}) => {
  return (
    <div>
      <div className={`lg:mt-5 xl:mt-10`}>
        <Link to={`/${id}`} className='w-40 button-login'>
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

export default BookingButton;
