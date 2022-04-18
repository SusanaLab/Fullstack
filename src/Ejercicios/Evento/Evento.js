import { useState } from "react"


const Evento = (props) => {
    const [value, setValue] = useState(10)
  //Esta es la forma correcta de crear una funcion para un evento
    const handleClick = () => {
      console.log('clicked the button')
      setValue(0)
    }
  
    return (
      <div>
        {value}
los eventos siempre se ejecutan con una funcion
        <button onClick={handleClick}>button</button>
      </div>
    )
  }
  export default Evento