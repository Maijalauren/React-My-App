import axios from "axios"


const baseUrl = "https://localhost:7030/api/Users"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
    }

const create = newUser => {
    return axios.post(baseUrl, newUser)

}

const update = (object) => {
    return axios.put(`${baseUrl}/${object.userId}`, object)
}


export default { getAll, create, update }