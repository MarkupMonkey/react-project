import React from "react";

export class TodoList extends React.Component {

    state = {
        todo: []

    };

    saveInput = (event) => {
        this.setState({ input: event.target.value });

    };

    addNewItem = (event) => {

        let { todo, input } = this.state;
        event.preventDefault()
        document.querySelector('form').reset()
        todo.push(input)
        this.setState({input: ''});
        console.log(todo)

    }

    render() {
        return (
            <>
                <h3>Me To Do</h3>

                <form>
                    <input onChange={this.saveInput} />
                    <button onClick={this.addNewItem}>Add item </button>
                </form>
                <ul>
                    {this.state.todo.map((item, index) => {
                        return <li key={index}> {item}</li>
                    })}
                </ul>
            </>

        )
    }
}