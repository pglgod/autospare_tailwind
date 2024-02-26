import React, {  useState } from 'react';

import { HiOutlineLockOpen, HiOutlineMail } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { Link } from 'react-router-dom';

export default function Login() {

  const [isChecked, setChecked] = useState(false);

  


  return (
    <div className='w-screen h-screen bg-white  flex items-center justify-center ' >


      <div className=" w-full h-full md:h-auto md:w-auto py-3 px-8 flex flex-col items-center justify-center bg-white shadow-md border border-btn-1 ">
        <p className=' py-10  text-xl text-second-color uppercase text-center' >login to autospares</p>

        <form onSubmit={(e)=>e.preventDefault()} action="" method="post" className=' text-btn-0 font-poppins flex flex-col gap-4'>

          <div className=" w-72 md:w-80  flex items-center relative">
            <input className=' w-full pl-10 py-2 text-md border border-btn-0 outline-none' name='email' type="email" placeholder='Email' />
            <label htmlFor="email" className=' absolute left-3 text-md' ><HiOutlineMail/></label>
          </div>
          
          <div className=" w-72 md:w-80  flex items-center relative">
            <input className=' w-full pl-10 py-2 text-md border border-btn-0 outline-none' name='password' type={isChecked? 'text' : 'password'}  placeholder='Password' />
            <label htmlFor="password" className=' absolute left-3 text-md' ><HiOutlineLockOpen/></label>
          </div>

          <div className=" w-72 md:w-80  flex items-center relative gap-2 text-md">
            <input type="checkbox" name="show" checked={isChecked} onChange={(e)=>{setChecked(e.target.checked)}} />
            <p  >Show password</p>
          </div>

          <div className=" w-72 md:w-80  mt-4 relative ">
            <input className='w-full py-2 bg-btn-1 hover:bg-btn-2 text-btn-0' type="submit" value="LogIn" />
          </div>

        </form>

        <div className=" my-8 ">
          <p className='text-center text-btn-0 font-poppins text-md' >Or login with</p>
          <div className=" my-3 flex items-center justify-center gap-4 ">
            <button className=' w-32 md:w-36 py-1 rounded-sm border border-main-color flex items-center justify-center gap-1 ' ><BiLogoFacebookSquare className=' text-blue-600' fontSize={20}/> <span>Facebook</span></button>
            <button className=' w-32 md:w-36 py-1 rounded-sm border border-main-color flex items-center justify-center gap-1 ' ><FcGoogle fontSize={20}/> <span>Google</span></button>
          </div>
        </div>

        <div className=" py-2 flex item-center justify-center">
          <p>Not a member? <Link to='/signup' className=' text-sky-700' >SignUp now</Link></p>
        </div>

      </div>

    </div>
  )
}
