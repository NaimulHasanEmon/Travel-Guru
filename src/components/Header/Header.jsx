import React, { useContext } from "react";
import logoWhite from "../../assets/images/photos/LogoWhite.png";
import logoBlack from "../../assets/images/photos/LogoBlack.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/hotelinfo";

  const handleLogOut = () => {
    logOut()
     .then(() => {
        console.log('User logged out successfully.');
      })
     .catch((error) => {
        console.log("Error: " + error.message);
      });
  }

  return (
    <div className={`fixed top-0 z-50 w-full px-20 ${isLoginPage && 'bg-white'}`}>
      <div className='mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link to='/'>
            <img
              className='h-28'
              src={isLoginPage ? logoBlack : logoWhite}
              alt='Travel Guru'
            />
          </Link>
        </div>

        {/* Search */}
        <div className={isLoginPage && "hidden"}>
          <input
            placeholder='Search...'
            className='input shadow-lg focus:border-2 border-gray-300 px-5 bg-gray-500 bg-opacity-10 rounded-lg lg:w-52 xl:w-80 2xl:w-80 transition-all focus:lg:w-64 focus:xl:w-96 outline-none placeholder:text-white placeholder:pl-5'
            name='search'
            type='search'
          />
          <svg
            className='size-6 fixed top-[46px] text-white xl:left-[285px] lg:left-[265px]'
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
        <div
          className={`flex lg:gap-6 xl:gap-12 lg:text-lg xl:text-xl nav-options ${
            isLoginPage ? "text-black" : "text-white"
          }`}
        >
          <div>
            <NavLink
              to='/news'
              className='hover:text-teal-700 hover:underline mx-2 rounded-md hover:border-teal-700 hover:rounded-none'
            >
              News
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/destination'
              className='hover:text-teal-700 hover:underline rounded-md mx-2 hover:border-teal-700 hover:rounded-none'
            >
              Destination
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/blog'
              className='hover:text-teal-700 hover:underline rounded-md hover:border-teal-700 hover:rounded-none'
            >
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/contact'
              className='hover:text-teal-700 hover:underline rounded-md hover:border-teal-700 hover:rounded-none'
            >
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/hotelinfo'
              className='hover:text-teal-700 hover:underline rounded-md hover:border-teal-700 hover:rounded-none'
            >
              Hotel Info
            </NavLink>
          </div>
        </div>

        {/* Login Button */}
        <div>
          {user ? (
            <>
              <Link
              to='/login'
              onClick={() => handleLogOut()}
              className='button-login'>
                <span>LOGOUT</span>
              </Link>
            </>
          ) : (
            <>
              <Link to='/login' className='button-login'>
                <span>LOGIN</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
