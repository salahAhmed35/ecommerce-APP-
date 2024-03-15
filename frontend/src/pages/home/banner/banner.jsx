import React from "react";
import Button from "../../../components/Button/Button";
import bannerImage from "../../../assets/pannerImage.svg"
const Banner = () => {
  return (
    <div className="banner bg-[#f0f9ff] flex items-center h-50vh">
      <div className="container mx-auto flex justify-between items-center">
        <div className="banner-text w-1/2">    
          <h1 className="py-2 my-2 text-5xl font-semibold text-blue">online shoping</h1>
          <p className="py-2 my-4 leading-normal text-[#64748b] tracking-widest">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            repellendus excepturi sequi dolor harum architecto praesentium,
            aperiam distinctio voluptas dolorem nisi optio tempore totam, amet
            necessitatibus fuga, in eligendi obcaecati?
          </p>
          <Button text={"Shop Now"} />
        </div>
        <div>
            <img src= {bannerImage} alt="" className="w-80"/>
        </div>
      </div>
    </div>
  );
};
export default Banner;
