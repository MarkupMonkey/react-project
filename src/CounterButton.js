import React from "react";

class Counterbutton extends React.Component {

    render() {
        if (this.props.childClick) {
            return (
                <button onClick={this.props.childClick}>Click me!</button>
            )
        }

    }
}

export default Counterbutton