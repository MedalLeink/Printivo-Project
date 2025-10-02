import React from "react";
import First_Product from "./../assets/product_1.png";
import Second_Product from "./../assets/product_2.png";
import Third_Product from "./../assets/product_3.png";
import Fourth_Product from "./../assets/product_4.png";
import Fifth_Product from "./../assets/product_5.png";
import Sixth_Product from "./../assets/product_6.png";
import Seventh_Product from "./../assets/product_7.png";
import Eighth_Product from "./../assets/product_8.png";
import Nineth_Product from "./../assets/product_9.png";
import Tenth_Product from "./../assets/product_10.png";
import Eleventh_Product from "./../assets/product_11.png";
import Twelfth_Product from "./../assets/product_12.png";

function PopularProducts() {
  return (
    <>
      {/* Subsection Title */}
      <div className="px-20 pt-16">
        <span className="w-full flex items-center justify-between">
          <h2 className="font-[Ubuntu] text-3xl text-cyan-900 opacity-90 font-semibold">
            Popular Products
          </h2>
          <a href="#">
            <h3 className="text-red-700 font-semibold">See All Products</h3>
          </a>
        </span>

        {/* Product Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Cards */}
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={First_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Second_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Third_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Fourth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Fifth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Sixth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Seventh_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Eighth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Nineth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Tenth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Eleventh_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
          <div className=" mt-6 border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={Twelfth_Product} alt="" className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="m-4">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide mb-4">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">STARTING AT</h2>
            <span className="flex mb-5 items-end-safe gap-1">
            <h2 className="text-xl text-cyan-900 font-semibold">₦15,100</h2>
            <p className="font-medium tracking-wider text-sm text-gray-400">per 100</p>
            </span>
            <span className="w-60 flex p-3 bg-red-400 rounded-sm items-center gap-2">
            <a href="#" className="text-white text-sm">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt text-white text-xl"></i>
            </span>
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProducts;
