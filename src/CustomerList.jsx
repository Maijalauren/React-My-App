import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer'
import Customer from './Customer'

//props  voi olla props tai jos tietää nimen, niin esim. tässä huomio. 
//Jos on useita propseja, menee esim. huomio,
const CustomerList = () => {

    //Komponentin tilan määritys
  //state hook, ja useEffect hook
    const [customers, setCustomers] = useState([])
    const [showCustomers, setshowCustomers] = useState(false)


useEffect(() => {
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
  },[] 
)



  return (
<>

    <h2 onClick={() => setshowCustomers(!showCustomers)}>Customers</h2>

   {
    showCustomers && customers && customers.map(c => (
        <Customer key={c.customerId} customer={c} />
      )
    )
  }
   
</>
    )
  }

export default CustomerList
