import { useContext } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { DiApple } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Login = () => {
  const { name, user, createUser } = useContext(AuthContext);

  // console.log(name);

    // With Google
    // const handleLoginWithGoogle = () => {
    //   logInWithGoogle()
    //     .then((result) => {
    //       console.log(result.user);
    //       navigate(location?.state ? location.state : "/");
    //     })
    //     .catch((error) => {
    //       console.log("Error: " + error.message);
    //     });
    // };
  
    // // With Github
    // const handleLoginWithFacebook = () => {
    //   loginWithGithub()
    //    .then((result) => {
    //       console.log(result.user);
    //       navigate(location?.state ? location.state : "/");
    //     })
    //    .catch((error) => {
    //       console.log("Error: " + error.message);
    //     });
    // };
  
    // // With Twitter
    // const handleLoginWithTwitter = () => {
    //   loginWithTwitter()
    //    .then((result) => {
    //       console.log(result.user);
    //       navigate(location?.state? location.state : "/");
    //     })
    //    .catch((error) => {
    //       console.log("Error: " + error.message);
    //     });
    // };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border border-gray-100 shadow w-[360px] p-8 rounded-md bg-white'>
        <div>
          <h1 className='text-4xl font-semibold'>Login</h1>
        </div>
        <div className='mt-6'>
          <input
            placeholder='Email'
            type='text'
            className='p-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
          <input
            placeholder='Password'
            type='password'
            className='p-2 px-3 mt-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
        </div>
        <div class='flex items-center justify-between flex-wrap mt-5'>
          <label class='text-sm cursor-pointer' for='remember-me'>
            <input class='mr-2' id='remember-me' type='checkbox' />
            Remember me
          </label>
          <Link to='' class='text-sm text-[#ffda22] font-medium underline hover:underline mb-0.5'>
            Forgot password?
          </Link>
        </div>
        <div>
          <Link to='/login' className='mt-4 button-login'>
            <span>Login</span>
          </Link>
        </div>
        <p class='mt-4'>
          {" "}
          Don't have an account? {""}
          <Link to='/register' class='text-sm text-[#ffda22] font-medium underline -200 hover:underline mt-4'>
            Create an account
          </Link>
        </p>
        <div>
            <p className='flex justify-center text-xs text-slate-500 mt-5'>
              Or Login with
            </p>
            <div>
              <div class='flex gap-3'>
                {/* Login with google */}
                <button
                  onClick={() => handleLoginWithGoogle()}
                  className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
                >
                  <FcGoogle className='text-xl' />
                </button>

                {/* Login with Apple */}
                {/* <button className='btn-google'>
                            <DiApple className="text-2xl" />
                          </button> */}

                {/* Login with Facebook */}
                <button
                onClick={() => handleLoginWithFacebook()}
                className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'>
                  <FaFacebook className='text-[22px] text-blue-600' />
                </button>

                {/* Login with X or Twitter */}
                <button
                onClick={() => handleLoginWithTwitter()}
                className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'>
                  <RiTwitterXLine className='text-2xl' />
                </button>
              </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Login;
