import React from "react";
import '../style.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="saludo">
                <h2>{greeting}</h2>
            </div>
        </>
    )
}

export default ItemListContainer;