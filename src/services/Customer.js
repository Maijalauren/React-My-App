import axios from "axios"


const baseUrl = "https://localhost:7030/api/Customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
    }

const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)

}

const update = (object) => {
    return axios.put(`${baseUrl}/${object.customerId}`, object)
}


export default { getAll, create, update }