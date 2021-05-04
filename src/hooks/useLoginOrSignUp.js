import React from 'react'
import { BASE_URL } from '../constants/url'
import axios from 'axios'
import { goToHomePage, goToRegisterAddressPage } from '../routes/coordinator'

const loginOrSignUp = async (func, body, history, evt) => {
    evt.preventDefault()
    console.log('entrei no submitt')
    try {
        const response = await axios.post(`${BASE_URL}${func}`, body)
        let token = response.data.token
        window.localStorage.setItem('token', token)
        if (response.data.user.hasAddress) {
            console.log('gotoHome')
            goToHomePage(history)
        } else {
            goToRegisterAddressPage(history)
        }
    } catch (error) {
        console.log("Erro encontrado: ", error)
    }

}

export default loginOrSignUp