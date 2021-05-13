import { useHistory } from "react-router"
import { goToLoginPage } from "../routes/coordinator"



const useProtectedPage = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    if (!token) {
        goToLoginPage(history)
    }

}
export default useProtectedPage