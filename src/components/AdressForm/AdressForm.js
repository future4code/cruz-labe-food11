import React from 'react'
// import { Input, Button } from '@chakra-ui/react'
// import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import addAdress from '../../requests/addAdress'
import { goToHomePage } from '../../routes/coordinator'
import { Form } from '../Form/Form'
import Button from '../Inputs/buttonSubmit'
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
    <Form onSubmit={onSubmitForm}>
      <Input
        placeholder={'Rua/ Av'}
        name={'street'}
        value={form.street}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
        title="Mínimo 6 caracteres. Ex: Rua dos comerciantes"
        text={'Logradouro*'}
      />
      <Input
        placeholder={'Número'}
        name={'number'}
        value={form.number}
        onChange={handleInputChange}
        required
        type='number'
        title="Ex: 99"
        text={'Número*'}
      />
       <Input
        placeholder={'Apto / Bloco'}
        name={'complement'}
        value={form.complement}
        onChange={handleInputChange}
        text={'Complemento'}
      />
      <Input
        placeholder={'Bairro'}
        name={'neighbourhood'}
        value={form.neighbourhood}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
        title="Mínimo 6 caracteres. Ex: Bairro Castelo"
        text={'Bairro*'}
      />
      <Input
        placeholder={'Cidade'}
        name={'city'}
        value={form.city}
        onChange={handleInputChange}
        required
        pattern={"^.{6,}"}
        title="Mínimo 6 caracteres.Ex: Santa Matilde"
        text={'Cidade*'}
      />
      <Input
        placeholder={'Estado(Sigla) Ex: MG, SP , RJ '}
        name={'state'}
        value={form.state}
        onChange={handleInputChange}
        required
        pattern={"[A-Za-z]{2}"}
        title="Sigla apenas, com 2 letras: MT , RS ,BA"
        text={'Estado*'}
      />
     
      <Button type={'submit'} text={'Cadastrar'}/>
    </Form>
  )
}

export default RegisterAdressPage