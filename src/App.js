import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello"
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import Welcome from "./Welcome"
import { TodoList } from "./Todolist";
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
                    <InteractiveWelcome/>
                    <Login/>
                    <UncontrolledLogin/>
                    <TodoList/>
                </div>

            </>
        )
    }
}

export default Data;