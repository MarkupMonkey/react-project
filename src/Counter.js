import React from "react";

class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => { // we can pass it an object portion we want update or a callback that recieves the current state and returns the new state
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000);
    }

    render() {
        return (
            <h1>Count: {this.state.count}</h1>
        );
    }
}

export default Counter;