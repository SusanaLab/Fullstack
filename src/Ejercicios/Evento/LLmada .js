import { useState } from "react"

 const LLamada = (props) => {
    const [value, setValue] = useState(10)
  
    const hello = (who) => {
      const handler = () => {
        console.log('hello', who)
      }
      return handler
    }
  
    return (
      <div>
        {value}
        <button onClick={hello('world')}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
      </div>
    )
  }
  export default LLamada