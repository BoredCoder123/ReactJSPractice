import React, {useState, useEffect} from 'react'

function HookCounter5() {

    const [count, incrementCount] = useState(0)

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => {incrementCount(count+1)}}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter5
