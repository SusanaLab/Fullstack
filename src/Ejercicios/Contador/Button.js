import React from 'react'

export const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

/* sin destructuracion  
const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
      {props.text}
    </button>
    )
  } */