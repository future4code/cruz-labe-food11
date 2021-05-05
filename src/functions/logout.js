import { goToLoginPage } from "../routes/coordinator"


const logout = (history) => {
  window.localStorage.removeItem('token')
  alert("Logout realizado")
  goToLoginPage(history)
}

export default logout