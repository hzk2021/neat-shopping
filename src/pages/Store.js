import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { ItemCard } from "../components/ItemCard";
import { CartContext } from "../contexts/CartContext";
import { Container, Row } from "react-bootstrap";
import { LoadingSpinner } from "../components/LoadingSpinner";

export function Store() {
    const [items, setItems] = useState([]);
    const c = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    async function retrieveItems() {
        let itemsArray = [];
    
        for (let i = 1; i <= 20; i++) {
            try {
                const productsFetch = await fetch(`https://fakestoreapi.com/products/${i}`);
                const productsJSON = await productsFetch.json();
    
                if (productsJSON.category === `men's clothing` || productsJSON.category === `women's clothing`)
                    itemsArray.push({
                        title: productsJSON.title,
                        description: productsJSON.description,
                        price: productsJSON.price,
                        image: productsJSON.image
                    });

            } catch(e) {
                console.error(e.toString());
            }
        }    
        return itemsArray;
    }

    function addItemToCart(image, description, price, title, quantity) {
        const myCartList = c.cartInfo;
        const itemFound = myCartList.find(item => item.title === title);

        if (itemFound){
            itemFound.quantity += quantity;
            c.setCartInfo([...myCartList]);
        } else {
            c.setCartInfo([...myCartList, {
                image, description, price, title, quantity
            }]);
        }
    }

    useEffect(() => {
        retrieveItems().then(result => {
             setItems(result);
             setLoading(false);
        })
    }, []);
    
    return (
        <>
            <Container className="min-vh-100 d-flex align-items-center justify-content-center" style={{padding: "6rem 0 "} }>
                <Row className="gap-5 d-flex justify-content-center">

                    {
                        loading ? <LoadingSpinner className={"align-self-center"}/>
                        :
                        items.map(item => {
                            return <ItemCard
                                image ={item.image}
                                description ={item.description}
                                price ={item.price}
                                title ={item.title}
                                action ={addItemToCart.bind(this,  item.image,
                                                                item.description,
                                                                item.price,
                                                                item.title,
                                                                1)}
                            />
                        })
                    }
                </Row>
            </Container>

        </>
    );
}