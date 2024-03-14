import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
const NavBar = () => {
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
      <div className="nav-bar shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="categories">
            <div className="menu-title bg-blue text-white font-semibold text-xl flex items-center h-full w-240 py-4 px-4 cursor-pointer">
              <HiOutlineBars3 className="mr-3" />
              <div>Categories</div>
            </div>
          </div>
          <div className="pages-links">
            <ul className="flex ">
              {navLinks.map((link) => (
                <li key={link.linkName} className="py-4 text-2xl font-md text-light-gray ml-4">
                  <Link to={link.link}>{link.linkName}</Link>          
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
