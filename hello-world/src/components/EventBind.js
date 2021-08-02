import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)    //Option 3 of binding- best way to do it. 
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good bye"
    //     })
    // }
    
    clickHandler = () =>{           //4th approach
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>       {/*Option 1 of binding- can cause performance issues  */}
                {/*<button onClick={() => this.clickHandler()}>Click</button>              {/*Option 2 of binding- can also cause performance issues */}
                <button onClick={this.clickHandler}>Click</button>

                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default EventBind
