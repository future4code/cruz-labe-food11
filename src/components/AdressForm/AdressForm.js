import React from 'react'
// import { Input, Button } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import addAdress from '../../requests/addAdress'
import { goToHomePage } from '../../routes/coordinator'
import { Input } from '../Inputs/inputForm'

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
        placeholder={'Rua Ex: Rua dos comerciantes'}
        name={'street'}
        value={form.street}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
        title="Mínimo 6 caracteres. Ex: Rua dos comerciantes"
      />
      <Input
        placeholder={'Número Ex: 99'}
        name={'number'}
        value={form.number}
        onChange={handleInputChange}
        required
        type='number'
        title="Mínimo 6 caracteres. Ex: 99"
      />
      <Input
        placeholder={'Bairro Ex: Santa Matilde'}
        name={'neighbourhood'}
        value={form.neighbourhood}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
        title="Mínimo 6 caracteres. Ex: Bairro Castelo"
      />
      <Input
        placeholder={'Cidade Ex: Santa Matilde'}
        name={'city'}
        value={form.city}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
        title="Mínimo 6 caracteres.Ex: Santa Matilde"
      />
      <Input
        placeholder={'Estado em sigla: EX: MG, SP , RJ '}
        name={'state'}
        value={form.state}
        onChange={handleInputChange}
        required
        pattern={"[A-Za-z]{2}"}
        title="Sigla apenas, com 2 letras: MT , RS ,BA"
      />
      <Input
        placeholder={'Complemento ( Opcional)'}
        name={'complement'}
        value={form.complement}
        onChange={handleInputChange}
      />
      <Button type={'submit'}>Cadastrar</Button>
    </form>
  )
}

export default RegisterAdressPage