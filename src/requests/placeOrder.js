import axios from 'axios'
import { BASE_URL } from '../constants/url'

function placeOrder(id, body){
  console.log('id q ta vindo,',id)
  console.log('body q ta vindo: ',body)
  console.log('o lugar q ta indo : ',`${BASE_URL}restaurants/${id}/order`)
  axios.post(`${BASE_URL}restaurants/${id}/order`, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  }).then((res) => {
    alert('pedido realizado')
    console.log(res.data)
  }).catch((err) => {
    alert(err.response.data)
  })
}

export default placeOrder