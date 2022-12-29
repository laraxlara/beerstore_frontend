import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegister(registrationData) {
    return await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/register`,
        registrationData
    )
}

export async function onLogin(loginData) {
    return await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/login`,
        loginData
    )
}

export async function onLogout() {
    return await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/logout`
    )
}

export async function fetchProtectedInfo() {
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/protected`)
}