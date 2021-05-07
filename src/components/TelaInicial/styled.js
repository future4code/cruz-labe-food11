import styled from 'styled-components'
import loadingLogo from '../../assets/loadingLogo.svg'
import { Container } from "../Header/styled"



export const ContainerLogo = styled(Container)`
background-color:#e8222e;
height:100vh;

 `

export const LoadingLogo = styled.div`
background-image:url(${loadingLogo});
width: 7.875rem;
height: 4.063rem;
margin: auto;
 `