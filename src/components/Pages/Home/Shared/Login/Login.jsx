import { useContext } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { name, user, createUser } = useContext(AuthContext);

  console.log(name);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='border border-gray-100 shadow w-[360px] p-8 rounded-md bg-white'>
        <div>
          <h1 className='text-4xl font-semibold'>
            Login
          </h1>
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
        <div className='mt-4 flex items-center'>
          <input
            className='h-3 w-3 border-gray-300 focus:ring-blue-500 text-blue-600'
            type='checkbox'
            id='terms'
          />
          <label className='ml-2 text-sm text-gray-600' htmlFor='terms'>
            I agree to the
            <a className='text-blue-600 hover:underline' href='#'>
              Terms and Conditions
            </a>
          </label>
        </div>
        <div>
          <Link to='/login' className='mt-7 button-login'>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
