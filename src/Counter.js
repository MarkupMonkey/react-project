import React from "react";
import CounterDisplay from './CounterDisplay'
class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState((state) => { // we can pass it an object portion we want update or a callback that recieves the current state and returns the new state
                return {
                    count: state.count + (this.props.incrementBy),
                }
            })
            this.displayCount = <h1>count: {this.state.count}</h1>

        }, this.props.timeout);
    }


    componentWillUnmount() {
        if (this._interval) {
            clearInterval(this._interval)
        }
    }

    render() {
        return (
            <>
                {this.state.count <= 11 && <CounterDisplay count={this.displayCount}></CounterDisplay>}
            </>

        );
    }
}

Counter.defaultProps = {
    initialValue: 0,
    timeout: 1000,
    incrementBy: 1
}

export default Counter;