import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../actions/action'
import logo from "../logo.svg"
function ThunkComponent() {
  const { counter, loading } = useSelector(state => state.thunk)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Counter : {counter} </h1>
      <div>
        <button onClick={() => dispatch(increment(1))}>++</button>
        <button onClick={() => dispatch(decrement(1))}> - -</button>
      </div>
      {loading && <img src={logo} className="App-logo" />}
    </div>
  )
}

export default ThunkComponent
