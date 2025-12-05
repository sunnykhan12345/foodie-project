import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, setMenuOpened }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/menu", title: "Menu" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <div className={containerStyles}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          onClick={() => setMenuOpened(false)} // close sidebar
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} 
             px-3 py-2 rounded-full uppercase text-sm font-bold`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
