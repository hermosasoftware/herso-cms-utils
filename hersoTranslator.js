var selectedLanguage = localStorage.getItem('page_prefered_language')
const { pathname } = window.location;
const sPathname = pathname.toString()

function toggleLanguaje(language) {
    localStorage.setItem('page_prefered_language', language);
    document.location.reload();
}

const inputTag = new RegExp('input', 'i');
const submitType = new RegExp('submit', 'i');

const hersoTranslator = (dictionary) => {
    const filterString = !!document.querySelector(`[herso-conditional="${selectedLanguage}"]`) ? selectedLanguage : "default";
    const languageAttribute = `${selectedLanguage}-herso-translator`;
    
    [...document.querySelectorAll(`[${languageAttribute}]`)].forEach(element => {
        const tr = (dictionary[selectedLanguage][element.attributes[languageAttribute]["value"]] || element.attributes[languageAttribute]["value"])
        if (inputTag.test(element.tagName)) {
            if(submitType.test(element.type)) {
                element.value = tr
            } else {
                element.placeholder = tr
            }
        } else {
            element.textContent = tr
        }
    });

    [...document.querySelectorAll('[herso-conditional]')]
        .filter(elem => {
            return elem.attributes["herso-conditional"]["value"] !== filterString
        })
        .forEach(ele => {
            ele.remove()
        })
}
