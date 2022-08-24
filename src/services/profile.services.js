import service from "./config.services"

const getProfileService = () => {
    return service.get("/profile")
}

const getProfileCollabsService = () => {
    return service.get("/profile/collaborates")
}

const deleteProfileProposallService = (id) => {
    return service.delete(`/proposal/${id}`)
}

const updateProfileProposalService = (id, updateProposal) => {
    return service.patch(`/proposal/${id}`, updateProposal)
}


export {
    getProfileService,
    getProfileCollabsService
}