import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import loginOrSignUp from '../../functions/loginOrSignUp'
import { EyeFill } from '@styled-icons/bootstrap/EyeFill'
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
const SignUpPage = () => {

    const [form, onChange, clear] = useForm({ name: '', email: '', password: '', cpf: '' })
    const history = useHistory()
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [hidePassword, setHidePassword] = useState(true)
    const [confirmCheckPasswordType, setConfirmCheckPasswordType] = useState('password')
    const [hideCheckPassword, setHideCheckPassword] = useState(true)
    const [validity,setValidity] = useState('')
    useEffect(() => {
        console.log("useEffect")
        console.log('form.password: ', form.password)
        console.log('checkpassword: ', confirmPassword)
    }, [form.password])


    const checkPassword = (event) => {
        setConfirmPassword(event.target.value)

        // console.log('form : ', form.password)
        // console.log("confirmPassword: ", confirmPassword)
        // console.log('validity: ', validity)
        if (event.target.value.length > 5 && form.password.length > 5 && event.target.value !== form.password) {
            event.target.setCustomValidity("As senhas não são iguais.")
            // setValidity('As senhas não são iguais.')
            // setValidity(event.target.value)
            // console.log("la dentrooooooooooo!")
            // console.log('validity: ',validity)
        } else {
        }
    }

    const check = (event) => {
        console.log("onInput check: ", event.target.value)
        // console.log('form : ',form)
        if (event.target.value !== form.password) {
            event.target.setCustomValidity("As senhas não são iguais.")
    }else{
        event.target.setCustomValidity("")
        console.log('entrei no else')
    }}
    
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

    return (
        <Container>
            <BoxLogo>

            </BoxLogo>
            <H4>Cadastrar</H4>
            <Form onSubmit={(evt) => loginOrSignUp('signup', form, history, evt)}>
                <Input name="name" value={form.name} onChange={onChange} placeholder="Nome e sobrenome" type='text' required pattern={"^.{6,}"} />
                <Input name="email" value={form.email} onChange={onChange} placeholder="email@email.com" type='email' required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} />
                <Input name="cpf" value={form.cpf} onChange={onChange} placeholder="000.000.000-00" type='text' required pattern={'([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})'} />
                <InputGroup>
                    <InputRightElement
                        children={
                            <IconButton onClick={changeTypePassword}
                                icon={hidePassword ? <SlashEye /> : <Eye />}
                                size='lg'
                                aria-label="Call Segun"
                            />
                        }
                    />
                    <Input name="password" value={form.password} onChange={onChange} placeholder="Mínimo 6 caracteres" type={passwordType} required pattern={"^.{6,}"} setCustomValidity={validity} />
                    {/* onInput={check2} */}
                </InputGroup>

                <InputGroup>
                    <InputRightElement
                        children={
                            <IconButton onClick={changeTypeCheckPassword}
                                icon={hideCheckPassword ? <SlashEye /> : <Eye />}
                                size='lg'
                                aria-label="Call Segun"
                            />
                        }
                    />
                    <Input name="checkPassword" value={confirmPassword} onChange={checkPassword} placeholder="Confirme a senha anterior" type={confirmCheckPasswordType} required pattern={"^.{6,}"} 
                    onInput={check}
                    />
                </InputGroup>

                <Button type='submit'>Criar</Button>
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
width:100%;
height:70px;
`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Button = styled.button`
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

