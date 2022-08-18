import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:5005/api"
})

const getProposalService = () => {
    return service.get("/proposal")
}

const getProposalDetailsService = (id) => {
    return service.get(`/proposal/${id}`)
}

const addProposalService = (newProposal) => {
    return service.post(`/proposal/${newProposal}`)
}

const deleteProposalService = (id) => {
    return service.delete(`/proposal/${id}`)
}

const updateProposalService = (id, updateProposal) => {
    return service.patch(`/proposal/${id}`, updateProposal)
}


export {
    getProposalService,
    getProposalDetailsService,
    addProposalService,
    deleteProposalService,
    updateProposalService
}