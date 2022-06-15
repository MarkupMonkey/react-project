import React from "react";
import {GithubUser} from './GithubUser';
import { Login } from "./Login";

export function App(){

  return (
    <>
      <GithubUser username='markupmonkey'/>
      <Login/>
    </>
  )
}