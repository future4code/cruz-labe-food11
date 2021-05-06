import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container'
import homePage from '../../assets/homepage.svg'
import homePageActive from '../../assets/homepage-active.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import shoppingCartActive from '../../assets/shopping-cart-active.svg'
import avatar from '../../assets/avatar.svg'
import avatarActive from '../../assets/avatar-active.svg'


const Footer = (props) => {
    return (
        <ContainerFooter>
            <ContainerIcons onClick={props.activeHome}>
                <BoxComponent >
                    {props.activeHome === 'true' ? <HomePageActive /> : <HomePage />}
                </BoxComponent>

                <BoxComponent>
                    {props.activeCart === 'true' ? <ShoppingCartActive /> : <ShoppingCart />}
                </BoxComponent>
                <BoxComponent>
                    {props.activeAvatar === 'true' ? <AvatarActive /> : <Avatar />}
                </BoxComponent>
            </ContainerIcons>
        </ContainerFooter>
    )
}


export default Footer

const ContainerFooter = styled(Container)`
position:fixed;
bottom:0;
`

const ContainerIcons = styled.div`
display:flex;
width:100%;
border:1px solid black;
`

const BoxComponent = styled.div`
width: 7.5rem;
height: 3.062rem;
border:1px solid red;
padding: 0.625rem 2.875rem 0.563rem 2.938rem;
display:flex;
`

const HomePage = styled.div`
background-image:url(${homePage});
height:1.688rem;
width:1.688rem;
`

const HomePageActive = styled.div`
background-image:url(${homePageActive});
height:1.688rem;
width:1.688rem;
`

const ShoppingCart = styled.div`
background-image:url(${shoppingCart});
height:1.688rem;
width:1.688rem;
`

const ShoppingCartActive = styled.div`
background-image:url(${shoppingCartActive});
height:1.688rem;
width:1.688rem;
`

const Avatar = styled.div`
background-image:url(${avatar});
height:1.688rem;
width:1.688rem;
`

const AvatarActive = styled.div`
background-image:url(${avatarActive});
height:1.688rem;
width:1.688rem;
`