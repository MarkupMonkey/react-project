import React from "react";

class Age extends React.Component {
    render() {
        if(this.props.age >= 18 && this.props.age <= 65){
               return (
            <div>
                {!!this.props.age && <p>Your age is {this.props.age}</p>}
            </div>

        )
        }
     
    }
}

export default Age;