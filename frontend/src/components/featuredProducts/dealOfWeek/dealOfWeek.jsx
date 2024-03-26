import React, {useState} from 'react';
import productImage from "./product.jpg"
const DealOfWeek = () => {
    return (
        <>
          <div className="deal-of-week">
            <div className="title">
            <h3>Deal of the week</h3>
            </div>
            <div className="container">
                <div className="deal-image">
                    <img src={productImage} alt=""/>
                </div>
                <div className="deal-name">
                    <h3>HeadPhone</h3>
                </div>
                <div className="deal-price"></div>
                <div className="deal-price-discount"></div>
                <div className="deal-timer">
                    <div className="timer-title">
                        <h6>Hurry Up</h6>
                        <p>Offer ends in:</p>
                    </div>
                    <div className="timer-counter">
                        <div className="hours"></div>
                        <div className="minutes"></div>
                        <div className="seconds"></div>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default DealOfWeek;