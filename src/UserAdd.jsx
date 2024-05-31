import './App.css'
import React, {useState} from 'react'
import UserService from './services/User'
import Message from './Message'
import md5 from 'md5'


//props  voi olla props tai jos tietää nimen, niin esim. tässä huomio. 
//Jos on useita propseja, menee esim. huomio,
const UserAdd = ({setlisäystila, setIsPositive, setShowMessage, setMessage}) => {

    //komponentin tilan määritys

    const [newFirstname, setNewFirstname] = useState('')
    const [newLastname, setNewLastname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newAccesslevelId, setNewAccesslevelId] = useState(2)
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')

   // onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var newUser = {
      firstname: newFirstname,
      lastname: newLastname,
      email: newEmail,
      accesslevelId: parseInt(newAccesslevelId),
      username: newUsername,
      password: md5(newPassword) // Salataan md5 kirjaston metodilla
  }
  
  console.log(newUser)

  UserService.create(newUser)
  .then(response => {
    if (response.status === 200) {
     setMessage(`Added new User: ${newUser.firstname} ${newUser.lastname}`)
     setIsPositive(true)
     setShowMessage(true)
    
     setTimeout(() => {
      setShowMessage(false)
     }, 5000)

     setlisäystila(false)
  }

    })
    .catch(error => {
      setMessage(error.message)
      setIsPositive(false)
      setShowMessage(true)

      setTimeout(() => {
        setShowMessage(false)
       }, 6000)
    })
  }


return (
  <div id="addNew">
     <h2>User add</h2>

     <form onSubmit={handleSubmit}>
          <div>
              <input type="text" value={newFirstname} placeholder="First name"
                  onChange={({ target }) => setNewFirstname(target.value)} required />
          </div>
          <div>
              <input type="text" value={newLastname} placeholder="Last name"
                  onChange={({ target }) => setNewLastname(target.value)} required />
          </div>
          <div>
              <input type="email" value={newEmail} placeholder="Email"
                  onChange={({ target }) => setNewEmail(target.value)} />
          </div>
          <div>
              <input type="number" value={newAccesslevelId} placeholder="Access level"
                  onChange={({ target }) => setNewAccesslevelId(target.value)} />
          </div>
          <div>
              <input type="text" value={newUsername} placeholder="Username"
                  onChange={({ target }) => setNewUsername(target.value)} />
          </div>
          <div>
              <input type="password" value={newPassword} placeholder="Password"
                  onChange={({ target }) => setNewPassword(target.value)} />
          </div>
          
       <input type='submit' value='save' />
       <input type='button' value='back' onClick={() => setlisäystila(false)} />
     </form>

  </div>
)
}

export default UserAdd