import axios from 'axios'
import { BASE_URL } from '../constants/url'

function updateProfile(body){
  axios.put(`${BASE_URL}profile`, body, {
    headers: {
      auth: localStorage.getItem('token')
    }})
  .then((res) => {
    alert('Perfil atualizado')
  }).catch((err) => {
    alert(err)
  })
}

export default updateProfile