import React from "react";

export class TodoList extends React.Component {

    state = {
        todo: []

    };

    saveInput = (event) => {
        this.setState({ input: event.target.value });

    };



    addNewItem = (event) => {
        event.preventDefault()
        let { todo, input } = this.state;
        event.target.elements.input.value = '';
        todo.push(input)
        this.setState({input: ''});
        console.log(todo)
    }

    render() {
        return (
            <>
                <h3>Me To Do</h3>

                <form onSubmit={this.addNewItem}>
                    <input name='input' onChange={this.saveInput} />
                    <button type='submit'>Add item </button>
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