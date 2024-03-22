import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    {
      linkName : "Home",
      link : "/"
    },
    {
      linkName : "Blog",
      link : "/blog"
    },
    {
      linkName : "About",
      link : "/about"
    },
    {
      linkName : "Contact",
      link : "/contact"
    }
  ]
  return (
    <React.Fragment>
      <div className="Header py-8 px-2 bg-[#f8fafc]">
        <div className="container flex justify-between items-center m-auto">
          <div>
            <div className="logo ">
              <h1 className="text-3xl font-bold text-blue">TechMarket</h1>
            </div>
          </div>
          <div className="pages-links">
            <ul className="flex ">
              {navLinks.map((link) => (
                <li key={link.linkName} className=" text-2xl font-md text-dark-gray mx-4">
                  <Link to={link.link}>{link.linkName}</Link>          
                </li>
              ))}
              <li className="text-2xl font-md text-dark-gray ml-4 flex items-center">Categories <FaChevronDown className="ml-1"/> </li>
            </ul>
          </div>
          <div className="flex">
            <div className="wishList flex items-center mr-10 cursor-pointer">
              <CiHeart className="text-4xl"/>
              <p className="text-xl ml-1 text-gray-700">wishList</p>
            </div>
            <div className="cart  flex items-center cursor-pointer">
               <IoBagOutline className="text-3xl"/>
                <p className="text-xl ml-1 text-gray-700">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
