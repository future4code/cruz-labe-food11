import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import loginOrSignUp from '../../hooks/useLoginOrSignUp'

const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const history = useHistory()


    useEffect(() => {

    }, [])
    const login = async (event) => {
        event.preventDefault()
        const body = form
        try {
            const response = await axios.post(`${BASE_URL}login`, body)
            console.log("Response: ", response)
            const token = response.data.token
            window.localStorage.setItem('token', token)
            if (response.data.user.hasAddress) {
                console.log("goToHomePage")
            } else {
                console.log("goToAddressPage")
            }

        } catch (error) {
            console.log('Erro encontrado: ', error)
        }

    }


    return (
        <Container>
            <BoxLogo>

            </BoxLogo>
            <H4>Entrar</H4>
            <Form onSubmit={(evt) => loginOrSignUp('login', form, history, 'routerFunc', evt)}>
                <Input name="email" value={form.email} onChange={onChange} placeholder="E-mail" type='email' required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} />
                <Input name="password" value={form.password} onChange={onChange} placeholder="Password" type='password' required pattern={"^.{6,}"} />
                <Button>Entrar</Button>
            </Form>

            <Button>Nao possui cadastro? Clique aqui</Button>

        </Container>
    )


}


export default LoginPage



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