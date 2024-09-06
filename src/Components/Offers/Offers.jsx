import React from "react";
import './Offers.css'
import p6_img from '../Assests/Images/p6_img.png'

const Offers = () =>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={p6_img} alt="" />
            </div>
        </div>
    );
}

export default Offers;