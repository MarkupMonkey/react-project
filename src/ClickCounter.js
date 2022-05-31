import { useState } from "react";
import Counterbutton from "./CounterButton";

export function ClickCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    };

    return (
        <>
            <Counterbutton childClick={handleCounterIncrement} />
            <h1>on click count: {counter}</h1>
        </>
    )
}
