import React from "react";
class Welcome extends React.Component {
    render() {
        return (
            <div>
                {!!this.props.name && <p>Welcome, {this.props.name}!</p>}
                {!this.props.name && <p>Welcome, user!</p>}
            </div>

        )

    }
}

export default Welcome 