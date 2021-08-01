import React from 'react'

const Hello = () => {
    // return(          This is JSX code
    //     <div className='dummyClass>
    //         <h1>Hello Ankit</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'Hello', className: 'HelloC'}, React.createElement('h1', null, 'Hello Ankit'))      //This is without JSX
}

export default Hello