import React from "react";
import Hello from "./Hello"
import Welcome from "./Welcome"

class Data extends React.Component {
    render() {
        return (
            <>
                <div>

                    <Welcome name='John' age={28}/>          
                    <Hello />
                </div>
          
          </>
     )
}
  
esport default Data;