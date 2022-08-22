import service from "./config.services"

const getCollaborateService = () => {
    return service.get("/collaborate")
}

const addCollaborateService = (id, newCollaborate) => {
    return service.post(`/collaborate/${id}`, newCollaborate)
}


export {
    getCollaborateService,
    addCollaborateService
}