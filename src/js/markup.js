import refs from './references.js';

import templateList from '../templates/country-list.hbs';
import templateBox from '../templates/country-box.hbs';
import notify from './notify.js';

const applyTemplate = function (template, content) {
    return template(content);
};

export default function makeMarkup(data = []) {
    const countCountries = data.length;
    let markupHTML = '';

    if (countCountries > 10) {
        notify(
            'To many matches found. Please \nenter a more specific query!',
        );
    } else {
        if (countCountries === 1) {
            markupHTML = applyTemplate(templateBox, data);
        }
        if (countCountries > 1) {
            markupHTML = applyTemplate(templateList, data);
        }
    }

    refs.container.innerHTML = markupHTML;
}
