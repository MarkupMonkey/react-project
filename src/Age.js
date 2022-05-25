import React from "react";

class Age extends React.Component {
    render() {
        if (this.props.age >= 18) {
            return (
                <div>
                    {<p>Your age is {this.props.age}</p>}
                </div>

            )
        }

    }
}

export default Age;