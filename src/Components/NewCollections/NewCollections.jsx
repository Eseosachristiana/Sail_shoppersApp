import React from "react";
import './NewCollections.css'
import new_collection from "../new_collection";
import Item from "../Item/Item";


const NewCollections = () => {
    return(
        <div className="new-collections">
           <h1>New Collections</h1> 
           <hr />
           <div className="collections">
                {new_collection.map(Item,i=>{
                    return <Item key={i} id={Item.id} name={Item.name} image={Item.image} new_price={Item.new_price} old_price={Itemtem.old_price}/>
                })}
           </div>
        </div>
    );
}

export default NewCollections;