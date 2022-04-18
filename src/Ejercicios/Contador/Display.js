import React from 'react'

export const Display = ({ counter }) => <div>{counter}</div> 

/* Refactorizando solo tenemos una linea

destructurando, aun no es tan buen codigo 
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}
mas codigo haciendo esto
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
 */