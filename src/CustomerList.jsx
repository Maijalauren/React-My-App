import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomersAdd'

//props  voi olla props tai jos tietää nimen, niin esim. tässä huomio. 
//Jos on useita propseja, menee esim. huomio,
const CustomerList = ({setIsPositive, setShowMessage, setMessage }) => {

    //Komponentin tilan määritys
  //state hook, ja useEffect hook
    const [customers, setCustomers] = useState([])
    const [showCustomers, setshowCustomers] = useState(false)
    const [lisäystila, setlisäystila] = useState(false)


useEffect(() => {
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
  },[] 
)



  return (
<>

    <h1><nobr style={{ cursor: 'pointer' }}
                onClick={() => setshowCustomers(!showCustomers)}>Customers</nobr>

                 {!lisäystila &&<button className="nappi" onClick={() => setlisäystila(true)}>Add new</button>}</h1>

                 {lisäystila && <CustomerAdd setlisäystila={setlisäystila}
                 setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                 />}

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
