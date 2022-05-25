import React from "react";
import Hello from "./Hello"
import Welcome from "./Welcome"

class Data extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Welcome name='John' />
                    <Hello />
                </div>

            </>
        )
    }
}

export default Data;