import React from 'react'
import { useHistory } from 'react-router'
import { Container, GoBackIcon, TitleHeader } from './styled'

const Header = (props) => {
    const history = useHistory()

    return (
        <Container style={props.needHeader !== 'true' ? { boxShadow: 'none' } : { boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.25)' }}>
            <GoBackIcon onClick={history.goBack} 
            style={props.needHeader !== 'true' ? { display: 'none' } : { display: 'flex' }}>
            </GoBackIcon>
            <TitleHeader>{props.text}</TitleHeader>
        </Container>
    )
}

export default Header


