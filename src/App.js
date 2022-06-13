import React from "react";
import Hello from "./Hello"
import Welcome from "./Welcome"


class Data extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Welcome name={<strong>Marco</strong>} age={19}/>
                    <Hello />
                </div>
          
          </>
     )
}
  
esport default Data;