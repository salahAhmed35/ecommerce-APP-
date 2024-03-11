import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
const Header = () => {
  return (
    <React.Fragment>
      <div className="Header py-4 px-2">
        <div className="container flex justify-between m-auto">
          <div>
            <div className="logo ">
              <h1 className="text-3xl font-bold text-blue">TechMarket</h1>
            </div>
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

export default Header;
