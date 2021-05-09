import axios from 'axios'
import { BASE_URL } from '../constants/url'

function placeOrder(id, body){
  console.log('entrei no placeOrder')
  axios.post(`${BASE_URL}restaurants/${id}/order`, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  }).then((res) => {
    alert('pedido realizado')
    console.log(res.data)
  }).catch((err) => {
    alert(err.response.data.message)
  })
}

export default placeOrder