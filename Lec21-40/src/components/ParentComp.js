import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ankit'
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Ankit'
            })
        }, 2000)
    }

    render() {
        console.log("Parent component render")
        return (
            <div>
                Parent component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
