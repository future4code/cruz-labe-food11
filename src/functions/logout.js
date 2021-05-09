import { useHistory } from "react-router"
import { goToLoginPage } from "../routes/coordinator"
// import useProtectedPage from '../hooks/useProtectedPage'
// useProtectedPage()


const logout = (history) => {
  window.localStorage.removeItem('token')
  alert("Logout realizado")
  // history.push('/login')
goToLoginPage(history)

}

export default logout