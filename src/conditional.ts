import { CONDITIONAL_PROP_NAME, STORAGE_CURRENT_LANGUAGE } from "./common/variables";

export const hersoConditional = () => {
    const HERSO_SELECTED_LNG = localStorage.getItem(STORAGE_CURRENT_LANGUAGE);
    const hersoConditionalItems: Element[] = Array.from(document.querySelectorAll('[herso-conditional]'));
    hersoConditionalItems
        .filter(elem => {
            return elem.attributes.getNamedItem(CONDITIONAL_PROP_NAME)?.value !== (HERSO_SELECTED_LNG ?? 'es')
        })
        .forEach(ele => {
            ele.remove()
        })
}

if (typeof window !== "undefined") {
    (window as any).hersoConditional = hersoConditional;
}
