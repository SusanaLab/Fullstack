import { useState } from "react"
//nunca defina un componente dentro de otro componente
const Controladores = (props) => {
    const [value, setValue] = useState(10)
  
    const setToValue = (newValue) => () => {
      console.log('value now', newValue) // tulostetaan uusi arvo konsoliin
      setValue(newValue)
    }
  //truco para crear controladores de eventos que establezcan el estado del componente como se desee.
    return (
      <div>
        {value}
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>
      </div>
    )
  }
  export default Controladores