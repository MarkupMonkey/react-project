import { useEffect, useState } from "react";
import Counterbutton from "./CounterButton";

export function ClickCounter({ initialValue = 0, ...props }) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        props.onCounterChange(counter)
    }, [counter, props])

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
