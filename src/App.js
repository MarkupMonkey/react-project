import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import Hello from "./Hello"
import Welcome from "./Welcome"

class Data extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Welcome name='John' />
                    <Hello />
                    <Counter/>
                    <ClickCounter/>
                </div>

            </>
        )
    }
}

export default Data;