import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import useForm from '../../hooks/useForm'
import addAdress from '../../functions/addAdress'

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

  const onSubmitForm = (event) => {
    event.preventDefault()

    addAdress(form)
    clear()
  }
  
  return (
    <div>
      <p>RegisterAdressPage</p>
      <form onSubmit={onSubmitForm}>
        <Input
          placeholder={'Rua'}
          name={'street'}
          value={form.street}
          onChange={handleInputChange}
        />
        <Input
          placeholder={'Número'}
          name={'number'}
          value={form.number}
          onChange={handleInputChange}
        />
        <Input
          placeholder={'Bairro'}
          name={'neighbourhood'}
          value={form.neighbourhood}
          onChange={handleInputChange}
        />
        <Input
          placeholder={'Cidade'}
          name={'city'}
          value={form.city}
          onChange={handleInputChange}
        />
        <Input
          placeholder={'Estado'}
          name={'state'}
          value={form.state}
          onChange={handleInputChange}
        />
        <Input
          placeholder={'Complemento'}
          name={'complement'}
          value={form.complement}
          onChange={handleInputChange}
        />
        <Button type={'submit'}>Cadastrar</Button>
      </form>
    </div >
  )
}

export default RegisterAdressPage