import React from 'react';

export default function FoodCard(props) {
    return (
        <CardFContainer>
            <img src={props.image} alt={props.name} />
            <ProductSection>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <Price>
                    <b>R$ {props.price}</b>
                    <button onCliclick={props.addToCart}>Add to Cart</button>
                </Price>
            </ProductSection>
        </CardFContainer>
    )
}