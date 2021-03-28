import fetchCountries from './fetch.js';
import refs from './references.js';
import markup from './markup.js';
import notify from './notify.js';
const debounce = require('lodash.debounce');

function searchHandler(event) {
  const searchQuery = this.value.trim()
  markup()
  if (searchQuery !== '') {
    fetchCountries(searchQuery)
      .then(data => markup(data))
      .catch(message => notify(message));
  }
}

refs.search.addEventListener('input', debounce(searchHandler, 500));
