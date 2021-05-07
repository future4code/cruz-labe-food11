import { Input, Button} from '@chakra-ui/react'
import styled from 'styled-components'


export const Form = styled.form`
display: flex;
flex-direction: column;
width: 90%;
`

export const StyledInput = styled(Input)`
  display: block;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  padding: 2rem;
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