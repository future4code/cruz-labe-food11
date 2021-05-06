
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
`

export const ContainerIcons = styled.div`
display:flex;
position:fixed;
bottom:0;
`

export const BoxComponent = styled.div`
width: 7.5rem;
height: 3.062rem;
border:1px solid red;
padding: 0.625rem 2.875rem 0.563rem 2.938rem;
display:flex;
`

export const HomePage = styled.div`
background-image:url(${homePage});
height:1.688rem;
width:1.688rem;
`

export const HomePageActive = styled.div`
background-image:url(${homePageActive});
height:1.688rem;
width:1.688rem;
`

export const ShoppingCart = styled.div`
background-image:url(${shoppingCart});
height:1.688rem;
width:1.688rem;
`

export const ShoppingCartActive = styled.div`
background-image:url(${shoppingCartActive});
height:1.688rem;
width:1.688rem;
`

export const Avatar = styled.div`
background-image:url(${avatar});
height:1.688rem;
width:1.688rem;
`

export const AvatarActive = styled.div`
background-image:url(${avatarActive});
height:1.688rem;
width:1.688rem;
`