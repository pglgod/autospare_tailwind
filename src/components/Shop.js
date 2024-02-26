import React from 'react'
import FilterBar from './FilterBar'
import ProductCard from './product/ProductCard'

export default function Shop() {
  return (
    <div className="   bg-third-color  ">

      {/* Sorting & Filter Bar */}
      <FilterBar/>
      {/* Products List */}
      <div >
        <div className="  h-full mx-auto md:px-6 py-6 overflow-y-scroll gap-6 grid place-items-center place-content-center grid-cols-[auto] sm:grid-cols-[auto_auto] md:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto_auto]  ">
          <ProductCard  />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        
      </div>

      <div className=" py-5 flex items-center justify-center gap-5">
        <button className=' w-12 h-12 rounded-sm text-xl bg-btn-1 hover:bg-btn-1 font-poppins' >1</button>
        <button className=' w-12 h-12 rounded-sm text-xl bg-btn-2 hover:bg-btn-1 font-poppins' >2</button>
        <button className=' w-12 h-12 rounded-sm text-xl bg-btn-2 hover:bg-btn-1 font-poppins' >3</button>
        <button className=' w-12 h-12 rounded-sm text-xl bg-btn-2 hover:bg-btn-1 font-poppins' >4</button>
        <button className=' px-5 h-12 rounded-sm text-xl bg-btn-2 hover:bg-btn-1 font-poppins' >Next</button>
      </div>



    </div>
  )
}
