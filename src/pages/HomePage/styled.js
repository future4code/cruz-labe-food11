import styled from 'styled-components'


export const StyledBox = styled.div`
width: 22.5rem;
/* height: 12rem; */
padding: 0 0 1rem;
border-radius: 8px;
margin-top: 0.5rem;
transition: transform 0.5s linear;
/* background-color:orange; */

&:hover{
  transform: scale(1.1, 1);
}
`

export const LogoRestaurant = styled.img`
width: 20.5rem;
height: 7.5rem;
/* border:1px solid #b8b8b8; */
border-bottom:none;
margin:auto;
/* padding-top:1rem; */
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
