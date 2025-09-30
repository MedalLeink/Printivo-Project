import React from "react";
import { CircleFlag } from "react-circle-flags";

function NavBar() {
  return (
    <div className="w-full bg-white px-20 py-4 flex space-x-16 items-center font-medium">
      <a href="#">
        <h3 className="text-sm text-cyan-900 hover:-skew-3">Cost Calculator</h3>
      </a>
      <a href="#">
        <h3 className="text-sm text-cyan-900 hover:-skew-3">Discover Stores</h3>
      </a>
      <a href="#">
        <h3 className="text-sm text-cyan-900 hover:-skew-3">Track Orders</h3>
      </a>


      <div className="flex items-center space-x-16 ml-auto">
        <a href="#">
          <h3 className="text-sm text-cyan-900 hover:-skew-3">
            Need Help? Call:
            <span className="flex items-center gap-3">
              <span className="text-blue-400 font-medium">+2349064643677</span>
              <span className="text-black">or</span>
              <span className="text-blue-400 font-medium">+2348172723665</span>
            </span>
          </h3>
        </a>

        <a href="#">
          <i
            className="bx bxl-whatsapp text-4xl"
            style={{ color: "#25D366" }}
          ></i>
        </a>

        <div className="flex justify-center">
          <span className="flex items-center gap-2 border border-gray-300 rounded-3xl px-4 py-2.5">
            <CircleFlag countryCode="ng" className="w-5 h-5" />
            <h3 className="text-sm font-medium text-cyan-900">Nigeria</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
