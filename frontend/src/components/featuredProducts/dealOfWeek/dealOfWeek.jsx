import React, { useEffect, useState } from "react";
import productImage from "./product.jpg";
const DealOfWeek = () => {
    const [second , setSecond] = useState(0)
    const [minute , setMinute] = useState(0)
    const [hour , setHour] = useState(24)
    useEffect(() => {
        const intevalTimer = setInterval(() => {
            if(second > 0) {
                setSecond(second-1)
            }else if(minute > 0){
                setMinute(minute -1)
                setSecond(59)
            }
            else if (hour > 0) {
                setHour(hour - 1)
                setMinute(59)
                setSecond(59)
            }else{
                clearInterval(intevalTimer)
                console.log('timmer out');
            }
        },1000)
    },[second,minute,hour])
  return (
    <>
      <div className="deal-of-week rounded shadow-2xl w-400 p-7">
        <div className="title">
          <h3 className="mb-4 mt-2 font-semibold text-xl text-dark-gray">
            Deal of the week
          </h3>
        </div>
        <div className="container">
          <div className="deal-image my-3">
            <img src={productImage} alt="" className="w-300 m-auto" />
          </div>
          <div className="flex justify-between">
            <div className="deal-name">
              <h3 className="text-lg font-semibold text-dark-gray">
                HeadPhone
              </h3>
            </div>
            <div>
              <div className="deal-price font-bold text-2xl text-dark-gray line-through">
                320$
              </div>
              <div className="deal-price-discount text-red-600 font-bold text-3xl">
                200$
              </div>
            </div>
          </div>
          <div className="deal-timer flex justify-between items-center mt-4 ">
            <div className="timer-title">
              <h6 className="text-xl mb-2 font-semibold">Hurry Up</h6>
              <p className="text-dark-gray">Offer ends in:</p>
            </div>
            <div className="timer-counter flex border border-gray rounded w-180 text-center">
              <div className="hours p-2 text-dark-gray text-xl font-bold w-1/3">
                <span>{hour}</span>
              </div>
              <div className="minutes text-dark-gray text-xl font-bold p-2 border-l w-1/3 text-center">
                <span>{minute}</span>
              </div>
              <div className="seconds text-dark-gray text-xl font-bold p-2 border-l w-1/3 text-center">
                <span>{second}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealOfWeek;
