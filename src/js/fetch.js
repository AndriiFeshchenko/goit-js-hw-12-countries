
const fetchCountries = searchQuery => {
  const query = encodeURI(searchQuery);
  const filter = "?fields=name;capital;languages;population;flag"
  const url = `http://restcountries.eu/rest/v2/name/${query}${filter}`;
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Fetching data: ${response.status}`);
    })
};

export default fetchCountries;
