import React from "react";
import Counterbutton from "./CounterButton";

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
                <Counterbutton childClick={this.handleCounterIncrement.bind(this)}/>
                <h1>on click count: {this.state.count}</h1>
            </>

        )
    }
}

export default ClickCounter;