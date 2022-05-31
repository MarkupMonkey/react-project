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
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
class Data extends React.Component {
    state = {
        language: 'en',
    }
    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            <>
                <div>
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value='en'>English</option>
                        <option value='it'>Italiano</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        <DisplayLanguage />
                    </LanguageContext.Provider>
                    <Container title="My exercitation app">
                        <div className="welcome">
                            <Welcome name='John' age={18} />
                        </div>
                        <Hello />
                        <Counter />
                        <ClickCounter />
                        <ClickTracker />
                        <InteractiveWelcome />
                        <Login />
                        <UncontrolledLogin />
                        <TodoList>{() => {

                            return (
                                <div></div>
                            )
                        }}
                        </TodoList>
                    </Container>

                </div>
            </>
        )
    }
}

export default Data;