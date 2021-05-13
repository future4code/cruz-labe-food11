import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToProfilePage } from '../routes/coordinator'
const  updateProfile =(body,history)=> {
  axios.put(`${BASE_URL}profile`, body, {
    headers: {
      auth: localStorage.getItem('token')
    }})
  .then((res) => {
    alert('Perfil atualizado')
    goToProfilePage(history)
  }).catch((err) => {
    alert(err)
  })
}

export default updateProfile