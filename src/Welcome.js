import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
    render() {
        if(this.props.name === 'John')
        return (
            <div>
                    <p>Welcome, {this.props.name}!</p>
                    <Age age={16}/>
            </div>

        )

    }
}

export default Welcome 