import { Input, Button, Box } from '@chakra-ui/react'
import styled from 'styled-components'



export const PageDiv = styled(Box)`
  width: 100%;
  height: 6.375rem;
  margin: 0.438rem 0 0;
  border-radius: 8px;
  border: solid 1px var(--greyish);
`

export const HeaderDiv = styled(Box)`
  width: 100%;
  height: 4rem;
  padding-top: 20px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`

export const HeaderText = styled.h2`
  width: auto;
  height: 2rem;
  margin-left:auto;
  margin-top: 1rem;
  padding: 0rem 1.344rem 0rem;
  `


export const Form = styled.form`
display: flex;
flex-direction: column;
width: 90%;
`

export const StyledInput = styled(Input)`
  display: flex;

  margin-left: 1.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  font-family: Roboto;
  font-size: 3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

export const StyledButton = styled(Button)`
margin-left: 1.5rem;
margin-top: 1.5rem;
padding: 1rem;
background-color: #e8222e;

`

export const StyledBackButton = styled(Box)`
display: flex;
position: absolute;
margin-bottom: 20px;
margin-left: .5rem;

`