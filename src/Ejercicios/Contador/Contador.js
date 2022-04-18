import { useState } from 'react'
import { Display } from './Display'
import { Button } from './Button'

const Contador = () => {
    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
  
    return (
      <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
    )
}

export default Contador
// setCounter es una referencia a una función que se puede usar para cambiar el estado .
//setTimeout para especificar que el valor del contador de estado se incremente en un segundo:
/*   const handleClick = () => {
    console.log('clicked')
  } 
  tiempo en el que se ejecuta la funcion
   setTimeout(
    () => setCounter(counter + 1),
    1000
  ) 
  asi pueden tenerse los eventos en una variable, buena practica
    const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)
  esta es otra opcion 
    <button onClick={() => setCounter(0)}> 


  
  */