import React, { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineX } from 'react-icons/hi'

export default function Header() {
    const [header, setheader] = useState(true)
    const HideHeader = ()=>{
        setheader(false);
    }
  return (
    <>
        <header className={`hidden w-screen py-3 bg-second-color md:flex items-center justify-between  relative ${header === true ? "md:flex" : "md:hidden"} `} >
            <div className=" flex-1 flex items-center justify-between px-20">
                   
                <div className="flex flex-col items-center font-poppins text-white">
                    <p className='flex items-center gap-2 text-lg  font-semibold' > <HiOutlinePhone className='text-2xl font-semibold'/> Call us</p>
                    <p className='text-lg'>+01 123 4567 890</p>
                </div>
                <div className="flex flex-col items-center font-poppins text-white">
                    <p className='flex items-center gap-2 text-lg font-semibold' > <HiOutlineMail className='text-2xl font-semibold'/> Send us mail</p>
                    <p className='text-lg'>autospares@gmail.com</p>
                </div>

                <div className="">
                    <button className=' bg-btn-0 text-white font-poppins hover:bg-white hover:text-btn-0 text-lg px-10 py-2 rounded-lg' >Are You Seller</button>
                </div>
            </div>
            <div className=" absolute right-8 ">
                <button onClick={HideHeader} className='bg-none text-btn-0 text-2xl'>
                    <HiOutlineX/>
                </button>
            </div>
        </header> 
    </>
  )
}
