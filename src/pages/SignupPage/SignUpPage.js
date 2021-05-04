import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import loginOrSignUp from '../../hooks/useLoginOrSignUp'

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
            console.log("Response: ", response)
            const token = response.data.token
            window.localStorage.setItem('token', token)
            if (response.data.user.hasAddress) {
                console.log("goToHomePage")
            } else {
                console.log("goToAddressPage")
            }
        } catch (error) {
            console.log("erro encontrado: ", error)

        }
    }




    const checkPassword = (event) => {
        console.log("event.target.value: ", event.target.value)
        setConfirmPassword(event.target.value)


    }
    const check = (event) => {
        console.log("onInput check: ", event.target.value)
        // console.log('form : ',form)
        if (confirmPassword !== form.password) {
            event.target.setCustomValidity("As senhas não são iguais.")

        } else {
            event.target.setCustomValidity('')
        }
    }



    return (
        <Container>
            <BoxLogo>

            </BoxLogo>
            <H4>Cadastrar</H4>
            <Form onSubmit={(evt) => loginOrSignUp('singup', form, history, 'routerFunc', evt)}>
                <Input name="name" value={form.name} onChange={onChange} placeholder="Nome e sobrenome" type='text' required pattern={"^.{6,}"} />
                <Input name="email" value={form.email} onChange={onChange} placeholder="email@email.com" type='email' required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} />
                <Input name="cpf" value={form.cpf} onChange={onChange} placeholder="000.000.000-00" type='text' required pattern={'([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})'} />
                <Input name="password" value={form.password} onChange={onChange} placeholder="Mínimo 6 caracteres" type='password' required pattern={"^.{6,}"} />
                <Input name="password" value={confirmPassword} onChange={checkPassword} placeholder="Confirme a senha anterior" type='password' required pattern={"^.{6,}"} onInput={check} />
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
border:1px solid black;
`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Button = styled.button`
`