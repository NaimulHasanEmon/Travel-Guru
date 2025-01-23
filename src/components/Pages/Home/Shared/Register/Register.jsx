import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { DiApple } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!(password === confirmPassword)) {
      toast("Your passwords are not same! Please recheck.");
      return;
    }

    if (password.length < 6) {
      setRegisterError("Your Password must have at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password must contain at least one uppercase letter."
      );
      return;
    }

    // Reset error messages
    setRegisterError('');

    createUser(email, password)
      .then((result) => {
          console.log(result);
          form.reset();
          navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });

    // console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <div className='flex justify-center'>
      <div className='border absolute top-[16%] border-gray-100 shadow w-[360px] px-8 py-5 rounded-md bg-white'>
        <div>
          <h1 className='text-4xl font-semibold'>Register</h1>
        </div>
        <form onSubmit={handleRegister} className='mt-6'>
          <input
            placeholder='First Name'
            name='firstName'
            type='text'
            required
            className='p-2 mb-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
          <input
            placeholder='Last Name'
            name='lastName'
            type='text'
            required
            className='p-2 mb-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
          <input
            placeholder='Email'
            name='email'
            type='email'
            required
            className='p-2 mb-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
          <input
            placeholder='Password'
            name='password'
            type='password'
            required
            className='p-2 mb-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
          <input
            placeholder='Confirm Password'
            name='confirmPassword'
            type='password'
            required
            className='p-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300'
          />
          <div>
            {registerError && (
              <div className='text-red-500 text-xs'>{registerError}</div>
            )}
          </div>
          <div>
            <button type='submit' className='mt-4 w-full button-login'>
              <span>Register</span>
            </button>
          </div>
        </form>
        <p class='mt-2'>
          {" "}
          Already have an account? {""}
          <Link
            to='/login'
            class='text-sm text-[#ffda22] font-medium underline -200 hover:underline mt-4'
          >
            Login
          </Link>
        </p>
        <div>
          <p className='flex justify-center text-xs text-slate-500 mt-5'>
            Or continue with
          </p>
          <div>
            <div class='flex mt-2 gap-3'>
              {/* Login with google */}
              <button
                onClick={() => handleLoginWithGoogle()}
                className='w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
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
                className='w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
              >
                <FaFacebook className='text-[22px] text-blue-600' />
              </button>

              {/* Login with X or Twitter */}
              <button
                onClick={() => handleLoginWithTwitter()}
                className=' w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
              >
                <RiTwitterXLine className='text-2xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
