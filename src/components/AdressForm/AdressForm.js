import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import addAdress from '../../functions/addAdress'
import { goToHomePage } from '../../routes/coordinator'

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
    <form onSubmit={onSubmitForm}>
      <Input
        placeholder={'Rua'}
        name={'street'}
        value={form.street}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
      />
      <Input
        placeholder={'Número'}
        name={'number'}
        value={form.number}
        onChange={handleInputChange}
        required
        type='number'
      />
      <Input
        placeholder={'Bairro'}
        name={'neighbourhood'}
        value={form.neighbourhood}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
      />
      <Input
        placeholder={'Cidade'}
        name={'city'}
        value={form.city}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
      />
      <Input
        placeholder={'Estado'}
        name={'state'}
        value={form.state}
        onChange={handleInputChange}
        required
        pattern={"[A-Za-z]{2}"}
      />
      <Input
        placeholder={'Complemento'}
        name={'complement'}
        value={form.complement}
        onChange={handleInputChange}

      />
      <Button type={'submit'}>Cadastrar</Button>
    </form>
  )
}

export default RegisterAdressPage