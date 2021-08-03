import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ankit'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA didMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
