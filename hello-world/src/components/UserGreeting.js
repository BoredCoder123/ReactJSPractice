import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        // if(this.state.isLoggedIn){       //Approach 1
        //     return (
        //         <div>Welcome Ankit</div>
        //     )
        // }
        // else{
        //     return (
        //         <div>Welcome guest</div>
        //     )
        // }

        // let message                  //Approach 2
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Ankit</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return (message)

        // return(                         //Apprach 3
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Ankit</div>):
        //     (<div>Welcome Guest</div>)
        // )

        return this.state.isLoggedIn && <div>Welcom Ankit</div>

    }
}

export default UserGreeting
