import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, NavLink } from "react-bootstrap";

export function Home({src}) {
    return (
        <>
            <div style={{backgroundImage: `url(${src})`}} className="min-vh-100 d-flex justify-content-center align-items-center">

                <NavLink as={Link} to="/store">
                    <Button className="btn-dark py-3 px-5 rounded-0 fs-2" style={{  }}> Shop Now</Button>

                </NavLink>

            </div>
        </>
    );
}