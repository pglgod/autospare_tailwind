import React from "react";
import { Link } from "react-router-dom";
import { FaUser,FaFolder, FaPowerOff, FaWallet } from "react-icons/fa";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function BuyerAccount() {
  return (
    <div className=" w-screen h-screen py-2 px-8  bg-third-color  flex flex-row justify-center gap-2">
        
        <div className=" w-72 ">

            <div className=" w-full py-2 px-3 bg-white shadow-lg  border-r-4 border-btn-1 ">
                <div className=' flex items-center gap-2 '>
                    <img  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="img" />
                    <div>
                        <p className="text-sm font-poppins text-second-color" >Hello,</p>
                        <h4 className="text-md font-poppins text-btn-0" >Amit Vishwakarma</h4>
                    </div>
                </div>
            </div>
            
            <div className=" mt-2 w-full  bg-white shadow-lg border-r-4 border-btn-1">
                
                <div className="">
                    <Link className=" px-5 py-2 text-lg uppercase text-second-color hover:text-btn-1 font-poppins flex items-center gap-2 relative" > <PiShoppingBagOpenFill fontSize={20} /> <span>Orders</span> <MdKeyboardArrowRight className=" text-2xl absolute right-2" /> </Link>
                </div>

                <div className="border-t">
                    <h1 className=" px-5 py-2 text-lg uppercase text-second-color font-poppins flex items-center gap-2" > <FaUser fontSize={20}/> <span>Account Setting</span></h1>
                        <ul className="  ">
                            <li className="px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link  >Profile Information</Link>
                            </li>
                            <li className=" px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link >Manage Addresses</Link>
                            </li>
                        </ul>
                </div>

                <div className="border-t">
                    <h1 className=" px-5 py-2 text-lg uppercase text-second-color font-poppins  flex items-center gap-2" > <FaFolder fontSize={20}/> <span>My Stuff</span></h1>
                        <ul className="  ">
                            <li className="px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link  >Wishlist</Link>
                            </li>
                            <li className=" px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link >Coupons</Link>
                            </li>
                            <li className=" px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link >Rewiew & Rating</Link>
                            </li>
                            <li className=" px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link >All Notifications</Link>
                            </li>
                        </ul>
                </div>
                
                <div className="border-t">
                    <h1 className=" px-5 py-2 text-lg uppercase text-second-color font-poppins flex items-center gap-2" > <FaWallet fontSize={20}/> <span>Payments</span></h1>
                        <ul className="  ">
                            <li className="px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link  >Gift Cards</Link>
                            </li>
                            <li className=" px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link >Save UPI</Link>
                            </li>
                            <li className=" px-11 py-2 text-md text-btn-0 font-poppins hover:bg-btn-2">
                                <Link >Save Cards</Link>
                            </li>
                        </ul>
                </div>

                <div className="border-t">
                    <button className="px-5 py-3 text-lg uppercase text-second-color font-poppins  flex items-center gap-2" > <FaPowerOff className="text-btn-1 text-xl" /> Logout</button>
                </div>

            </div>
            

        </div>

        <div className="flex-1 bg-white shadow-lg ">

        </div>


    </div>
  );
}
