import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
    state = {
        input: '',
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <>
                <input value={this.state.input} onChange={this.handleInputChange} />
                <Welcome name={this.state.input} />
            </>
        )
    }
}

export default InteractiveWelcome;