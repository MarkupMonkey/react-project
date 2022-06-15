import React from "react";
import FiltredList from './FiltredList';

const list = [
    { name: 'Jhon', age: 27, id: 1 },
    { name: 'Paul', age: 66, id: 2 },
    { name: 'Peter', age: 13, id: 3 },
]
export function App() {
    return (
        <>
            <FiltredList list={list}/>
        </>
    )
}