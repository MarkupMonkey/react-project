import React from "react";
import { ClickCounter } from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello"
import InteractiveWelcome from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import Welcome from "./Welcome"
import { TodoList } from "./Todolist";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
import { useState } from "react";

export function App() {
  const [language, setLanguage] = useState('en');
  const [mount, setMount] = useState(true)


  const handleToggleClickCounter = () => {
    setMount(mount => !mount);

  }
  const onCounterChange = (counter) => {
    console.log(`counter is now: ${counter}`)

  }

  function handleLanguageChange() {
    setLanguage(language => (language === 'en' ? 'it' : 'en'))
  }
  return (
    <>
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <Container title="My exercitation app">
          <div className="welcome">
            <Welcome name='John' age={18} />
          </div>
          <Hello />
          <Counter />
          <button onClick={handleToggleClickCounter}>Toggle Click Counter</button>
          {mount && <ClickCounter onCounterChange={onCounterChange} />}
          <ClickTracker />
          <InteractiveWelcome />
          <Login />
          <UncontrolledLogin />
          <TodoList>{() => {
            return (
              <div></div>
            )
          }}
          </TodoList>
          <Sum />
        </Container>

      </div>
    </>
  )
}