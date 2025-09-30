import React from "react";
import { CircleFlag } from "react-circle-flags";

function NavBar() {
  return (
    <div className="bg-white px-22 py-8 flex space-x-5 items-center font-medium">
      <a href="#">
        <h3 className="w-30 text-sm text-cyan-900 hover:-skew-3">
          Cost Calculator
        </h3>
      </a>
      <a href="#">
        <h3 className="w-30 text-sm text-cyan-900 hover:-skew-3">
          Discover Stores
        </h3>
      </a>
      <a href="#">
        <h3 className="w-80 text-sm text-cyan-900 hover:-skew-3 space-x-72">
          Track Orders
        </h3>
      </a>
      <div className="bg-#fff px-24 flex space-x-20">
        <a href="#">
          <h3 className="text-sm text-cyan-900 hover:-skew-3">
            Need Help? Call:
            <span className="flex">
              <h3 className="text-blue-400 space-x-20 font-medium">
                +2349064643677
              </h3>
              <h3 className="text-black px-1.5">or</h3>
              <h3 className="text-blue-400 font-medium">+2348172723665</h3>
            </span>
          </h3>
        </a>
        <a href="#" className="space-x-24">
          <i
            className="bx bxl-whatsapp text-3xl border-white"
            style={{ color: "#25D366" }}
          ></i>
        </a>
        <div className="flex justify-center">
          <span className="w-28 flex items-center gap-2 border border-gray-300 rounded-3xl px-3 py-1">
            <CircleFlag countryCode="ng" className="w-5 h-5" />
            <h3 className="text-sm font-medium text-cyan-900">Nigeria</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
