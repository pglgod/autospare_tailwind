import React from 'react'
import { topPicks } from '../lib/topPick'

export default function Home() {
  return (
    <div className=''>


      <section className=' px-6 sm:px-10 py-4 sm:py-8 md:py-12 lg:py-16 w-screen h-auto bg-main-color   flex flex-row items-center justify-around relative' >
        <div  className=" flex flex-col items-center font-poppins gap-1 sm:gap-2 lg:gap-4">
            <h1 className=' text-xl sm:text-4xl lg:text-6xl  flex flex-row gap-1 text-black font-semibold ' > <span className='text-white' >Auto</span> Spare Parts</h1>
            <p className=' text-sm sm:text-lg lg:text-2xl text-black  font-semibold ' >All Major Brands Available</p>
            <button className=' px-3 sm:px-6 lg:px-7 py-1 sm:py-2 lg:py-3 text-sm sm:text-lg lg:text-xl text-white bg-second-color ' >Shop Now</button>
        </div>
        <div className=" w-24 h-24 sm:w-60 sm:h-60 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] ">
            <img className='w-full h-full' src={require('../img/po-1.png')} alt="" />
        </div>
      </section>

      <section className=' px-6 py-10 md:py-14 lg:py-20 w-screen bg-third-color flex item-center justify-around' >
        <div className="flex flex-col items-start gap-0 md:gap-2 lg:gap-4">
          <img className=' w-auto h-20 sm:h-56 md:h-64 lg:h-80 xl:h-96' src={require('../img/po-2.png')} alt="" />
          <p className=' text-lg sm:text-2xl lg:text-3xl font-semibold font-poppins text-black '>Lubricant</p>
          <button className='text-sm sm:text-xl lg:text-2xl border-b border-black text-black pb-0.5 sm:py-1 cursor-pointer' >View More</button>
        </div>
        <div className="flex flex-col items-start gap-0 md:gap-2 lg:gap-4">
          <img className=' w-auto h-20 sm:h-56 md:h-64 lg:h-80 xl:h-96' src={require('../img/po-3.png')} alt="" />
          <p className=' text-lg sm:text-2xl lg:text-3xl font-semibold font-poppins text-black '>Spare Parts</p>
          <button className=' text-sm sm:text-xl lg:text-2xl border-b border-black text-black pb-0.5 sm:py-1 cursor-pointer' >View More</button>

        </div>
      </section>

      <section className=' w-screen py-6 md:py-10  bg-white flex flex-col items-center justify-center  ' >
          <h1 className=' text-2xl md:text-4xl text-center font-poppins text-black font-semibold' >Top Pick's For You</h1>
          <p className=' mx-3 my-2 md:my-4 text-center text-sm md:text-[16px]  font-poppins text-second-color' >Find a bright ideal to suit your taste with our great selection of products.</p>

          <div className=" w-full flex md:justify-center overflow-x-scroll   ">
            <div className="  px-6 my-5 md:my-10 flex felx-row items-center justify-center  gap-8 lg:gap-10 ">

              {
                topPicks.map((e)=>{
                  return <div className=" w-40 lg:w-60 h-auto cursor-pointer" key={e.key} >
                    <img className=' w-full aspect-square mb-1' src={e.img} alt="" />
                    <p className='mx-4 text-[15px] lg:text-lg text-black  ' >{e.name}</p>
                    <p className='mx-4 text-sm  text-second-color' >{e.shop}</p>
                    <h1 className='mx-4 text-lg lg:text-xl font-semibold text-black' > RS: {e.price}</h1>
                  </div>
                })
              }

            </div>
          </div>

          <button className=' py-1  text-xl border-black border-b' >View More</button>
      </section>

      <section className='  w-screen py-5 md:py-10 bg-second-color flex flex-col md:flex-row item-center justify-between relative overflow-hidden'>
              
            <p className=' md:hidden text-[15px] font-semibold font-poppins text-black bg-white px-10 absolute top-[2.5rem] left-[-2.5rem] -rotate-45'>New Arrival</p>

            <div className=" w-full md:w-[500px] lg:w-[700px] xl:w-[900px] h-auto">
              <img className=' w-full h-auto' src={require('../img/shell_oil.png')} alt="" />
            </div>
            <div className=" flex-1 flex flex-col items-center justify-center gap-1 md:gap-4  ">
              <p className=' hidden md:block text-lg md:text-2xl font-semibold font-poppins text-black  '>New Arrival</p>
              <p className='text-3xl md:text-5xl font-semibold font-poppins text-black' >Shell Engin Oil</p>
              <button className=' px-4 md:px-8 py-1.5 md:py-3 bg-main-color text-[16px] md:text-lg lg:text-xl text-black font-poppins  ' >Shop Now</button>
            </div>
      </section>

      <section className='relative w-screen h-auto' >
            <img src={require('../img/dodge.jpg')} alt="" />
            <div className=" w-full h-full absolute  top-0 left-0  bg-[#ffffff70] backdrop-blur-md flex flex-col items-center justify-center gap-0.5 md:gap-2 lg:gap-3">
              <h1 className=' text-4xl md:text-5xl lg:text-6xl text-black font-poppins font-semibold' >Our Instagram</h1>
              <p className=' text-sm md:text-lg lg:text-xl text-black font-poppins ' >Follow our store on Instagram</p>
              <button className=' py-2 md:py-3 lg:py-4 px-8 md:px-12 lg:px-16 text-lg md:text-xl lg:text-2xl  bg-white font-poppins  rounded-full hover:shadow-md' >Follow Us</button>
            </div>
      </section>


    </div>
  )
}
