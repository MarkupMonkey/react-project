import React from "react";
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
                    <Counter initialValue={-222} incrementBy={2} timeout={22}/>
                </div>

            </>
        )
    }
}

export default Data;