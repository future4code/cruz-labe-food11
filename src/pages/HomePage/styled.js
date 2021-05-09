import styled from 'styled-components'
import searchIcon from '../../assets/search.svg'

export const StyledBox = styled.div`
width: 22.5rem;
padding: 0 0 1rem;
border-radius: 8px;
margin-top: 0.5rem;
transition: transform 0.5s linear;
&:hover{
  transform: scale(1.1, 1);
}
`

export const LogoRestaurant = styled.img`
width: 20.5rem;
height: 7.5rem;
border:1px solid #b8b8b8;
border-bottom:none;
margin:auto;
border-radius:  8px 8px 0 0;
`

export const OverFlowContainer = styled.div`
overflow:hidden;
width: 22.5rem;
`

export const DivInfos = styled.div`
border-radius: 0 0 8px 8px;
border: solid 1px #b8b8b8;
width:20.5rem;
margin:auto;
padding-bottom:1rem;
`

export const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const H2Nome = styled.h2`
margin: 0.75rem 1rem 0.25rem;
font-family: Roboto;
font-size: 1.2rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #e8222e;
`

export const H2 = styled.h2`
margin: 0.25rem 0.5rem 0 1rem;
font-family: Roboto;
font-size: 1.2rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
`

export const SearchIcon = styled.button`
background-image:url(${searchIcon});
width: 1.5rem;
height: 1.5rem;
margin: 0 0.959rem 0 0;
object-fit: contain;
`


export const ContainerSearchInput = styled.div`
width: 20.5rem;
height: 3.5rem;
padding: 1rem 0.503rem 1rem 1.063rem;
border-radius: 2px;
border: solid 1px #b8b8b8;
display:flex;
align-items:center;
`

export const NotFoundMessage = styled.div`
width: 22.5rem;
height: 2.625rem;
margin: 0.5rem 0 0;
padding: 0.75rem 2rem;
text-align:center;
`


export const Input = styled.input`
 
`