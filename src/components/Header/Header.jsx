import React from "react";
import logo1 from "../../assets/images/photos/Logo1.png";
// import logo2 from "../../assets/images/photos/Logo2.png";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className='absolute top-0 z-50 right-5 w-screen px-20'>
      <div className='mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link to='/'>
            <img className='h-28' src={logo1} alt='Travel Guru' />
          </Link>
          {/* <Link to='/'>
            <img className='h-28' src={logo2} alt='Travel Guru' />{" "}
          </Link> */}
        </div>

        {/* Search */}
        <div>
          <input
            placeholder='Search...'
            className='input shadow-lg focus:border-2 border-gray-300 px-5 bg-gray-400 bg-opacity-50 rounded-lg lg:w-52 xl:w-80 2xl:w-80 transition-all focus:lg:w-64 focus:xl:w-96 outline-none placeholder:text-white placeholder:pl-5'
            name='search'
            type='search'
          />
          <svg
            className='size-6 absolute top-[46px] text-white left-[355px]'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              strokeLinejoin='round'
              strokeLinecap='round'
            />
          </svg>
        </div>

        {/* Options */}
        <div className='flex lg:gap-6 xl:gap-12 lg:text-lg xl:text-xl text-white'>
          <div>
            <NavLink to='/news' className='hover:text-teal-400 rounded-md'>
              News
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/destination'
              className='hover:text-teal-400 rounded-md'
            >
              Destination
            </NavLink>
          </div>
          <div>
            <NavLink to='/blog' className='hover:text-teal-400 rounded-md'>
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink to='/contact' className='hover:text-teal-400 rounded-md'>
              Contact
            </NavLink>
          </div>
        </div>

        {/* Login Button */}
        <div>
          <button className='button-login'>
            <span>LOGIN</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
