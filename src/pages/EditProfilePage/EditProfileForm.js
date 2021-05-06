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
          placeholder={'Nome'}
          name={'name'}
          value={form.name}
          onChange={onChangeInput}
          required pattern={"^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)"}
        />
        <Input
          placeholder={'E-mail'}
          name={'email'}
          value={form.email}
          onChange={onChangeInput}
          required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
        />
        <Input
          placeholder={'CPF'}
          name={'cpf'}
          value={form.cpf}
          onChange={onChangeInput}
          required pattern={'([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})'}
        />
        <Button bg={'#c4c4c4'} type={'submit'}>Editar</Button>
      </form>
    </div>
  )
}

export default EditProfileForm