import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { CartUtil } from "../utilities/CartUtilities";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function CartItem({image, title, quantity, aggre_price, class_name, addAction, minusAction, replaceAction}) {
    const c = useContext(CartContext);

    return (
        <>
            <Card className={`d-flex flex-row justify-content-between gap-5 align-items-center border-0 border-bottom rounded-0 ${class_name} pb-3 mb-1`}>
                <Card.Img variant='left' src={image} style={{ maxWidth: "100px"}}/>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between fs-6">
                        <p>{title}</p>
                        <p>${aggre_price}</p>
                    </Card.Title>

                    <InputGroup size="sm" className="d-flex gap-2">
                    <Button className="rounded-5 fs-5 pt-0 pb-1 bg-dark border-0" onClick={minusAction}>-</Button>
                        <Form.Control readOnly
                                    value={quantity} 
                                    type="number" 
                                    min="1" 
                                    max="50" 
                                    className="border-dark rounded-2" 
                                    onChange={(e) => {
                                        // if (isFinite(e.target.value)){
                                        //     CartUtil.modifyQuantity.bind(this, c.cartInfo, "replace", title, c.setCartInfo, e.target.value);
                                        // }
                                    }}>
                        </Form.Control>
                        <Button className="rounded-5 fs-5 pt-0 pb-1 bg-dark border-0" onClick={addAction}>+</Button>
                    </InputGroup>

                </Card.Body>
            </Card>
        </>
    );
}