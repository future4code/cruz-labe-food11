import React from 'react'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import updateProfile from '../../requests/updateProfile'
import {StyledButton, StyledInput,Form} from './styled' 

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
      <Form onSubmit={onSubmitForm}>
        <StyledInput
          placeholder={'Nome'}
          name={'name'}
          value={form.name}
          onChange={onChangeInput}
        />
        <StyledInput
          placeholder={'CPF'}
          name={'email'}
          value={form.email}
          onChange={onChangeInput}
        />
        <StyledInput
          placeholder={'E-mail'}
          name={'cpf'}
          value={form.cpf}
          onChange={onChangeInput}
        />
        <StyledButton bg={'#e8222e'} width={"100%"}type={'submit'}>Salvar</StyledButton>
      </Form>
    </div>
  )
}

export default EditProfileForm