import React from 'react'

// function Greet(){
//     return <h1>Hello Ankit</h1>
// }
// Props are immutable

export const Greet = ({name, heroName}) => {
    // console.log(props)
    // const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>      
            {/* {props.children} */}
        </div>
    )
}

// export default Greet