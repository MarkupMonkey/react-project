import React from "react";

class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => { // we can pass it an object portion we want update or a callback that recieves the current state and returns the new state
                return {
                    count: state.count + (this.props.incrementBy),
                }
            })
        }, this.props.timeout);
    }

    render() {
        return (
            <h1>Count: {this.state.count}</h1>
        );
    }
}

Counter.defaultProps={
    initialValue: 0,
    timeout: 1000,
    incrementBy: 1
}

export default Counter;