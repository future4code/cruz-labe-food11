import axios from 'axios'
import { BASE_URL } from '../constants/url'

function addAdress(finalUrl, body) {
  axios.put(`${BASE_URL}${finalUrl}`, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  }).then((res) => {
    localStorage.setItem('token', res.data.token)
  }).catch((err) => {
    alert(err)
  })
}

export default addAdress