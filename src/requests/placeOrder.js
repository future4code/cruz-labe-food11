import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToHomePage } from '../routes/coordinator'

function placeOrder(id, body,history){
  axios.post(`${BASE_URL}restaurants/${id}/order`, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  }).then((res) => {
    alert('pedido realizado')
    goToHomePage(history)
  }).catch((err) => {
    alert(err.response.data.message)
  })

}

export default placeOrder