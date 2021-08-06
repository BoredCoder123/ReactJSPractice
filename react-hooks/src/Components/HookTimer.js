import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [time, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() =>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=> prevTimer+1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            {time}
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear timer</button>
        </div>
    )
}

export default HookTimer
