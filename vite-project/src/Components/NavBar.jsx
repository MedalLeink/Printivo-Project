import React from "react"

function NavBar() {
  return (
    <div className="bg-#fff px-24 py-8 flex space-x-10">
    <a href=""><h3 className="w-30 text-sm text-cyan-900 hover:-skew-3">
      Cost Calculator
    </h3></a>
    <a href=""><h3 className="w-30 text-sm text-cyan-900">
      Discover Stores
    </h3></a>
    <a href=""><h3 className="w-30 text-sm font-large text-cyan-900">
      Track Orders
    </h3></a>
    <div className="bg-#fff px-24 flex space-x-20">
    <a href=""><h3 className="text-sm font-sm text-cyan-900 hover:-skew-3">
      Need Help? Call:
      <span className="flex">
      <h3 className="text-blue-500 space-x-20">+2349064643677</h3> or
      <h3 className="text-black">or</h3>
      <h3 className="text-blue-500">+2349064643677</h3> or
      </span>
    </h3></a>
    <a href=""><h3 className="text-md font-large text-cyan-900">
      Discover Stores
    </h3></a>
    <a href=""><h3 className="text-md font-large text-cyan-900">
      Track Orders
    </h3></a>
    </div>
    </div>
  )
}

export default NavBar
