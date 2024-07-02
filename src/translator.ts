import { filter, forEach, get } from 'lodash';
import { 
  TRANSLATOR_PROP_NAME,
  CONDITIONAL_PROP_NAME,
  STORAGE_CURRENT_LANGUAGE
} from './common/variables';


const submitType = new RegExp('submit', 'i');
const selectedLanguage = localStorage.getItem(STORAGE_CURRENT_LANGUAGE)

const toggleLanguaje = (language: string ) => {
  localStorage.setItem(STORAGE_CURRENT_LANGUAGE, language);
  document.location.reload();
}

const hersoTranslator = (dictionary: Object) => {
  const filterString = !!document.querySelector(`[herso-conditional="${selectedLanguage}"]`) ? selectedLanguage : "default";
  const langTranslatorPropName = `[${selectedLanguage}-${TRANSLATOR_PROP_NAME}]`;

  const elementsToTranslate:  NodeListOf<Element> = document.querySelectorAll(`[${langTranslatorPropName}], [${TRANSLATOR_PROP_NAME}]`);

  forEach(elementsToTranslate, (element) => {
    const elementKey = get(element, `attributes.${TRANSLATOR_PROP_NAME}.value`);
    const keyByLang = get(element, `attributes.${langTranslatorPropName}.value`, '');
    const tr: string = get(dictionary, `${selectedLanguage}.${elementKey}`, '') || keyByLang;
      if (element instanceof HTMLInputElement) {
        if(submitType.test(element.type)) {
            element.value = tr
        } else {
            element.placeholder = tr
        }
      } else {
        element.textContent = tr
      }
  })

  const allConditionalElements: NodeListOf<Element> = document.querySelectorAll(CONDITIONAL_PROP_NAME);
  const filteredConditionalElements = filter(allConditionalElements, (elem) => get(elem, 'elem.attributes.herso-conditional.value') === filterString)
  forEach(filteredConditionalElements, (elem) => elem.remove())
}
