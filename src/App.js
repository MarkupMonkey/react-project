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
import { Container } from "./Container";
class Data extends React.Component {
    render() {
        return (
            <>
                <Container title="My exercitation app">
                    <div className="welcome">
                        <Welcome  name='John' age={18} />
                    </div>
                    <Hello />
                    <Counter />
                    <ClickCounter />
                    <ClickTracker />
                    <InteractiveWelcome />
                    <Login />
                    <UncontrolledLogin />
                    <TodoList render={()=>{
                      return(
                         <></>
                      )
                    }}>
                     
                    </TodoList>
                </Container>

            </>
        )
    }
}

export default Data;