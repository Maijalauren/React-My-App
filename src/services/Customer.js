import axios from "axios"


const baseUrl = "https://localhost:7030/api/Customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
    }

const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)

}

    const remove = id => {
        return axios.delete(`${baseUrl}/${id}`)

return axios.post(baseUrl, newCustomer)

}
export default { getAll, create, remove }