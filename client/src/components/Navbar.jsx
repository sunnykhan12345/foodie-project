// import React from "react";
// import { CiLocationOn } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
// import { useSelector } from "react-redux";
// const Navbar = () => {
//   const { userData } = useSelector((state) => state.user);
//   return (
//     <div className="w-full h-[80px] flex items-center md:justify-center justify-between gap-[30px] px-[20px] fixed top-0 z-[9999] bg-[#fff9f6] overflow-visible">
//       <h1 className="text-3xl font-bold mb-2 text-[#ff4d2d]">Food </h1>
//       <div className="md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center  flex">
//         <div className="flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400 mr-2">
//           <CiLocationOn size={25} className="text-[#ff4d2d] flex-shrink-0" />
//           <div className="w-full truncate text-gray-600">food</div>
//         </div>
//         <CiSearch size={25} className="text-[#ff4d2d] flex-shrink-0" />
//         <input
//           type="text"
//           placeholder="search delicious food..."
//           className="px-2 text-gray-700 outline-0 w-full"
//         />
//       </div>
//       <div className="relative">
//         <CiShoppingCart
//           size={25}
//           className="text-[#ff4d2d] flex-shrink-0 relative"
//         />
//         <span className="absolute -top-2 -right-2">0</span>
//       </div>
//       <button className="hidden md:flex px-3 py-1 rounded-lg text-sm font-medium text-[#ff4d2d] bg-[#ff4d2d]/10 cursor-pointer">
//         My Order
//       </button>
//       {/* {userData?.fullname.slice(0, 1)} */}
//       <span className="text-red-600 font-bold text-xl bg-red-500/10 h-9 w-9 flex items-center justify-center rounded-full">
//         {userData?.fullname ? userData.fullname.charAt(0).toUpperCase() : "z"}
//       </span>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { CiLocationOn, CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/userSlice";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="w-full h-[80px] flex items-center justify-between md:justify-center gap-[20px] px-[20px] fixed top-0 z-[9999] bg-[#fff9f6]">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-[#ff4d2d]">Food</h1>

      {/* Search - Desktop */}
      <div className="hidden md:flex md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center">
        <div className="flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400 mr-2">
          <CiLocationOn size={25} className="text-[#ff4d2d]" />
          <div className="w-full truncate text-gray-600">food</div>
        </div>
        <CiSearch size={25} className="text-[#ff4d2d]" />
        <input
          type="text"
          placeholder="search delicious food..."
          className="px-2 text-gray-700 outline-none w-full"
        />
      </div>

      {/* Mobile Search Icon */}
      <div className="flex md:hidden items-center gap-3">
        <CiSearch
          size={25}
          className="text-[#ff4d2d] cursor-pointer"
          onClick={() => setShowSearch((prev) => !prev)}
        />
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="absolute top-[80px] left-4 right-4 px-3 py-2 rounded-lg border border-gray-300 bg-white z-50"
          />
        )}
      </div>

      {/* Cart */}
      <div className="relative cursor-pointer">
        <CiShoppingCart
          size={25}
          className="text-[#ff4d2d]"
          onClick={() => alert("Cart clicked")}
        />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
          0
        </span>
      </div>

      {/* Avatar */}
      <div className="relative">
        <span
          className="text-red-600 font-bold text-xl bg-red-500/10 h-9 w-9 flex items-center justify-center rounded-full cursor-pointer"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          {userData?.fullname ? userData.fullname.charAt(0).toUpperCase() : "Z"}
        </span>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
            <div
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => alert("Cart clicked")}
            >
              <CiShoppingCart size={20} /> Cart
            </div>
            <div
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              // onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
