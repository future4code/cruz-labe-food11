import React from 'react';



export default function Cart(props) {
    return (
        <ContainerPrincipal>
            <ProductImage src={props.photoUrl} alt={'photo food'} />

            <DetailFoodContainer>
                <NameItem> {props.name}</NameItem>
                <Units quantity={props.quantity}>{props.quantity}</Units>

                <FoodIngredients>{props.description}</FoodIngredients>
            </DetailFoodContainer>

            <PriceButtomContainer>
                <FoodPrice>
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }).format(props.price)}
                </FoodPrice>

                <ButtonsContainer>
                    <Button onCliclk={() => props.subtractItem(props.id)} adding={false}>
                        -1
                </Button>
                    <Button onClick={() => props.addItem(props.id)}>

                    </Button>
                </ButtonsContainer>
            </PriceButtomContainer>
        </ContainerPrincipal>
    )
}