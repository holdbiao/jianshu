import axios from 'axios'
import * as constants from './constants'

const loginAction = () => ({
    type: constants.LOGIN
})
export const handleLogin = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
            dispatch(loginAction())
        })
    }
}

export const logout = () => ({
    type: constants.LOGOUT
})