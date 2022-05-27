import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
    render() {
        
        return (
            <div>
                    <p>Welcome, {this.props.name}!</p>
                    <Age age={this.props.age}/>
            </div>

        )

    }
}

export default Welcome 