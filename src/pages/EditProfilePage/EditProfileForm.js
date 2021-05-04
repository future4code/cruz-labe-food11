import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import updateProfile from '../../functions/updateProfile'

function EditProfileForm() {
  const profile = useRequestData({}, 'profile')

  const initialState = {
    name: profile.user && profile.user.name,
    email: profile.user && profile.user.email,
    cpf: profile.user && profile.user.cpf
  }

  const [form, onChangeInput, clear] = useForm(initialState)

  const onSubmitForm = (event) => {
    event.preventDefault()
    updateProfile(form)
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
        />
        <Input
          placeholder={'CPF'}
          name={'email'}
          value={form.email}
          onChange={onChangeInput}
        />
        <Input
          placeholder={'E-mail'}
          name={'cpf'}
          value={form.cpf}
          onChange={onChangeInput}
        />
        <Button bg={'#c4c4c4'} type={'submit'}>Editar</Button>
      </form>
    </div>
  )
}

export default EditProfileForm