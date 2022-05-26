import React from "react";

class ClickCounter extends React.Component {
    state = {
        count: 0
    };

    handleCounterIncrement = (event) => {
        console.log(event)
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    };
    render() {
        return (
            <>
                <button onClick={this.handleCounterIncrement}>Click me!</button>
                <h1>on click count: {this.state.count}</h1>
            </>

        )
    }
}

export default ClickCounter;