import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("functional button clicked")
    }

    function mouseEnter(){
        console.log("hover over button")
    }

    function mouseLeave(){
        console.log("out of button")
    }

    return (
        <div>
            <button 
                onClick={clickHandler}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >Click</button>
        </div>
    )
}

export default FunctionClick