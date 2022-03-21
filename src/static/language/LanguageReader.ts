import * as dataEn from "./en.json";
import * as dataDe from "./de.json";

import {ELanguage} from "../enums/OGFE-Enums";

type LanguageData = typeof dataEn;

type LanguageKey = keyof LanguageData;

const language: ELanguage = ELanguage.ENGLISH as ELanguage;

function t(id: LanguageKey): string {

    let languageData: LanguageData;

    switch (language) {
        case ELanguage.ENGLISH:
            languageData = dataEn;
            break;
        case ELanguage.GERMAN:
            languageData = dataDe;
            break;
        default:
            throw new Error('hallo')
    }

    return languageData[id];
}