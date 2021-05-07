
import styled from 'styled-components'
import { Container } from '../Container/Container'
import homePage from '../../assets/homepage.svg'
import homePageActive from '../../assets/homepage-active.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import shoppingCartActive from '../../assets/shopping-cart-active.svg'
import avatar from '../../assets/avatar.svg'
import avatarActive from '../../assets/avatar-active.svg'




export const ContainerFooter = styled(Container)`
width:22.5rem;
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`

export const ContainerIcons = styled.div`
display:flex;
position:fixed;
bottom:0;
box-shadow: 0 -1.5px 0 0 rgba(0, 0, 0, 0.25);
background-color:white;
`

export const BoxComponent = styled.div`
width: 7.5rem;
height: 3.062rem;
padding: 0.625rem 2.875rem 0.563rem 2.938rem;
display:flex;
`

export const HomePage = styled.div`
background-image:url(${homePage});
height:1.688rem;
width:1.688rem;
`

export const HomePageActive = styled.button`
background-image:url(${homePageActive});
height:1.688rem;
width:1.688rem;
`

export const ShoppingCart = styled.button`
background-image:url(${shoppingCart});
height: 1.812rem;
width:1.688rem;
`

export const ShoppingCartActive = styled.button`
background-image:url(${shoppingCartActive});
height: 1.812rem;
width:1.688rem;
`

export const Avatar = styled.button`
background-image:url(${avatar});
height: 1.875rem;
width:1.688rem;
`

export const AvatarActive = styled.button`
background-image:url(${avatarActive});
height: 1.875rem;
width:1.688rem;
`