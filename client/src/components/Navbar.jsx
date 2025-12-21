import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="w-full h-[80px] flex items-center md:justify-center justify-between gap-[30px] px-[20px] fixed top-0 z-[9999] bg-[#fff9f6] overflow-visible">
      <h1 className="text-3xl font-bold mb-2 text-[#ff4d2d]">Food </h1>
      <div className="md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center  flex">
        <div className="flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400 mr-2">
          <CiLocationOn size={25} className="text-[#ff4d2d] flex-shrink-0" />
          <div className="w-full truncate text-gray-600">food</div>
        </div>
        <CiSearch size={25} className="text-[#ff4d2d] flex-shrink-0" />
        <input
          type="text"
          placeholder="search delicious food..."
          className="px-2 text-gray-700 outline-0 w-full"
        />
      </div>
      <div className="relative">
        <CiShoppingCart
          size={25}
          className="text-[#ff4d2d] flex-shrink-0 relative"
        />
        <span className="absolute -top-2 -right-2">0</span>
      </div>
      <button className="hidden md:flex px-3 py-1 rounded-lg text-sm font-medium text-[#ff4d2d] bg-[#ff4d2d]/10 cursor-pointer">
        My Order
      </button>
      {/* {userData?.fullname.slice(0, 1)} */}
      <span className="text-red-600 font-bold text-xl">
        {userData?.fullname ?? ""}
      </span>
    </div>
  );
};

export default Navbar;
