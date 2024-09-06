import React from "react";
import './Breadcrumb.css'
import dropdown_icon from '../Assests/Images/dropdown_icon.png'


const Breadcrumb = () => {
    const {product} = props;
    return(
        <div className="breadcrumbs"> 
            Home <img src={dropdown_icon} alt="" /> SHOP <img src={dropdown_icon} alt="" /> {product.category} <img src={dropdown_icon} alt="" /> {product.name}
        </div>
    );
}

export default Breadcrumb;