/**
 * Credit: https://www.youtube.com/watch?v=uojLJFt9SzY
 */
import React from 'react'

const Child = props => {
  const changeNumber = () => {
    props.changeNumber(Math.random())
  }

  console.log('CHILD BEFORE RENDER')
  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  )
}

export default Child
