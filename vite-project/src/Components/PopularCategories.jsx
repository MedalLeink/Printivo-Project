import React from 'react'
import PopularCategory_1 from "./../assets/popular_categories_1.png";
import PopularCategory_2 from "./../assets/popular_categories_2.png";

function PopularCategories() {
  return (
     <>
          {/* Subsection Title */}
          <div className="px-20 pt-16">
            <span className="w-full flex items-center justify-between">
              <h2 className="font-[Ubuntu] text-3xl text-cyan-900 opacity-90 font-semibold">
                Popular Categories
              </h2>
              <a href="#">
                <h3 className="text-red-700 font-semibold">See All Categories</h3>
              </a>
            </span>
    
            {/* Product Listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
                {/* Cards */}
              <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <a href="#">
                <img src={PopularCategory_1} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
                <div className="m-4">
                <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Greeting Cards</h2>
                <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
                <span className="flex mb-5 items-end-safe gap-1">
                <h2 className="text-xl text-cyan-900 font-semibold">₦29,800</h2>
                <p className="font-medium tracking-wider text-sm text-gray-400">per 50</p>
                </span>
                <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
                <a href="#" className="text-white text-sm">Browse Greeting Car...</a>
                <i className="bx bx-right-arrow-alt text-white text-xl"></i>
                </span>
                </div>
                </a>
              </div>
              <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <a href="#">
                <img src={PopularCategory_2} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
                <div className="m-4">
                <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Stickers</h2>
                <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
                <span className="flex mb-5 items-end-safe gap-1">
                <h2 className="text-xl text-cyan-900 font-semibold">₦5,400</h2>
                <p className="font-medium tracking-wider text-sm text-gray-400">per 75</p>
                </span>
                <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
                <a href="#" className="text-white text-sm">Browse Stickers</a>
                <i className="bx bx-right-arrow-alt text-white text-xl"></i>
                </span>
                </div>
                </a>
              </div>
              </div>
            </div>
        </>
  )
}

export default PopularCategories