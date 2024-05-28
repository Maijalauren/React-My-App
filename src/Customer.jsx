import './App.css'
import React, {useState} from 'react'

//props  voi olla props tai jos tietää nimen, niin esim. tässä huomio. 
//Jos on useita propseja, menee esim. huomio,
const Customer = ({customer}) => {

    //Komponentin tilan määritys
 
    const [showDetails, setshowDetails] = useState(false)


  return (
    <div className='customerDiv'>

   <h4 onMouseEnter={() => setshowDetails(true)}
     onMouseLeave={() => setshowDetails(false)}
     >
        {customer.companyName}
        
    </h4>

   {showDetails && <div className="customerDetails">

   <h3>{customer.companyName}</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Contact person</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{customer.contactName}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.address}</td>
                            <td>{customer.city}</td>
                            <td>{customer.country}</td>
                        </tr>
                    </tbody>
                </table></div>}
</div>

    )
}

export default Customer