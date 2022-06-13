import { useEffect } from "react";
import { useCounter } from "./useCounter";

export function ClickCounter({ initialValue = 0}) {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    useEffect(() => {
        console.log(`counter is mounted`)
        return () => {
            console.log(`counter is about to be unmount`)
        }
    }, [])

    useEffect(() => {
        console.log(`The counter is now ${counter}`)
        return () => {
            console.log(`the counter was ${counter}`)
        }
    }, [counter])
    return (
        <>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>Reset</button>

            <h2>Click counter: {counter}</h2>
        </>
    )
}