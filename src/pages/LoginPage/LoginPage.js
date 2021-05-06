import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import { Eye } from '../../assets/icons/Eye'
import { SlashEye } from '../../assets/icons/SlashEye'
import loginOrSignUp from '../../requests/loginOrSignUp'
import { gotoSignUpPage } from '../../routes/coordinator'
import { Input } from '../../components/Inputs/inputForm'
import Button from '../../components/Inputs/buttonSubmit'
import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'
import { Form } from '../../components/Form/Form'


const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const history = useHistory()
    const [hidePassword, setHidePassword] = useState(true)
    const [passwordType, setPasswordType] = useState('password')

    const changeTypePassword = () => {
        setHidePassword(!hidePassword)
        if (hidePassword) {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    return (
        <Container>
            <Logo />
            <Title text={'Entrar'} />
            <Form onSubmit={(evt) => loginOrSignUp('login', form, history, evt)}>
                <Input name="email" value={form.email} onChange={onChange} placeholder="E-mail" type='email' required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} text="E-mail*"/>
                <Input name="password" value={form.password} onChange={onChange} placeholder="Password" type={passwordType} required pattern={"^.{6,}"} icon={hidePassword ? <SlashEye /> : <Eye />} onClick={changeTypePassword} text="Senha*"/>
                <Button onClick={() => gotoSignUpPage(history)} text="Nao possui cadastro? Clique aqui" />
            </Form>
        </Container>
    )
}

export default LoginPage

const Container = styled.div`
display:flex;
flex-direction:column;
margin:10vh auto;
align-items:center;
`
