/**
 * Credit: https://www.youtube.com/watch?v=uojLJFt9SzY
 */
import { useState, useReducer } from 'react'

import Child from './components/Child'

import './App.css'

// Reducer Actions and Handlers
const ACTIONS = {
  SET_STATE: 'set-state',
}

const reducer = (prev, action) => {
  switch (action.type) {
    case ACTIONS.SET_STATE:
      return { ...prev, ...action.payload }
    default:
  }
}

const initialState = {
  number: 101,
}

const App = () => {
  const [localNumber, setLocalNumber] = useState(0)
  const [childNumber, setChildNumber] = useState(0)

  // TODO: Add API call hook here to trigger a useEffect and force an infinite loop

  const [state, dispatch] = useReducer(reducer, initialState)

  const incrementLocal = () => {
    setLocalNumber(state => state + 1)
  }

  const changeChildNumber = number => {
    setChildNumber(number)
  }

  const updateState = () => {
    dispatch({ type: ACTIONS.SET_STATE, payload: { number: 101 } })
  }

  console.log('APP BEFORE RENDER')
  return (
    <div className="App">
      <header className="App-header">
        <Child changeNumber={changeChildNumber} number={childNumber} />
        <button onClick={incrementLocal}>Click to increment local</button>
        <h1>local: {localNumber}</h1>
        <button onClick={updateState}>Click to increment local reducer state</button>
        <h1>local reducer: {state.number}</h1>
      </header>
    </div>
  )
}

export default App
