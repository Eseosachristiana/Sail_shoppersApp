import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import Item from "../Components/Item/Item.jsx";
import { ShopContext } from "../Context/ShopContext";
import all_products from "../Components/Assests/all_products.js"; 

const ShopCategory = (props) =>{
    const {all_product} = useContext(ShopContext);
    console.log(all_product);
    
    
    return(
        <div className="Shop-category">
            <img className="shopcategory-banner" src={props.banner}  alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    <i className="ri-expand-up-down-line"></i>
                </div>
            </div>
            <div className="shopcategory-products">
                {all_products.map((item, i) => {
                    console.log(item);
                    console.log(props.category === item.category);
                 if (props.category != item.category) {
                    
                    
                return (
                <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price} 

                />
                 );
                } else {
                return null;
                }
                })}
                </div>
                <div className="shopcategory-explore">
                    Explore More
                </div>
        </div>
    );
}

export default ShopCategory;