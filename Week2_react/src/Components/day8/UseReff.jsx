import React from 'react'
import InputFocus from './InputFocus'
import StopWatch from './StopWatch'
import PrevValue from './PrevValue'

const UseReff = () => {
  return (
    <div>
      <h6>Input Focus:</h6>
      <InputFocus />

      <h6>StopWatch(Timer)</h6>
      <StopWatch />

      <h6>Previous Value Tracker:</h6>
      <PrevValue/>
    </div>
  )
}

export default UseReff