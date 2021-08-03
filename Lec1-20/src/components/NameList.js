import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Ankit', 'Ankit2', 'Ankit3', 'Ankit']
    const persons = [{
        id: 1,
        name: 'Ankit',
        age: 24,
        skill: 'React'
    },{
        id: 2,
        name: 'Ankit2',
        age: 25,
        skill: 'Angular'
    },{
        id: 3,
        name: 'Ankit3',
        age: 26,
        skill: 'Vue'
    }]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
