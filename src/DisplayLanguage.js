import React from "react";
import { LanguageContext } from "./LanguageContext";

let Strings = {
    en: { SELECTED_LANGUAGE: 'English language choosen' },
    it: { SELECTED_LANGUAGE: 'Hai scelto lingua italiana' }
}
export class DisplayLanguage extends React.Component {
    render() {
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
}