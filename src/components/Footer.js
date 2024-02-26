import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    
  return (
    <>
        <footer className='bg-white'>
            <div className=" px-8 py-8 lg:py-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 md:gap-20 xl:gap-28">

                <div className="flex flex-col gap-6 sm:gap-12 items-center justify-center">
                    <img className=' w-52 md:w-72 xl:w-80  h-auto' src={require('../img/logo.png')} alt="" />
                    
                    <div className="lg:hidden flex flex-col gap-5 xl:gap-8">
                        <p className='text-second-color text-lg' >Newslatter</p>
                        <div className=" flex gap-3" >
                            <input className=' w-52 sm:w-64 lg:w-52 xl:w-64 text-lg sm:text-xl border-b border-black py-0.5 sm:py-1  font-poppins text-second-color placeholder:text-second-color font-light placeholder:capitalize outline-none ' type="email" placeholder='Enter your email address' />
                            <input className=' text-lg sm:text-xl border-b border-black py-0.5 sm:py-1  font-poppins text-black uppercase cursor-pointer' type="button" value="Subscribe"/>
                        </div>
                    </div>
                </div>
                
                <div className=" flex flex-row justify-around gap-12 xl:gap-28">
                
                    <div className="flex  justify-around  gap-12 xl:gap-28">
                        <div className=" flex flex-col  gap-5 xl:gap-8">
                            <p className='text-second-color text-lg' >Links</p>
                            <Link className='text-xl' to='/' >Home</Link>
                            <Link className='text-xl' to='/shop' >Shop</Link>
                            <Link className='text-xl' to='/about' >About</Link>
                            <Link className='text-xl' to='/contact' >Contact</Link>
                        </div>
                        <div className="flex flex-col gap-5 xl:gap-8">
                            <p className='text-second-color text-lg' >Links</p>
                            <Link className='text-xl' to='/payment_options'>Payment Options</Link>
                            <Link className='text-xl' to='/returns'>Returns</Link>
                            <Link className='text-xl' to='/Privacy Policies'>Returns</Link>
                        </div>
                    </div>
                    <div className=" hidden  lg:flex flex-col gap-5 xl:gap-8">
                        <p className='text-second-color text-lg' >Newslatter</p>
                        <div className=" flex gap-3" >
                            <input className='w-64 lg:w-52 xl:w-64 text-xl border-b border-black py-1  font-poppins text-second-color placeholder:text-second-color font-light placeholder:capitalize outline-none ' type="email" placeholder='Enter your email address' />
                            <input className='text-xl border-b border-black py-1  font-poppins text-black uppercase cursor-pointer' type="button" value="Subscribe"/>
                        </div>
                    </div>

                </div>

            </div>
            <div className="py-4 md:py-6 lg:py-8  border-t border-main-color">
                <p className='text-center text-sm md:text-lg font-poppins text-second-color '>&copy;AutoSpares. <span className=' hidden md:inline'>All Rights Reserved</span> || Developed By Amit Vishwakarma "PGLGOD"</p>
            </div>
        </footer> 
    </>
  )
}
