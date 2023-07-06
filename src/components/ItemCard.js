import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ItemCard({image, title, description, price, action}) {

    return (
        <>
            <Card style={{ width: '18rem' }} className="p-0">
            <div style={{height: "200px"}} className="d-flex justify-content-center align-items-center border-bottom">
                <Card.Img variant="top" src={image} className="pb-1" style={{width:"150px", height: "150px", objectFit:"contain"}}/>

            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="flex-grow-1">{title}</Card.Title>
                <Card.Text>
                    {/* {description} */}
                </Card.Text>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Button variant="dark" onClick={action} className="mt-auto rounded-0">Add to cart</Button>
            </Card.Body>
            </Card>
        </>
    );
}