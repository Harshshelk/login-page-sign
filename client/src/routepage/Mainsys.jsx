import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Mainsys = () => {
  const [values , setValues] = useState({
    username:"" ,
     email:"" , 
     password: "",
  });
  const change =  (e)=>{
 setValues(values + e.target.value);
  };
  console.log(values);
  const register = async (f) => {
    f.preventdefault();
    try{
  const res = axios.post("http://localhost:1000/api/v1/register", values);
 console.log(res.data.sucessful);
    }catch(error){
alert(error.response.data.error);
    }
  };
  return(
    <div  className='flex h-csreen flex-col items-center justify-center'>
     <div className='w-[60vw] md:w-[50vw] lg:w-[30vw]' >
      <h2 className='text-3x1 font-bold text-center mb-1 text-blue-800'>taskify</h2>
      <h2 className='text-center items-center font-semibold text-xinc-900'>register with taskify</h2>
     
<div className='w-[60vw] md:w-[50vw] lg:w-[30vw] '>
  <form className='flex flex-col gap-4' >
<input type="username" placeholder='username' className='border rounded px-4 py-1 border-zinc-400 w-[300px] outline-none' value={values.username} onChange={change}/>
<input type="email"    placeholder='email'    className='border rounded px-4 py-1 border-zinc-400 w-[300px] outline-none' value={values.email}    onChange={change}/>
<input type="password" placeholder='password' className='border rounded px-4 py-1 border-zinc-400 w-[300px] outline-none' value={values.password} onChange={change}/>
<button className='bg-blue-400 text-white font-semibold py-2 rounded hover:bg-blue-800 w-[300px]' onClick={register}>submit</button>
  </form>
<h2 className='text-gray-900 text-left font-semibold '>you have account ?</h2>
 <h2 className='hover:underline'><Link to='/login'>login</Link></h2>
</div>
    </div>
    </div>
  )
};

export default Mainsys;


