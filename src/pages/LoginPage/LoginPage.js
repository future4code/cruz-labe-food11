import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import loginOrSignUp from '../../requests/loginOrSignUp'
import useRequestData from '../../hooks/useRequestData'
// import { Button } from '@chakra-ui/button'
import { gotoSignUpPage } from '../../routes/coordinator'
import { Input } from '../../components/Inputs/inputForm'
import { EyeFill } from '@styled-icons/bootstrap/EyeFill'
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill'
import Button from '../../components/Inputs/buttonSubmit'
const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const history = useHistory()
    const [hidePassword, setHidePassword] = useState(true)
    const [passwordType, setPasswordType] = useState('password')

    useEffect(() => {

    }, [])



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
            <BoxLogo>

            </BoxLogo>
            <H4>Entrar</H4>
            <Form onSubmit={(evt) => loginOrSignUp('login', form, history, evt)}>
                <Input name="email" value={form.email} onChange={onChange} placeholder="E-mail" type='email' required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} />
                <Input name="password" value={form.password} onChange={onChange} placeholder="Password" type={passwordType} required pattern={"^.{6,}"} icon={hidePassword ? <SlashEye /> : <Eye />} onClick={changeTypePassword} />
                <Button onClick={() => gotoSignUpPage(history)} text="Nao possui cadastro? Clique aqui"/>
                {/* <Button type={'submit'}>Entrar</Button> */}
            </Form>
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


const Form = styled.form`
display:flex;
flex-direction:column;
`


const Eye = styled(EyeFill)`
color:orange;
`

const SlashEye = styled(EyeSlashFill)`
`