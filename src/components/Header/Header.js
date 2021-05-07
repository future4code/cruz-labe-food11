import styled from 'styled-components'
// import { Container } from '../Container/Container'
import backIcon from '../../assets/back.svg'
import React from 'react'
import { useHistory } from 'react-router'

const Header = (props) => {

    const history = useHistory()

    return (
        <Container style={props.needHeader !== 'true' ? { boxShadow: 'none' } : { boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.25)' }}>

            <GoBackIcon onClick={history.goBack} style={props.needHeader !== 'true' ? {display:'none'} : {display:'flex'}}>

            </GoBackIcon>
            <TitleHeader>{props.text}</TitleHeader>
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
display:flex;

`
const GoBackIcon = styled.div`
background-image:url(${backIcon});
width:1.5rem;
height:1.44rem;
margin:1.85rem 0 0.625rem 1rem;

`

const TitleHeader = styled.div`
  width: 10.938rem;
  height: 2.75rem;
  margin: 1.25rem 5.75rem 0 3.373rem;
  padding: 0.813rem 2.844rem 0.75rem;
`