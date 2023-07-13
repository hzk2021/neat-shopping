import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export function LoadingSpinner({className}) {

    return (
        <>
            <Spinner animation="border" role="loading" variant="light" className={`${className}`}>
                <span className="visually-hidden">Loading...</span>

            </Spinner>
        </>
    );
}