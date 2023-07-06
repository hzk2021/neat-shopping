import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartItem } from "./CartItem";

const calculateItemPrice = (price, quantity) => {
    return price * quantity;
}

function CartDescription({class_name, children}){

    return (
        <>
            <div className={class_name} style={{minWidth: "500px", minWidth: "500px", minHeight: "300px", backgroundColor: "white"}}>
                <p style={{background: "black", width: "max-content"}} className="mt-3 mx-auto text-white text-uppercase p-2">Your shopping cart</p>

                {children}
            </div>
        </>
    );
}

CartDescription.Item = ({title, image, price, quantity, minusItemAction, addItemAction}) => {
    return <CartItem 
            title = {title}
            image = {image}
            aggre_price = {calculateItemPrice(price, quantity).toFixed(2)}
            quantity = {quantity}
            class_name = ""
            minusAction={minusItemAction}
            addAction={addItemAction}/>
}

export {CartDescription};