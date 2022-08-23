import service from "./config.services"

const getProfileService = () => {
    return service.get("/profile")
}

/* const getProfileService = (id) => {
    return service.get(`/profile/${id}`)
} */



export {
    getProfileService
}