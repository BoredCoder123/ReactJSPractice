import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({message: 'Thnx for subsciption'})
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=> this.changeMessage()}>subsribe</button>
            </div>
        )
    }
}

export default Message 