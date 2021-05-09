import { BASE_URL } from '../constants/url'
import axios from 'axios'
import { goToHomePage, goToRegisterAddressPage } from '../routes/coordinator'

const loginOrSignUp = async (func, body, history, evt, isCompletedData, setShowErrorMessage) => {
    evt.preventDefault()
    if (func === 'signup') {
        if (isCompletedData) {
            try {
                const response = await axios.post(`${BASE_URL}${func}`, body)
                let token = response.data.token
                window.localStorage.setItem('token', token)
                if (response.data.user.hasAddress) {
                    goToHomePage(history)
                } else {
                    goToRegisterAddressPage(history)
                }
            } catch (error) {
                setShowErrorMessage(true)
                // if(error.response)
                console.log(error.response)
            }
        }
    }

}

export default loginOrSignUp