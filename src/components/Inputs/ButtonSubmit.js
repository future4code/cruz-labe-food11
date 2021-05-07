import styled from 'styled-components'
import React from 'react'



const Button = props => {


    return (
        <Container>
            <ButtonSubmit onClick={props.onClick}  type={props.type}>
                {props.text}
                </ButtonSubmit>
        </Container>
    )
}

export default Button

const Container = styled.div`
width: 20.5rem;
height: 2.625rem;
padding: 0.75rem 1rem;
border-radius: 2px; 
background-color: #e8222e;
margin-top:0.5rem;
`

const ButtonSubmit = styled.button`
width:18.5rem;
height:1.125rem;
text-align:center;
`
