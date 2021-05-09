import { Text, Box } from '@chakra-ui/react'
import styled from 'styled-components'


export const PageDiv = styled(Box)`
  width: 100%;
  height: 6.375rem;
  margin: 0;
 justify-content: center;
`

export const HeaderDiv = styled(Box)`
  width: 102%;
  height: 4rem;
  margin-right: auto;
  padding-top: 20px;
  text-align: center;
  border-bottom: 2px solid;
  border-color: grey;



`

export const InfoDiv = styled(Box)`
display:flex;
flex-direction: column;
position: relative;
`

export const Adressdiv = styled(Box)`
display:flex;
flex-wrap: wrap;
flex-direction: row;
position: relative;
background-color: #eeeeee;`

export const HistoryDiv = styled(Box)`
margin-left: 1rem;
width: 23rem;
margin-top: 2rem;
border-bottom-width: 2px;
border-color: black;
`
export const CardsHistoryDiv = styled(Box)``


export const EditDiv = styled(Box)`
width: 100%;
height: 2.5rem;
display: flex;
flex-direction: row;
`

export const HeaderText = styled.h2`
  width: auto;
  height: 2rem;
  margin-left:auto;
  margin-top: 1rem;
  padding: 0rem 1.344rem 0rem;
  
`


export const TextStyle = styled(Text)`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    width: 75%;
    height: 1.125rem;
    margin: 0.5rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);

`

export const SubText = styled(Text)`
      font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    width: 75%;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;

`

export const TextHistoryStyle = styled(Text)`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    width: 75%;
    height: 1.125rem;
    margin: 0rem 0rem 0rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);

`

export const ContainerOrder = styled.div`
  width: 20.5rem;

height: 6.375rem;

margin: 0.438rem 0 0;

padding: 1rem;

border-radius: 8px;

border: 1px solid   #b8b8b8;
`

export const TitleOrder = styled.p`
width: 18.5rem;
height: 1.125rem;
margin: 0 0 0.563rem;
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #e8222e;
`

export const TotalValueOrder = styled.p`
width: 18.5rem;
margin: 0.563rem 0 0.438rem;
font-family: Roboto;
font-size: 0.75rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
`

export const DateOrder = styled.p`
width: 18.5rem;
height: 1.125rem;
margin: 0.438rem 0 0;
font-family: Roboto;
font-size: 1rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
`
