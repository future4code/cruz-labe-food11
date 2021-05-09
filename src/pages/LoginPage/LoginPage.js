import React, { useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { Eye } from '../../assets/icons/Eye'
import { SlashEye } from '../../assets/icons/SlashEye'
import loginOrSignUp from '../../requests/loginOrSignUp'
import { gotoSignUpPage } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { Input } from '../../components/Inputs/InputForm'
import Button from '../../components/Inputs/ButtonSubmit'
import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'
import { Form } from '../../components/Form/Form'
import { Container } from '../../components/Container/Container'
import ButtonCadastro from '../../components/Inputs/ButtonCadastro'
import Header from '../../components/Header/Header'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    CloseButton
} from "@chakra-ui/react"

const LoginPage = () => {
    useUnprotectedPage()

    const [form, onChange] = useForm({ email: '', password: '' })
    const [hidePassword, setHidePassword] = useState(true)
    const [passwordType, setPasswordType] = useState('password')
    const [passwordNotFound, setPasswordNotFound] = useState(false)
    const [userNotFound, setUserNotFound] = useState(false)


    const history = useHistory()

    const changeTypePassword = () => {
        setHidePassword(!hidePassword)
        if (hidePassword) {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const closeErrorMessage = () => {
        setPasswordNotFound(false)
    }

    const errorMessage = () => {
        let message
        if (passwordNotFound || userNotFound) {
            if (passwordNotFound) {
                message = 'Senha incorreta'
            } else if(userNotFound) {
                message = 'Usuário não encontrado'
            }

            return <Alert width={'91%'} marginTop={'.8rem'} status="error">
                <AlertIcon />
                <AlertTitle mr={2}>{message}!</AlertTitle>
                <CloseButton onClick={closeErrorMessage} position="absolute" right="8px" top="8px" />
            </Alert>
        }

    }
    return (
        <Container>
            <Header hideLogout='true' />
            <Logo />
            <Title text={'Entrar'} />
            <Form onSubmit={(evt) => loginOrSignUp('login', form, history, evt, null, setPasswordNotFound, setUserNotFound)}>
                <Input name="email" value={form.email} onChange={onChange} placeholder="E-mail" type='email' required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} text="E-mail*"
                    title="Ex: jorgenicola@gmail.com" />
                <Input name="password" value={form.password} onChange={onChange} placeholder="Password" type={passwordType} required pattern={"^.{6,}"} icon={!hidePassword ? <SlashEye /> : <Eye />} onClick={changeTypePassword} text="Senha*" />
                <Button type="submit" text="Entrar" />

                {errorMessage()}

            </Form>
            <ButtonCadastro onClick={() => gotoSignUpPage(history)} text="Nao possui cadastro? Clique aqui" />
        </Container>
    )
}

export default LoginPage
