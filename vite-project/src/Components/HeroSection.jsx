import React from "react";
// import Printivo_Logo from "./../assets/printivo_logo.png"
import Printivo_Logo from "./../assets/printivo_logo.png";
import Hero_Img from "./../assets/hero_img.png";

function HeroSection() {
  return (
    <>
      <div className="bg-yellow-50 pb-0 pt-4">
        <div className="w-full px-20 py-6 flex space-x-16 items-center font-medium">
          <img
            src={Printivo_Logo}
            alt="Printivo Logo"
            className="w-36 h-auto mr-102"
          />

          <div className="flex gap-6">
            <a href="#">
              <h3 className="text-sm text-cyan-900 hover:-skew-3">
                All Products
              </h3>
            </a>
            <a href="#">
              <h3 className="text-sm text-cyan-900 hover:-skew-3">
                Become a Reseller
              </h3>
            </a>
            <a href="#">
              <h3 className="text-sm text-cyan-900 hover:-skew-3">
                Merch Store
              </h3>
            </a>
            <a href="#">
              <h3 className="text-sm text-cyan-900 hover:-skew-3">
                Marketplace
              </h3>
            </a>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <a href="#">
              <h3 className="text-sm text-red-700 hover:-skew-3">Sign in</h3>
            </a>
            <a href="#">
              <h3 className="text-sm text-cyan-900 hover:-skew-3">
                Create Account
              </h3>
            </a>
            <a href="#">
              <i className="bx bx-cart text-3xl text-cyan-900"></i>
            </a>
          </div>
        </div>
            <div className="flex pl-20 ">
                <div className="w-full pt-24">
                <h1 className="w-full font-[Ubuntu] text-7xl font-semibold text-cyan-900 mb-4">Quality Prints</h1>
                <p className="text-2xl font-medium text-cyan-900 opacity-70">Shipped to your doorstep</p>
                <p className="text-2xl font-medium text-cyan-900 opacity-70">What woul you like to. print today</p>
                </div>

                <div className="ml-100 mt-20">
                <img src={Hero_Img} alt="Hero_Image" className="w-350"  />
                </div>
            </div>
      </div>
    </>
  );
}

export default HeroSection;
