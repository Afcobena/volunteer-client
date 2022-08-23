import axios from 'axios'

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`
})

//interceptor: interceptar laa llamada y agregar el token
service.interceptors.request.use((config) => {

    // ? Buscar el token
    const authToken = localStorage.getItem("authToken")

    // ? Agrega el token al Request
    if (authToken) {
        config.headers = {
            authorization: `Bearer ${authToken}`
        }
    }

    return config
}) 
// al poner el interceptor en config y exportarlo a los demás services, ahora siempre les estaré pasando el Token.

export default service