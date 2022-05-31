import { useEffect, useState } from "react";
import Counterbutton from "./CounterButton";

export function ClickCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        console.log(`the counter is now ${counter}`)
    }, [counter])

    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    };

    function handlerCounterReset() {
        setCounter(initialValue)
    }
    return (
        <>
            <Counterbutton childClick={handleCounterIncrement} />
            <button onClick={handlerCounterReset}>Reset</button>
            <h1>on click count: {counter}</h1>
        </>
    )
}
