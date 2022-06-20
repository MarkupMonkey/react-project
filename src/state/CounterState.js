const defaultState = 0; // default value of state

const INCREMENT = 'COUNTER@INCREMENT';
const DECREMENT = 'COUNTER@DECREMENT';
const RESET = 'COUNTER@RESET';

// action creator , funioni che tornano oggetti che rappresentano azioni: tipo e carico/ type and payload
export const incrementCounter = (by = 1) => {
    return { type: INCREMENT , payload: by };
};

export const decrementCounter = (by = 1) => {
    return { type: DECREMENT, payload: by };
};

export const resetCounter = () => {
    return { type: RESET };
};

export const CounterReducer = (state = defaultState, action) => { // molto importante definire lo stato di default e assegnarlo come parametro di default per il param di stato del reducer e ritnrnarlo dalla default keyword dello switch
    switch (action.type) { // gestiamo le varie azioni in base al tipo
        case INCREMENT: { return state + action.payload; }

        case DECREMENT: { return state - action.payload; }

        case RESET: { return defaultState; }

        default: { return state }
    }
};