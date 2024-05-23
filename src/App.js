import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'


const App = () => {

//App komponentin tila
const [showLaskuri, setshowLaskuri] = useState(false)

const huomio = () => {
  alert ("Huomio!")
}


  return (
    <div className="App">

      <h1>Moikka reactista!</h1>

 
      {showLaskuri && <Laskuri huomio = {huomio} />}

      {showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="terveyhdys app komponentista " />

    </div>
  )
}

export default App
