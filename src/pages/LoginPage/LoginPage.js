import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'

const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const history = useHistory()


    useEffect(() => {

    }, [])



    return (
        <Container>
            <BoxLogo>

            </BoxLogo>
            <H4>Entrar</H4>
            <Form>
                <Input name="email" value={form.email} onChange={onChange} placeholder="E-mail" />
                <Input name="password" value={form.password} onChange={onChange} placeholder="Password" />
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

`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Button = styled.button`
`