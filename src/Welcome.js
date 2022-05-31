import React from "react";
import Age from "./Age";

function Welcome({name, age}){
    return(
        <div>
        <p>Welcome, {name}!</p>
        <Age age={age}/>
        </div>
    )

}

export default Welcome;

// class Welcome extends React.Component {
//     render() {
        
//         return (
//             <div>
//                     <p>Welcome, {this.props.name}!</p>
//                     <Age age={this.props.age}/>
//             </div>

//         )

//     }
// }

// export default Welcome 