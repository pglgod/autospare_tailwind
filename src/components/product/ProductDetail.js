import '../../css/sizelist.css';
import React, { useEffect, useState } from 'react';
import { PiShoppingBagFill } from "react-icons/pi";
import { IoMdCart, IoMdShareAlt } from "react-icons/io";
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoWhatsapp, BiPlusCircle } from "react-icons/bi";
import { MdStar } from "react-icons/md";
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
                <div className=" flex flex-col items-center justify-center">
                    <div className=" my-1 lg:my-5 text-center ">
                        <p className=' text-lg lg:text-xl text-btn-3 font-poppins' >Brand GUFYG</p>
                        <p className=' text-md lg:text-lg text-black font-poppins' >Mercedes Maybach GLS Headlamp</p>
                        <p className=' text-md lg:text-lg text-btn-0 font-poppins ' >22G Auto </p>
                        <p className=' text-sm lg:text-md  text-second-color font-poppins flex items-center justify-center gap-1' > <span className=' py-0.5 px-1 rounded-md flex items-center justify-center bg-[#B78324] text-white' >4.2 <MdStar/></span> 99+ Ratings</p>

                        <p className='text-xl text-btn-0 font-poppins font-semibold' >₹3800.68</p>
                        <p className='text-sm text-btn-3 font-poppins font-light' >
                            MRP <span className=' relative' >₹5000.90<span className=' left-0 top-[50%] absolute w-full h-[1px] bg-btn-3' ></span></span> <span className=' font-medium' >(24%OFF)</span>
                        </p>
                    
                        <div className=" my-2 md:my-3 "> { /* size selctor */ }
                            <p className=" my-1 md:my-2 text-sm text-second-color font-poppins ">SIZE</p>
                            <div className=" flex items-center justify-center gap-4">
                                {/* radio buttons */}
                                {
                                    sizeList.map((e) =>{
                                        return <div className=" size-button ">
                                            <input hidden='hidden' name="size" type="radio" id={e.id} value={e.label} 
                                                checked={selectOpt === e.label} 
                                                onChange={(e)=>setSelectOpt(e.target.value)}
                                            />
                                            <label htmlFor={e.id} className=' w-10 h-10 flex items-center justify-center rounded-sm text-lg  font-poppins    ' >{e.label}</label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div className=" my-3 md:my-5 flex flex-col   gap-3 ">
                            {/* <div className="  p-2 w-36 md:w-40 h-12 md:h-14 text-lg  text-btn-0 font-poppins border border-btn-0 rounded-lg relativ flex items-center justify-between"> */}
                            <div className="  p-2 w-full h-12  text-lg  text-btn-0 font-poppins border border-btn-0 rounded-md relativ flex items-center justify-between">
                                <button className=' p-2 text-2xl ' disabled={quant <= 1 ? true : false}  onClick={()=>setQuant(quant - 1)} >-</button>
                                    <span >{quant}</span>
                                <button className=' p-2 text-2xl ' disabled={quant >= 10 ? true : false}  onClick={()=>setQuant(quant + 1)} >+</button>
                            </div>

                            <div className=" flex-1 md:flex-none flex items-center justify-center gap-4 md:gap-6 lg:gap-4 ">
                                <button className=' flex-1  w-40 py-2.5  rounded-sm text-xl font-light text-btn-3 font-poppins bg-white hover:bg-btn-2 border border-btn-3 flex items-center justify-center gap-2' > <IoMdCart/> <span>Add to Cart</span></button>
                                <button className=' flex-1 w-36 py-2.5  rounded-sm text-xl text-white font-poppins font-light bg-btn-3 hover:text-btn-2 flex items-center justify-center gap-2' > <PiShoppingBagFill/> <span>Buy Now</span></button>
                            </div>
                        </div>

                    </div>

                    <div className="my-3 px-3 w-full ">
                        <div className=" w-full flex items-center text-second-color text-md gap-4"><p className=' ' >SKU :</p> <p className=' flex-1 ' >HBJ525B </p></div>
                        <div className=" w-full flex items-center text-second-color text-md gap-4"><p className=' ' >Category :</p> <p className=' flex-1 ' >Wheals & Tyres</p></div>
                        <div className=" w-full flex items-center text-second-color text-md gap-4"><p className=' ' >Tag's :</p> <p className=' flex-1 ' >AL-13, Wheals, Tyres</p></div>
                    
                    </div>
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
