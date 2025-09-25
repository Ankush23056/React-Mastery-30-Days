import React, { useDeferredValue, useEffect, useRef, useState } from 'react'

const PrevValue = () => {
    let [value, setValue] = useState(0);

    let valueRef = useRef(null);

    useEffect(() => {
        valueRef.current = value;
    }, [value])
    
  return (
    <div>
        <h5>Current Value: {value}</h5>
        <button onClick={() => setValue(value + 5)}>Increment</button>
        <h5>Previous Value: {valueRef.current}</h5>
    </div>
  )
}

export default PrevValue