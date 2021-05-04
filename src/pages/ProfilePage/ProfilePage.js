import React from 'react'
import useRequestData from '../../hooks/useRequestData'

function ProfilePage() {
  const profile = useRequestData({}, 'profile')
  console.log(profile.user)

  return (
    <div>
      <p>{profile.user && profile.user.name}</p>
      <p>{profile.user && profile.user.cpf}</p>
      <p>{profile.user && profile.user.email}</p>
      <br />
      <b>Endereço: </b>
      <p>{profile.user && profile.user.address}</p>
    </div>
  )
}

export default ProfilePage
