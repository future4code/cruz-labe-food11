import React from 'react'
import styled from 'styled-components'


const Title = props => {
    return (
        <ContainerTitle>{props.text}</ContainerTitle>
    )
}

export default Title

const ContainerTitle = styled.div`
width: 18.5rem;
height: 1.125rem;
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
`
