import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { CartDescription } from "../components/CartDescription";
import { CartUtil } from "../utilities/CartUtilities";


export function Cart() {
    const c = useContext(CartContext);

    return (
        <>
            <Container className="mh-100" style={{padding: "6rem 0 "}}>
                <CartDescription class_name="mt-4 text-center w-50 d-flex flex-column m-auto px-3">
                        {c.cartInfo.map(i => {
                            return <Col>
                                        <CartDescription.Item 
                                            title = {i.title}
                                            image = {i.image}
                                            price = {i.price}
                                            quantity = {i.quantity}
                                            minusItemAction = {CartUtil.modifyQuantity.bind(this, c.cartInfo, "minus", i.title, c.setCartInfo)}
                                            addItemAction = {CartUtil.modifyQuantity.bind(this, c.cartInfo, "add", i.title, c.setCartInfo)}/>

                                    </Col>

                        })}

                        <Button className="bg-body text-black border-black mt-auto my-2" onClick={() => {alert("Thanks for purchasing!"); c.setCartInfo([])}}> Check Out </Button>

                </CartDescription>
            </Container>

        </>
    );
}