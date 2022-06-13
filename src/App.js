import React from "react";
import Counter from "./Counter";
import Hello from "./Hello"
import Welcome from "./Welcome"

class Data extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Welcome name='John' age={16}/>
                    <Hello />
                    <Counter initialValue={6} incrementBy={6} timeout={600}/>
                </div>
            </>
        )
    }
}
  
esport default Data;