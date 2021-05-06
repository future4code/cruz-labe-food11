import styled from 'styled-components'
import React from 'react'
import { EyeFill } from '@styled-icons/bootstrap/EyeFill'
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill'
export const Input = (props) => {
    return (
        <Container>

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
                <DivIcon onClick={props.onClick}>{props.icon}</DivIcon>

            </ContainerInput>

        </Container>
    )
}


export const InputForm = styled.input`
/* border:1px solid #b8b8b8; */

width:16.5rem;
height:1.125rem;
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
/* background-color:orange; */
margin-left:0.5rem;
`

const ContainerInput = styled.div`
border:1px solid #b8b8b8;
width:20.5rem;
height:3.5rem;
margin:1rem 0.5rem;
padding: 1.188rem 3rem 1.188rem 1rem;
border-radius:2px;
display:flex;
`



const Eye = styled(EyeFill)`
color:orange;
height:70px;
/* display:flex; */
/* align-items:center; */
/* height:100% */
`

const SlashEye = styled(EyeSlashFill)`
color:rebeccapurple;
height:60px;
`