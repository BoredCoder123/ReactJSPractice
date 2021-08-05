import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count+5)}>Clicked {count} times</button>
            <div>{count}</div>
        </div>
    )
}

export default HookCounter
