import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegister(registrationData) {
    return await axios.post(
        'https://thecrafthut-api.onrender.com/api/register',
        registrationData
    )
}

export async function onLogin(loginData) {
    return await axios.post(
        'https://thecrafthut-api.onrender.com/api/login',
        loginData
    )
}

export async function onLogout() {
    return await axios.get(
        'https://thecrafthut-api.onrender.com/api/logout'
    )
}

export async function fetchProtectedInfo() {
    return await axios.get('https://thecrafthut-api.onrender.com/api/protected')
}