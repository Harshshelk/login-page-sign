import { Outlet , Link } from "react-router-dom";
import React from 'react';

const Login = () => {
  return (
    <>
  <div  className='flex h-csreen flex-col items-center justify-center'>
       <div className='w-[60vw] md:w-[50vw] lg:w-[30vw]' >
        <h2  className='text-3x1 font-bold text-center mb-1 text-blue-800'>taskify</h2>
        <h2 className='text-center font-semibold text-xinc-900'> register with taskify</h2>
       </div>
  <div className='w-[60vw] md:w-[50vw] lg:w[30vw]'>
    <form className='flex flex-col gap-4'>
  <input type="email" placeholder='email' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none'/>
  <input type="password" placeholder='password' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none'/>
  <button className='bg-blue-400 text-white font-semibold py-2 rounded hover:bg-blue-800' >submit</button>
  <p className='text-gray-900 text-center font-semibold rounded-2xl'>
  do not have an account ?
  <p className="hover:underline">
  <Link to='/mainsys'> sign'up</Link>  
  </p>    
  </p>
    </form>
  </div>
      </div>

      <Outlet/>

</>
  )
};


export default Login;