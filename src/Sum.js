import React from "react";

export function Sum({ numbers = [60, 6, 600] }) {
    const sum = numbers.reduce((a, b) => a + b)
    return (
        <h2>sum:{sum}</h2>
    )
}
