import { useHistory } from 'react-router-dom'
import { useLayoutEffect} from 'react'
import {gotoSignUpPage} from '../routes/coordinator'

const useUnprotectedPage = () => {
     
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            gotoSignUpPage(history)
        }
    }, [history])
}

export default useUnprotectedPage