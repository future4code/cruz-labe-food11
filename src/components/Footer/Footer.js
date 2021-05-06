import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, AvatarActive, BoxComponent, ContainerFooter, ContainerIcons, HomePage, HomePageActive, ShoppingCart, ShoppingCartActive } from './styled'

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
