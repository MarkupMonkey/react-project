import { useEffect, useState } from "react";
import Counterbutton from "./CounterButton";

export function ClickCounter(props) {
    const [counter, setCounter] = useState(0);

    const handleCounterIncrement = () => {
        setCounter(state => state + 1)
    };

    const handlerCounterReset = () => {
        setCounter(0)
    }
    useEffect(() => {
        props.onCounterChange(counter);
    }, [counter, props])

    return (
        <>
            <Counterbutton childClick={handleCounterIncrement} />
            <button onClick={handlerCounterReset}>Reset</button>
            <h1>on click count: {counter}</h1>
        </>
    )
}
