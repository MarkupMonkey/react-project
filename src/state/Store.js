import { createStore } from "redux";
import { CounterReducer } from "./CounterState";

export const store = createStore(CounterReducer)

