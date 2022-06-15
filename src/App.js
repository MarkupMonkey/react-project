import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { useState } from "react";

export function App() {

    const [language, setLanguage] = useState('en');
    const handleLanguage = (event) => { setLanguage(event.target.value) };
    return (
        <>
            <select value={language} onChange={handleLanguage}>
                <option value='en'>English</option>
                <option value='it'>Italiano</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </>
    )
}