import { useHistory } from "react-router"
import { gotoSignUpPage } from "../routes/coordinator"



const useProtectedPage = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    if (!token) {
        gotoSignUpPage(history)
    }

}
export default useProtectedPage