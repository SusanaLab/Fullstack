 import { useState } from "react"


 const Estados = () => {
  
    const [clicks, setClicks] = useState({
        left: 0, right: 0
      })
      const handleLeftClick = () =>
      setClicks({ ...clicks, left: clicks.left + 1 })
    
    const handleRightClick = () =>
      setClicks({ ...clicks, right: clicks.right + 1 })

      const History = (props) => {
        if (props.allClicks.length === 0) {
          return (
            <div>
              the app is used by pressing the buttons
            </div>
          )
        }
      
        return (
          <div>
            button press history: {props.allClicks.join(' ')}
          </div>
        )
      }
      
      const Button = ({ handleClick, text }) => (
        <button onClick={handleClick}>
          {text}
        </button>
      )

    return (
      <div>
        <div>
          {clicks.left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {clicks.right} 
      
        </div>
       
      </div>
    )
  }
  export default Estados 
   /* Misma forma que lo de arriba 
     const [clicks, setClicks] = useState({
      left: 0, right: 0
    })

     const handleLeftClick = () => {
        const newClicks = { 
          ...clicks, 
          left: clicks.left + 1 
        }
        setClicks(newClicks)
      }
      
      const handleRightClick = () => {
        const newClicks = { 
          ...clicks, 
          right: clicks.right + 1 
        }
        setClicks(newClicks)
      }

      Codigo igual funciona
    const handleLeftClick = () => {
      const newClicks = { 
        left: clicks.left + 1, 
        right: clicks.right 
      }
      setClicks(newClicks)
    }
  
    const handleRightClick = () => {
      const newClicks = { 
        left: clicks.left, 
        right: clicks.right + 1 
      }
      setClicks(newClicks)
    } */