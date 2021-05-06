import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo-future-eats-invert.svg'
const Logo = props => {


    return (
        <ContainerLogo>
            {/* Logo */}
        </ContainerLogo>
    )
}


export default Logo


const ContainerLogo = styled.div`
background-image:url(${logo});
height:3.625rem;
width:6.5rem;
`
