import React from 'react'
import { Link, } from 'react-router-dom'

export default function ProductCard() {
  
  return (
    <Link to='/shop/product' className=' w-auto sm:w-60 p-2  shadow-md bg-white  overflow-hidden  ' >
        <div className="  w-full ">
            <img src="https://i.pinimg.com/564x/24/e7/c4/24e7c4759aa45d349f3b54bc9685a035.jpg" alt="" />
        </div>
        <div className=" flex-1 px-4 py-2 font-poppins ">
            <p className='text-md' >G-Wagon Aloye Wheel</p>
            <p className='text-sm text-btn-0 ' >Forged Wheels</p>
            <h3 className='text-xl font-semibold text-black ' >Rs: 15990</h3>

        </div>
    </Link>
  )
}
