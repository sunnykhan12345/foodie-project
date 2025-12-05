import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/data";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <header className="absolute top-0 right-0 left-0 py-3">
      <div className="max-padd-container flexBetween">
        {/* logo */}
        <div className="flex flex-1">
          <Link to="/" className="flex flex-end">
            <img src={assets.logoImg} alt="logo" className="h-12" />
            <div>
              <span className="hidden sm:block font-extrabold text-3xl relative top-1 left-1">
                Foodie
              </span>
              <span className="hidden sm:block font-extrabold text-xs relative left-1.5 tracking-[10px] uppercase">
                Fiesta
              </span>
            </div>
          </Link>
        </div>

        {/* desktop navbar */}
        <div className="hidden lg:flex flex-1">
          <Navbar />
        </div>

        {/* right buttons */}
        <div className="flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
          {/* mobile menu toggle */}
          <div className="relative lg:hidden w-7 h-6" onClick={toggleMenu}>
            <img
              src={assets.menu}
              alt="menu"
              className={`absolute inset-0 cursor-pointer transition-opacity duration-500 ${
                menuOpened ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={assets.menuClose}
              alt="close"
              className={`absolute inset-0 cursor-pointer transition-opacity duration-500 ${
                menuOpened ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* cart */}
          <div className="relative cursor-pointer">
            <img
              src={assets.cartAdded}
              alt="cart"
              className="min-w-11 bg-white rounded-full p-2"
            />
            <label className="absolute bottom-10 right-1 text-xs font-bold bg-solid text-white flexCenter rounded-full w-9">
              0
            </label>
          </div>

          {/* user */}
          <button className="btn-solid flexCenter gap-2">
            Login
            <img src={assets.user} alt="user" className="invert w-5" />
          </button>
        </div>
      </div>

      {/* mobile sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 
        transform transition-transform duration-500 
        ${menuOpened ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Navbar
          containerStyles="flex flex-col mt-20 gap-6 px-6"
          setMenuOpened={setMenuOpened}
        />
      </div>

      {/* dark overlay */}
      {menuOpened && (
        <div
          onClick={() => setMenuOpened(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </header>
  );
};

export default Header;
