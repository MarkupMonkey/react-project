import React from "react";

export class TodoList extends React.Component {

    state = {
        todo: []

    };

    saveInput = (event) => {
        this.setState({ input: event.target.value });

    };

    addNewItem = () => {
        let { todo, input } = this.state;
        todo.push(input)
        this.setState({input: ''});
        console.log(todo)

    }

    render() {
        return (
            <>
                <h3>Me To Do</h3>

                <div>
                    <input onChange={this.saveInput} />
                    <button onClick={this.addNewItem}>Add item </button>
                </div>
                <ul>
                    {this.state.todo.map((item, index) => {
                        return <li key={index}> {item}</li>
                    })}
                </ul>
            </>

        )
    }
}