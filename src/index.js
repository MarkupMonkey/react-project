import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState";
import { store } from './state/Store';
import { addTodo, removeTodo, editTodo, clearTodos } from './state/TodoState';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//         <App/>
//     </>
// )

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter(3))
store.dispatch(incrementCounter(3))
store.dispatch(decrementCounter(2))
store.dispatch(incrementCounter(1))
store.dispatch(decrementCounter(5))
store.dispatch(resetCounter())
store.dispatch(addTodo({ id: 1, title: 'Html5', completed: true }));
store.dispatch(addTodo({ id: 2, title: 'Css', completed: true }));
store.dispatch(addTodo({ id: 3, title: 'JavaScript', completed: true }));
store.dispatch(addTodo({ id: 4, title: 'Reactjs', completed: false }));
store.dispatch(addTodo({ id: 5, title: 'spesa', completed: false }));
store.dispatch(removeTodo(1));
store.dispatch(removeTodo(2));
store.dispatch(removeTodo(3));
store.dispatch(editTodo(4, {title: 'React', completed: true}));
store.dispatch(editTodo(5, { title: 'spesa', completed: true }));
store.dispatch(clearTodos());