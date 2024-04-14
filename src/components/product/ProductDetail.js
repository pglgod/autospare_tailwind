import '../../css/sizelist.css';
import React, { useEffect, useState } from 'react';
import { PiShoppingBagFill } from "react-icons/pi";
import { IoMdCart, IoMdShareAlt } from "react-icons/io";
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoWhatsapp, BiPlusCircle } from "react-icons/bi";
import { Link, Outlet, useLocation } from 'react-router-dom';


const images = [
    {
        id: 1,
        url: 'https://via.placeholder.com/800x800',
        alt: 'Product 1'
    },
    {
      id: 2,
      url: 'https://via.placeholder.com/800x800',
      alt: 'Product 2'
    },
    {
        id: 3,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 3'
    },
    {
        id: 4,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 4'
    },
    {
        id: 5,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 5'
    },
    {
        id: 6,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 6'
    },
    {
        id: 7,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 7'
    },
    {
        id: 8,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 8'
    },
    {
        id: 9,
        url: 'https://via.placeholder.com/800x800',
        alt: 'product 9'
    },
];

export default function ProductDetail() {

    const location = useLocation();

    // UI states
    const [ shareOpt, setShareOpt ] = useState(false)

    const [selectOpt, setSelectOpt] = useState();
    const [quant, setQuant] = useState(1);

    useEffect(() => {
      console.log(selectOpt)
    }, [selectOpt])
    

    const sizeList = [
        {
            id: "17inch",
            label: '17"'
        },
        {
            id: "18inch",
            label: '18"'
        },
        {
            id: "19inch",
            label: '19"'
        },
        {
            id: "20inch",
            label: '20"'
        },
        {
            id: "21inch",
            label: '21"'
        },
    ]


  return (
    <div className='bg-third-color' >
      
        <div className=" w-screen py-4 px-2 sm:px-5 md:px-10  flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-12">
            
            {/* img and thumbnails */}
            <div className="   lg:w-auto   md:h-[600px] lg:h-[500px] xl:h-[600px]  flex flex-col-reverse md:flex-row-reverse lg:flex-row gap-2 md:gap-4">
                <div className="  h-auto  w-full md:w-auto lg:h-full flex md:flex-col items-center gap-4 overflow-scroll scroll-smooth">
                    {
                        images.map((e)=>{
                            return <div key={e.id} className=" min-w-16 md:min-w-24 w-16 h-16   md:w-24 md:h-24 p-1 md:p-2 bg-white shadow-md">
                                        <img src={e.url} alt={e.alt} />
                                   </div>
                        })
                    }
                </div>
                <div className=" flex-1 lg:flex-none lg:w-[500px]   xl:w-[600px]  xl:h-[600px] p-3 sm:p-4 bg-white rounded-md shadow-md relative">
                    <img className=' m-auto  w-[568px] lg:w-auto rounded-md lg:rounded-none  '  src="https://via.placeholder.com/800x800" alt="" />
                    <div role='button'  className={`absolute right-2 top-2 p-2 flex items-center gap-1 text-md  bg-white rounded-bl-md hover:text-green-500 ${shareOpt ? 'text-green-500' : 'text-btn-0'} `} 
                    onClick={()=> shareOpt ? setShareOpt(false) : setShareOpt(true) } >
                        <p>Share</p>
                        <IoMdShareAlt/>
                    </div>
                    <div className={` ${shareOpt ? '' : 'hidden'} transition ease-in-out duration-1000  absolute  top-12 right-4 py-2 flex items-center gap-1.5 text-xl text-btn-0`}>
                        <BiLogoFacebookSquare  className=' hover:shadow-sm hover:text-blue-700 ' />
                        <BiLogoInstagram  className=' hover:shadow-sm text-lg hover:text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-sm ' />

                        <BiLogoWhatsapp  className=' hover:shadow-sm hover:text-green-600  ' />
                        <BiPlusCircle  className=' hover:shadow-sm hover:text-[#fd1d1d] ' />
                    </div>

                </div>
            </div>

            {/* Name and detail */}
            <div className="flex-1">
                
                <div className=" my-1 lg:my-5">
                    <h3 className=' text-sm lg:text-md text-second-color font-poppins' >Brand Name</h3>
                    <h3 className=' text-md lg:text-lg text-black font-poppins' >Product Name</h3>
                    <div className=" flex items-center gap-2 xl:gap-5 "> 
                        <p className=' text-md lg:text-lg text-btn-0 font-poppins ' >Seller : Seller Name</p>
                        <div className=" w-0.5 h-6 bg-main-color rounded "></div>
                        <p className=' text-sm lg:text-md text-second-color font-poppins' > 999+ Ratings & Reviews</p>
                    </div>
                    <p className=' mt-2 text-sm text-green-600 font-poppins font-medium' >Special price</p>
                    <p className='text-xl text-btn-0 font-poppins font-semibold' >₹1,200.09</p>
                    
                    <div className=" my-2 md:my-3 lg:my-5"> { /* size selctor */ }
                        <p className=" my-1 md:my-2 text-sm text-second-color font-poppins ">Size</p>
                        <div className=" flex items-center gap-4">
                            {/* radio buttons */}
                            {
                                sizeList.map((e) =>{
                                    return <div className=" size-button ">
                                        <input hidden='hidden' name="size" type="radio" id={e.id} value={e.label} 
                                            checked={selectOpt === e.label} 
                                            onChange={(e)=>setSelectOpt(e.target.value)}
                                        />
                                        <label htmlFor={e.id} className=' w-10 h-10 flex items-center justify-center rounded-md text-lg  font-poppins    ' >{e.label}</label>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className=" my-3 md:my-5 flex flex-col md:flex-row lg:flex-col  gap-3 md:gap-8 lg:gap-4">
                        <div className="  p-2 w-36 md:w-40 h-12 md:h-14 text-lg  text-btn-0 font-poppins border border-btn-0 rounded-lg relativ flex items-center justify-between">
                            <button className=' p-2 text-2xl ' disabled={quant <= 1 ? true : false}  onClick={()=>setQuant(quant - 1)} >-</button>
                                <span >{quant}</span>
                            <button className=' p-2 text-2xl ' disabled={quant >= 10 ? true : false}  onClick={()=>setQuant(quant + 1)} >+</button>
                        </div>
                        <div className=" flex-1 md:flex-none flex items-center justify-center gap-5 md:gap-6 lg:gap-4 ">
                            <button className=' flex-1  w-40 py-2.5  rounded-sm text-xl text-white font-poppins font-medium bg-orange-400 hover:bg-orange-500 flex items-center justify-center gap-2' > <IoMdCart/> <span>Add to cart</span></button>
                            <button className=' flex-1 w-36 py-2.5  rounded-sm text-xl text-white font-poppins font-medium bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2' > <PiShoppingBagFill/> <span>Buy Now</span></button>
                        </div>
                    </div>

                </div>

                <div className=" mt-10 mb-5 flex-1 border-b border-main-color "></div>

                <div className="">
                    <div className="flex items-center text-second-color text-md gap-2"><p className=' w-20' >SKU</p> : HBJ525B </div>
                    <div className="flex items-center text-second-color text-md gap-2"><p className=' w-20' >Category</p> : Wheals & Tyres</div>
                    <div className="flex items-center text-second-color text-md gap-2"><p className=' w-20' >Tag's</p> : AL-13, Wheals, Tyres</div>
                    
                </div>

            </div>
        </div>
        
        <div className="w-full  my-5 lg:my-10  border-b border-main-color"></div>

        <div className="">
            <div className="flex items-center justify-center gap-16  text-lg font-poppins ">
                <Link to='/shop/product' className={`${location.pathname === '/shop/product' ? "border-b-2 border-btn-0" : ""} transition-all ease-in duration-100`} >Discription</Link>
                <Link to='/shop/product/review' className={`${location.pathname === '/shop/product/review' ? "border-b-2 border-btn-0" : ""} transition-all ease-in duration-100`} >Review</Link>
                <Link to='/shop/product/similar' className={`${location.pathname === '/shop/product/similar' ? "border-b-2 border-btn-0" : ""} transition-all ease-in duration-100`} >Similar Products</Link>
            </div>
            <div className="py-5">
                <Outlet/>
            </div>
        </div>

    </div>
  )
}
