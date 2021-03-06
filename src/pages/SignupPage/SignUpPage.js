import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import loginOrSignUp from '../../requests/loginOrSignUp'
import { Eye } from '../../assets/icons/Eye'
import { SlashEye } from '../../assets/icons/SlashEye'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { Input } from '../../components/Inputs/InputForm'
import Button from '../../components/Inputs/ButtonSubmit'
import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'
import { Form } from '../../components/Form/Form'
import { Container } from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import { DivIsDifferentPassword } from './styled'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    CloseButton
} from "@chakra-ui/react"

const SignUpPage = () => {
    useUnprotectedPage()

    const [form, onChange] = useForm({ name: '', email: '', password: '', cpf: '' })
    const [formPassword, onChangePassword] = useForm({ confirmPassword: '' })
    const history = useHistory()
    const [passwordType, setPasswordType] = useState('password')
    const [hidePassword, setHidePassword] = useState(true)
    const [confirmCheckPasswordType, setConfirmCheckPasswordType] = useState('password')
    const [hideCheckPassword, setHideCheckPassword] = useState(true)
    const [display, setDisplay] = useState('none')
    const [isCompletedData, setIsCompletedData] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    useEffect(() => {
    }, [form.password])


    const checkPassword = (event) => {
        onChangePassword(event)
        setIsCompletedData(true)
        if (event.target.value.length > 5 && form.password.length > 5 && event.target.value !== form.password) {
            setIsCompletedData(false)
            setDisplay('block')
        } else {
            setIsCompletedData(true)
            setDisplay('none')
        }
    }

    const check = (event) => {
        onChange(event)
        if (event.target.value.length > 5 && form.password.length > 5 && formPassword.confirmPassword !== event.target.value) {
            setIsCompletedData(false)
            setDisplay('block')
        } else {
            setDisplay('none')
            setIsCompletedData(true)
        }
    }

    const changeTypePassword = () => {
        setHidePassword(!hidePassword)
        if (hidePassword) {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const changeTypeCheckPassword = () => {
        setHideCheckPassword(!hideCheckPassword)
        if (hideCheckPassword) {
            setConfirmCheckPasswordType('text')
        } else {
            setConfirmCheckPasswordType('password')
        }
    }

    const closeErrorMessage = () => {
        setShowErrorMessage(false)
    }

    return (
        <Container>
            <Header needHeader="true" hideLogout='true'/>
            <Logo />
            <Title text={'Cadastrar'} />
            <Form onSubmit={(evt) => loginOrSignUp('signup', form, history, evt, isCompletedData, setShowErrorMessage)}>
                <Input
                    name="name"
                    value={form.name}
                    onChange={check}
                    placeholder="Nome e sobrenome" type='text'
                    required
                    // pattern={"^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)"}
                    text={'Nome*'}
                    title="Ex: Jorge da Silva, nomes sem acentos."
                />
                <Input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email@email.com"
                    type='email'
                    required
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                    text={"E-mail*"}
                    title="Ex: jorgenicola@gmail.com"
                />

                <Input
                    name="cpf"
                    value={form.cpf}
                    onChange={onChange}
                    placeholder="000.000.000-00" type='text'
                    required
                    pattern={'([0-9]{3}[\\.][0-9]{3}[\\.][0-9]{3}[-][0-9]{2})'}
                    text={'CPF*'}
                    title="000.000.000.00 , Os pontos(.) e o tra??o(-) s??o obrigat??rios"
                />

                <Input
                    name="password"
                    value={form.password}
                    onChange={check}
                    placeholder="Password"
                    type={passwordType}
                    required
                    pattern={"^.{6,}"}
                    icon={!hidePassword ? <SlashEye /> : <Eye />}
                    onClick={changeTypePassword}
                    text={'Senha*'}
                    title=""
                />

                <Input
                    name="confirmPassword"
                    value={formPassword.confirmPassword}
                    onChange={checkPassword}
                    placeholder="Confirme a senha anterior"
                    type={confirmCheckPasswordType}
                    required
                    pattern={"^.{6,}"}
                    onClick={changeTypeCheckPassword}
                    icon={!hideCheckPassword ? <SlashEye /> : <Eye />}
                    text={'Confirmar*'}
                    title=""
                />
                <DivIsDifferentPassword style={{ display: `${display}` }}>
                    Deve ser a mesma que a anterior.
                    </DivIsDifferentPassword>

                <Button type='submit' text='Criar' />
                {showErrorMessage && <Alert width={'91%'} marginTop={'.8rem'} status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Email ou CPF j?? cadastrados!</AlertTitle>
                    <CloseButton onClick={closeErrorMessage} position="absolute" right="8px" top="8px" />
                </Alert>}

            </Form>
        </Container>
    )
}

export default SignUpPage


