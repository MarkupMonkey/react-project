import React from "react";
import { LanguageContext } from "./LanguageContext";

let Strings = {
    en: { SELECTED_LANGUAGE: 'English language choosen' },
    it: { SELECTED_LANGUAGE: 'Hai scelto la lingua italiana' }
}
export const DisplayLanguage = () => {

    return (
        <>
            <LanguageContext.Consumer>
                {language => {
                    return <div>
                        <h1>{Strings[language].SELECTED_LANGUAGE}</h1>
                    </div>
                }}
            </LanguageContext.Consumer>
        </>
    )

}