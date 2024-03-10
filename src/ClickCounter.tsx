import React, { useState } from 'react'

export const ClickCounter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={() => setCounter(counter + 1)}>ClickCounter {counter}</button>
    )
}
