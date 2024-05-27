import Axios from "axios"


const baseUrl = "https://localhost:7030/api/Customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
    }





export default {getAll}