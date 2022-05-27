import React from "react";

class Age extends React.Component {
    render() {
        // let adultUser = this.props.age >= 18;
        return (
            <div>
                {/* {!!adultUser && <p>Your age is {this.props.age}</p>}
                {!adultUser && <p>You are very young!</p>} */}
                {!!this.props.age && <p>Your age is {this.props.age}</p>}
            </div>

        )
    }
}

export default Age;