import React from "react";

class ClickTracker extends React.Component {

    state = {
        name: '',
    }

    handlerButtonClick = (event) => {

        this.setState(() => {
            return {
                name : event.target.name,  
            }
        })
    };


    render() {

        return (
            <>
                <button name='One' onClick={this.handlerButtonClick}>One</button>
                <button name='Two' onClick={this.handlerButtonClick}>Two</button>
                <button name='Three' onClick={this.handlerButtonClick}>Three</button>
                <h1>last clicked button: {this.state.name}</h1>
            </>

        )

    }
}


export default ClickTracker