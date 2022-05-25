import React from "react";
class Welcome extends React.Component {
    render() {
        return (
            <div>
                
                    {!!this.props.name && <p>Welcome, {this.props.name}!</p>}
                    {!this.props.name && <p>Welcome, user!</p>}
                    {!!this.props.age && <p>Your age is {this.props.age}</p>}
                    {!this.props.age && <p>Your age is unknown</p>}
                
            </div>

        )

    }
}

export default Welcome 