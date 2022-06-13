import React from "react";

class CounterDisplay extends React.Component {

    render() {
        return <div>
            {this.props.count}
        </div>
    }
}

export default CounterDisplay;