import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartButton } from "./CartButton";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { CartContext } from "../contexts/CartContext";

export function Header() {

    const c = useContext(CartContext);

    const cost = c.cartInfo.reduce((sum, current) => {
        return sum + (current.price * current.quantity);
    }, 0).toFixed(2);

    const count = c.cartInfo.reduce((count, current) => {
        return count + current.quantity;
    }, 0).toFixed(0);

    return (
        <>
            <Navbar expand="lg" className="text-white" variant="dark" bg="dark" fixed="top">
            <Container className="custom-nav">
                <Navbar.Brand as={Link} to="/home" className="text-white">NeatStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={Link} to="/store" className="text-white">Store</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as={Link} to="/cart">
                    <CartButton itemsCount={count} itemsCost={cost}/>

                </Nav.Link>
            </Container>
            </Navbar>
        </>
    );
}