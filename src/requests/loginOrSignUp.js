import { BASE_URL } from '../constants/url'
import axios from 'axios'
import { goToHomePage, goToRegisterAddressPage } from '../routes/coordinator'

const loginOrSignUp = async (func, body, history, evt, isCompletedData, setShowErrorMessage, setPasswordNotFound, setUserNotFound) => {
    evt.preventDefault()
    if (isCompletedData || func === 'login') {
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
            if (setShowErrorMessage) {
                setShowErrorMessage(true)
            }

            if (error.response.status === 401) {
                setPasswordNotFound(true)
            } else if(error.response.status === 404){
                alert(error.response.data.message)
            }

        }
    }
}

export default loginOrSignUp