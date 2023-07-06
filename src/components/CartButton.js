import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function CartButton({itemsCount = 0, itemsCost = 0}) {
    return (
        <>
            <span>Cart ({itemsCount} - ${itemsCost})</span>
        </>
    );
}