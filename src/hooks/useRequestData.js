import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/url'

function useRequestData(initialState, finalUrl) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${BASE_URL}${finalUrl}`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      alert(err)
    })
  }, [finalUrl])

  return data
}

export default useRequestData