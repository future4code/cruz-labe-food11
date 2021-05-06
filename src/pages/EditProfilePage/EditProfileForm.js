import React from 'react'
// import { Input, Button } from '@chakra-ui/react'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import updateProfile from '../../requests/updateProfile'
import { useHistory } from 'react-router'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Inputs/inputForm'
import Button from '../../components/Inputs/buttonSubmit'

function EditProfileForm() {
  const profile = useRequestData({}, 'profile')
  const history = useHistory()
  const initialState = {
    name: profile.user && profile.user.name,
    email: profile.user && profile.user.email,
    cpf: profile.user && profile.user.cpf
  }

  const [form, onChangeInput, clear] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    updateProfile(form,history)
    clear()
  }

  return (
    <div>
      <p>Editar perfil</p>
      <Form onSubmit={onSubmitForm}>
        <Input
          placeholder={'Nome e Sobrenome'}
          name={'name'}
          value={form.name}
          onChange={onChangeInput}
          required 
          pattern={"^([a-zA-Z]{1,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{2,})?)"}
          title="Ex: Jorge da Silva, nomes sem acentos."
          text="Nome*"
        />
        <Input
          placeholder={'email@email.com'}
          name={'email'}
          value={form.email}
          onChange={onChangeInput}
          required 
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
          title="Ex: jorgenicola@gmail.com"
          text="E-mail*"
        />
        <Input
          placeholder={'Formato: 000.000.000-00'}
          name={'cpf'}
          value={form.cpf}
          onChange={onChangeInput}
          required 
          pattern={'([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})'}
          title="000.000.000.00 , Os pontos(.) e o traço(-) são obrigatórios"
          text="CPF*"
        />
        {/* <Button bg={'#c4c4c4'} type={'submit'}>Editar</Button> */}
        <Button bg={'#c4c4c4'} type={'submit'} text="Editar"></Button>
      </Form>
    </div>
  )
}

export default EditProfileForm