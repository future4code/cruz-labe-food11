import { Logout } from '@styled-icons/heroicons-outline'
import React from 'react'
import { useHistory } from 'react-router'
import { Container, GoBackIcon, TitleHeader } from './styled'
import styled from 'styled-components'
const Header = (props) => {
    const history = useHistory()
    const logout = (history) => {
        window.localStorage.removeItem('token')
        alert("Logout realizado")
        history.push('/login')
    }
    return (
        <Container style={props.needHeader !== 'true' ? { boxShadow: 'none' } : { boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.25)' }}>
            <GoBackIcon onClick={history.goBack}
                style={props.needHeader !== 'true' ? { backgroundImage: 'none' } : { display: 'flex' }}>
            </GoBackIcon>
            <TitleHeader>{props.text}</TitleHeader>
            <LogoutButton onClick={() => logout(history)} style={props.hideLogout !=='true' ? {display:'block'} : {display:'none'}} />
        </Container>
    )
}

export default Header

const LogoutButton = styled(Logout)`
position:relative;
top:2rem;
right:1rem;
&:hover{
    cursor: pointer;
    color:red;
}
`
