import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello"
import Welcome from "./Welcome"


class Data extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Welcome name='John' age={18}/>
                    <Hello />
                    <Counter/>
                    <ClickCounter/>
                    <ClickTracker/>
                </div>

            </>
        )
    }
}

export default Data;