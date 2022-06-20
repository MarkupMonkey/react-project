import { createStore } from "redux";
import { todoReducer } from "./TodoState";
export const store = createStore(todoReducer)

