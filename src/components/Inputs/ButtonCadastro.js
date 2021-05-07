import styled from 'styled-components'
import React from 'react'



const ButtonCadastro = props => {
    return (
        <Container>
            <ButtonSubmit onClick={props.onClick}  type={props.type}>{props.text}</ButtonSubmit>
        </Container>
    )
}

export default ButtonCadastro

const Container = styled.div`
width:22.5rem;
height:2.625rem;
margin: 1rem 0 0;
padding: 0.75rem 2rem;
`

const ButtonSubmit = styled.button`
width:18.5rem;
height:1.125rem;
text-align:center;
`