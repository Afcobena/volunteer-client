import service from "./config.services"

const getCollaborateDetailsService = (id) => {
    return service.get(`/collaborate/${id}`)
}

const addCollaborateService = (id, newCollaborate) => {
    return service.post(`/collaborate/${id}`, newCollaborate)
}


export {
    getCollaborateDetailsService,
    addCollaborateService
}