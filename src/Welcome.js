import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
    render() {
        return (
            <div>
                
                    {!!this.props.name && <p>Welcome, {this.props.name}!</p>}
                    {!this.props.name && <p>Welcome, user!</p>}
                    <Age age={this.props.age}/>
            </div>

        )

    }
}

export default Welcome 