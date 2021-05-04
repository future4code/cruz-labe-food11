import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { headersConfig } from '../constants/headersConfig'

function useRequestData(initialState, finalUrl) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${BASE_URL}${finalUrl}`, headersConfig)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      alert(err)
    })
  }, [finalUrl, data])

  return data
}

export default useRequestData