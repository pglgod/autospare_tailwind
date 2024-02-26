import React, { useState } from 'react'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { FcGoogle, } from 'react-icons/fc'
import { SlScreenSmartphone } from 'react-icons/sl';
import { PiPassword } from "react-icons/pi";
import { HiOutlineLockOpen, HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Signup() {

  const [isChecked, setChecked] = useState(false)

  return (
      
      <div className='w-screen h-screen bg-white  flex items-center justify-center ' >


        <div className=" w-full h-full md:h-auto md:w-auto py-3 px-8 flex flex-col items-center justify-center bg-white shadow-md border border-btn-1 ">
          <div className="py-10">
            <p className='   text-xl text-second-color uppercase text-center' >SignUp here to </p>
            <p className='   text-xl text-second-color  text-center' >start shopping with AutoSpares</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} action="" method="post" className=' w-full sm:w-auto text-btn-0 font-poppins flex flex-col items-center gap-4'>

            
            <div className=" w-full sm:w-80 md:w-full  flex items-center relative">
              <input className=' w-full pl-4 py-2 text-md border border-btn-0 outline-none' name='email' type="email" placeholder='Full Name' />
            </div>

            <div className="w-full flex flex-col md:flex-row items-center  gap-4 ">

              <div className=" w-full sm:w-80  flex items-center relative">
                <input className=' w-full pl-10 py-2 text-md border border-btn-0 outline-none' name='email' type="email" placeholder='Email' />
                <label htmlFor="email" className=' absolute left-3 text-md' ><HiOutlineMail/></label>
              </div>

              <div className=" w-full sm:w-80  flex items-center relative">
                <input className=' w-full pl-10 py-2 text-md border border-btn-0 outline-none' name='phone' type="phone" placeholder='Phone' />
                <label htmlFor="email" className=' absolute left-3 text-md' ><SlScreenSmartphone/></label>
              </div>

            </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-4 ">
                <div className=" w-full sm:w-80  flex items-center relative">
                  <input className=' w-full pl-10 py-2 text-md border border-btn-0 outline-none' name='password' type='text'  placeholder='Password' />
                  <label htmlFor="password" className=' absolute left-3 text-md' ><HiOutlineLockOpen/></label>
                </div>
                <div className=" w-full sm:w-80  flex items-center relative">
                  <input className=' w-full pl-10 py-2 text-md border border-btn-0 outline-none' name='password' type={isChecked? 'text' : 'password'}  placeholder='Password' />
                  <label htmlFor="password" className=' absolute left-3 text-md' ><PiPassword/></label>
                </div>
            </div>

            <div className="w-full">

              <div className=" w-full sm:w-80 md:full  flex items-center relative gap-2 text-md">
                <input type="checkbox" name="show" checked={isChecked} onChange={(e)=>{setChecked(e.target.checked)}} />
                <p  >Check password</p>
              </div>
            </div>

            <div className=" w-full sm:w-80 md:w-full  mt-4 relative ">
              <input className='w-full py-2 bg-btn-1 hover:bg-btn-2 text-btn-0 uppercase ' type="submit" value="r e g i s t e r" />
            </div>

          </form>

          <div className=" my-8 ">
            <p className='text-center text-btn-0 font-poppins text-md' >Or continue with</p>
            <div className=" my-3 flex items-center justify-center gap-4 ">
              <button className=' w-32 md:w-36 py-1 rounded-sm border border-main-color flex items-center justify-center gap-1 ' ><BiLogoFacebookSquare className=' text-blue-600' fontSize={20}/> <span>Facebook</span></button>
              <button className=' w-32 md:w-36 py-1 rounded-sm border border-main-color flex items-center justify-center gap-1 ' ><FcGoogle fontSize={20}/> <span>Google</span></button>
            </div>
          </div>

          <div className="mb-5 flex item-center justify-center">
            <p>Have an account? <Link to='/login' className=' text-sky-700' >LogIn now</Link></p>
          </div>

        </div>

      </div>
  )
}
