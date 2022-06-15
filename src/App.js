import React from "react";
import { CarDetails } from './components/CarDetails';

export function App() {

  return (
    <>
      <CarDetails initialData={{ model: 'Celica', year: 2006, color: 'black' }} />
    </>
  )
}