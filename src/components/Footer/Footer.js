import React from 'react'
import { useHistory } from 'react-router'
import { goToCartHomePage, goToHomePage, goToProfilePage } from '../../routes/coordinator'
import { Avatar, AvatarActive, BoxComponent, ContainerFooter, ContainerIcons, HomePage, HomePageActive, ShoppingCart, ShoppingCartActive } from './styled'

const Footer = (props) => {
const history = useHistory()

    return (
        <ContainerFooter>
            <ContainerIcons >
                <BoxComponent onClick={() => goToHomePage(history)} >
                    {props.activeHome === 'true' ? <HomePageActive /> : <HomePage />}
                    
                </BoxComponent>

                <BoxComponent onClick={() =>goToCartHomePage(history)}>
                    {props.activeCart === 'true' ? <ShoppingCartActive /> : <ShoppingCart />}
                </BoxComponent>
                <BoxComponent onClick={() => goToProfilePage(history)}>
                    {props.activeAvatar === 'true' ? <AvatarActive /> : <Avatar />}
                </BoxComponent>
            </ContainerIcons>
        </ContainerFooter>
    )
}

export default Footer
