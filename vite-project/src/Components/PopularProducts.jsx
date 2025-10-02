import React from "react";
import First_Product from "./../assets/product_1.png";

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
          <div className="border border-gray-100 shadow-md shadow-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <a href="#">
            <img src={First_Product} alt="" className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="p-6">
            <h2 className="text-cyan-900 font-medium text-md tracking-wide">Two-sided Business Cards</h2>
            <h2 className="text-sm text-gray-500 font-semibold">STARTING AT</h2>
            <span className="flex">
            <h2>₦15,100</h2>
            <p>per 100</p>
            </span>
            <span className="p-4 bg-red-400 mt-10">
            <a href="#" className="w-10">Browse Two-sided Bu...</a>
            <i className="bx bx-right-arrow-alt"></i>
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
