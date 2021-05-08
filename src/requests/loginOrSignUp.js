import { BASE_URL } from '../constants/url'
import axios from 'axios'
import { goToHomePage, goToRegisterAddressPage } from '../routes/coordinator'
import SignUpPage from '../pages/SignupPage/SignUpPage'

const loginOrSignUp = async (func, body, history, evt, isCompletedData) => {
    evt.preventDefault()
    if (func === 'signup') {
        if (!isCompletedData) {
            alert('As senhas não são iguais, tente novamente.')
        }
        try {
            const response = await axios.post(`${BASE_URL}${func}`, body)
            let token = response.data.token
            window.localStorage.setItem('token', token)
            console.log(    'entrei na SignUpPage', response.data.token)
            if (response.data.user.hasAddress) {
                alert("Usuário logado")
                goToHomePage(history)
            } else {
                alert('Usuário criado, agora falta preencher suas informações básicas')
                goToRegisterAddressPage(history)
            }
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
    }

}

export default loginOrSignUp