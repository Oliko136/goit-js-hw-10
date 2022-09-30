const BASE__URL = 'https://restcountries.com/v2'
const FILTER__OPTIONS = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
    
    return fetch(`${BASE__URL}/name/${name}?${FILTER__OPTIONS}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}