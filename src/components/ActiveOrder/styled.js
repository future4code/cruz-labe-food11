
import styled from 'styled-components'
import clockIcon from '../../assets/clock.svg'







export const ContainerOrder = styled.div`
width: 22.5rem;
height: 7.375rem;
margin: 6.188rem 0 3.063rem;
padding: 1.5rem;
background-color: #e8222e;
position:fixed;
bottom:0;
`
export const Clock = styled.div`
background-image:url(${clockIcon});
width: 2rem;
height: 2rem;
margin: 0.125rem 1.5rem 0 0;
object-fit: contain;
position:absolute;
top:2.75rem;
`

export const StaticTextContainer = styled.p`
width: 16rem;
height: 1.125rem;
margin: 0.5rem 0 0 3rem;
font-family: Montserrat;
font-size: 1rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #ffffff;

`

export const RestaurantNameContainer = styled.p`
width: 16rem;
height: 1.125rem;
margin: 0.5rem 0 0.5rem 3rem;
font-family: Montserrat;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color:black;
`

export const PriceContainer = styled.p`
width: 16rem;
height: 1.125rem;
margin: 0.5rem 0 0 3rem;
font-family: Montserrat;
font-size: 1rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color:black;
`


