import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import addAdress from '../../requests/addAdress'
import { goToHomePage } from '../../routes/coordinator'
import {Form, StyledInput, StyledButton} from './styled'


function RegisterAdressPage() {
  const initialState = {
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  }
  const [form, handleInputChange, clear] = useForm(initialState)
const history = useHistory()
  const onSubmitForm = (event) => {
    event.preventDefault()

    addAdress(form)
    clear()
    goToHomePage(history)
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <StyledInput
        placeholder={'Rua'}
        name={'street'}
        value={form.street}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
      />
      <StyledInput
        placeholder={'Número'}
        name={'number'}
        value={form.number}
        onChange={handleInputChange}
        required
        type='number'
      />
      <StyledInput
        placeholder={'Bairro'}
        name={'neighbourhood'}
        value={form.neighbourhood}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
      />
      <StyledInput
        placeholder={'Cidade'}
        name={'city'}
        value={form.city}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
      />
      <StyledInput
        placeholder={'Estado'}
        name={'state'}
        value={form.state}
        onChange={handleInputChange}
        required
        pattern={"[A-Za-z]{2}"}
      />
      <StyledInput
        placeholder={'Complemento'}
        name={'complement'}
        value={form.complement}
        onChange={handleInputChange}

      />
      <StyledButton bg={'#e8222e'} width={"100%"}  type={'submit'}>Cadastrar</StyledButton>
    </Form>
  )
}

export default RegisterAdressPage