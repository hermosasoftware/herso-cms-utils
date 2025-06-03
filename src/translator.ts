import { STORAGE_CURRENT_LANGUAGE, TRANSLATOR_PROP_NAME } from "./common/variables";

const HERSO_SELECTED_LNG = localStorage.getItem(STORAGE_CURRENT_LANGUAGE);

export function toggleLanguage(language: string) {
    localStorage.setItem(STORAGE_CURRENT_LANGUAGE, language);
    document.location.reload();
}

const submitType = new RegExp('submit', 'i');

export const hersoTranslator = (dictionary: any) => {
    const langTranslatorPropName = `${HERSO_SELECTED_LNG}-${TRANSLATOR_PROP_NAME}`;
    const lngItems: Element[] = Array.from(document.querySelectorAll(`[${langTranslatorPropName}]`));
    lngItems.forEach(element => {
        const elementTranslationKeyValue = element.attributes.getNamedItem(langTranslatorPropName)?.value;
        const tranlationKeys = elementTranslationKeyValue?.split('.');
        const translation = tranlationKeys?.reduce((acc, key) => {
            if (acc && typeof acc === 'object' && key in acc) {
              return acc[key];
            }
            return undefined;
          }, dictionary[HERSO_SELECTED_LNG ?? '']) ?? elementTranslationKeyValue;
        if (element instanceof HTMLInputElement) {
            if (submitType.test(element.type)) {
                element.value = translation;
            } else {
                element.placeholder = translation;
            }
        } else {
            element.innerHTML = translation;
        }
    });
}

if (typeof window !== "undefined") {
    (window as any).toggleLanguage = toggleLanguage;
    (window as any).hersoTranslator = hersoTranslator;
    (window as any).HERSO_SELECTED_LNG = HERSO_SELECTED_LNG;
}
