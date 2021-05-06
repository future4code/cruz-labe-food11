import styled from 'styled-components'
import React from 'react'
export const Input = (props) => {
    return (
        <Container>
                <BoxText>{props.text}</BoxText>

            <ContainerInput>
                <InputForm
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    type={props.type}
                    required={props.required}
                    pattern={props.pattern}
                    title={props.title}
                />

            </ContainerInput>
            <DivIcon onClick={props.onClick}>{props.icon}</DivIcon>

        </Container>
    )
}


export const InputForm = styled.input`
/* width:16.5rem;
height:1.125rem;
font-size:1rem; */
width:20.5rem;
height:3.5rem;
padding: 0.5rem 1rem;
/* background-color:purple; */

`

const Container = styled.div`
width:22.5em;
height:4.5rem;
padding: 0 1rem 0.5rem;
margin: 0.5rem 0 0;
`

const DivIcon = styled.div`
width:1.5rem;
height:1.5rem;
margin-left:0.5rem;
position:relative;
bottom:2.225rem;
left:18rem;
`

const ContainerInput = styled.div`
border:1px solid #b8b8b8;
width:20.5rem;
height:3.5rem;
/* padding: 1.188rem 3rem 1.188rem 1rem; */
border-radius:2px;
display:flex;
`
const BoxText= styled.div`
position:relative;
left:1rem;
top:0.5rem;
color:#b8b8b8;
background-color:white;
height:1.125rem;
width:5.875rem;
padding-left:0.4rem;
font-size:0.75rem;
`