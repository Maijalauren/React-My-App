import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message'


const App = () => {

//App komponentin tila
const [showLaskuri, setshowLaskuri] = useState(false)
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)


const huomio = () => {
  alert ("Huomio!")
}


  return (
    <div className="App">
      <h1>Moikka reactista!</h1>

      {showMessage && <Message message={message} isPositive={isPositive}/> }


      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>
                

      <Posts/>
      
 
      {showLaskuri && <Laskuri huomio = {huomio} />}

      {showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="terveyhdys app komponentista " />

    </div>
  )
}

export default App
