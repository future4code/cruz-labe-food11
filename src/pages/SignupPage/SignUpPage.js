import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'

const SignUpPage = () => {

    const [form, onChange, clear] = useForm({ name: '', email: '', password: '', cpf: '' })
    const history = useHistory()
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {

    }, [])
    const signUp = async (event) => {
        event.preventDefault()
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}signup`, body)
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.log("erro encontrado: ", error)
        }
    }
    const checkPassword = (event) => {
        console.log("event.target.value: ", event.target.value)
        setConfirmPassword(event.target.value)
    }




    return (
        <Container>
            <BoxLogo>

            </BoxLogo>
            <H4>Entrar</H4>
            <Form onSubmit={signUp}>
                <Input name="name" value={form.name} onChange={onChange} placeholder="Nome e sobrenome" />
                <Input name="email" value={form.email} onChange={onChange} placeholder="email@email.com" />
                <Input name="cpf" value={form.cpf} onChange={onChange} placeholder="000.000.000-00" />
                <Input name="password" value={form.password} onChange={onChange} placeholder="Mínimo 6 caracteres" />
                <Input name="password" value={confirmPassword} onChange={checkPassword} placeholder="Confirme a senha anterior" />
                <Button>Criar</Button>
            </Form>


        </Container>
    )


}


export default SignUpPage



const Container = styled.div`
display:flex;
flex-direction:column;
width:max(50%,350px);
/* background-color:orange; */
margin:10vh auto;
`

const BoxLogo = styled.div`

`

const H4 = styled.div`
text-align:center;
`

const Input = styled.input`

`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Button = styled.button`
`