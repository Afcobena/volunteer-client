import service from "./config.services"

const getCollaborateService = () => {
    return service.get("/proposal")
}


export {
    getCollaborateService
}