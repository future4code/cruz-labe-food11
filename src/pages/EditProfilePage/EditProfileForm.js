import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import updateProfile from '../../requests/updateProfile'
import { useHistory } from 'react-router'

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
      <form onSubmit={onSubmitForm}>
        <Input
          placeholder={'Nome e Sobrenome Ex: Antonio da Silva'}
          name={'name'}
          value={form.name}
          onChange={onChangeInput}
          required pattern={"^([a-zA-Z]{1,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{2,})?)"}
          title="Ex: Jorge da Silva, nomes sem acentos."
        />
        <Input
          placeholder={'E-mail Ex: jorgenicola@gmail.com'}
          name={'email'}
          value={form.email}
          onChange={onChangeInput}
          required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
          title="Ex: jorgenicola@gmail.com"
        />
        <Input
          placeholder={'CPF : 000.000.000-00'}
          name={'cpf'}
          value={form.cpf}
          onChange={onChangeInput}
          required pattern={'([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})'}
          title="000.000.000.00 , Os pontos(.) e o traço(-) são obrigatórios"
        />
        <Button bg={'#c4c4c4'} type={'submit'}>Editar</Button>
      </form>
    </div>
  )
}

export default EditProfileForm