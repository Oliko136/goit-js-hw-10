export default function getRefs() {
    const refs = {
        input: document.querySelector('#search-box'),
        countryList: document.querySelector('.country-list'),
        countryInfo: document.querySelector('.country-info'),
    }
    return refs;
}