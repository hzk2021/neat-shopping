import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartUtil () {
}

CartUtil.removeItem = (items, title) => {
    let cartItems = items;
    cartItems = cartItems.filter(i => i.title !== title);
    return cartItems;
}

CartUtil.modifyQuantity = (items, action, item_title, set_info_cb, replace_quantity) => {
    let cartItems = items;
    const searchItem = cartItems.find(i => {
        return i.title === item_title;
    });

    if(searchItem.quantity > 0 && searchItem.quantity <= 99) {
        switch(action){
            case "add":
                searchItem.quantity += 1;
                break;
            case "minus":
                searchItem.quantity -= 1;
                break;
            case "replace":
                console.log('hi')
                searchItem.quantity = replace_quantity;
                break;
            default:
                break;
        }
        cartItems = searchItem.quantity <= 0 ? CartUtil.removeItem(cartItems, searchItem.title) : cartItems;

    } else
        cartItems = CartUtil.removeItem(cartItems, searchItem.title);

    set_info_cb([...cartItems])
}

export {CartUtil};
