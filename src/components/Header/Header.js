import styled from 'styled-components'
// import { Container } from '../Container/Container'
import backIcon from '../../assets/back.svg'
import React from 'react'

const Header = () => {

    return (
        <Container>

            <GoBackIcon>

            </GoBackIcon>
        </Container>
    )
}

export default Header


const Container = styled.div`
width: 22.5rem;
height: 4rem;
margin: 0 0 1.5rem;
padding: 0 0 0.625rem;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #ffffff;

`
const GoBackIcon = styled.div`
background-image:url(${backIcon});
width:1.5rem;
height:1.44rem;
margin:1.85rem 20.06rem 0.625rem 1rem;

`