import getRefs from "./refs";

getRefs();

const { input, countryList, countryInfo } = refs;

export function resetAll() {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
}

export function resetCountryList() {
    countryList.innerHTML = '';
}

export function resetCountryInfo() {
    countryInfo.innerHTML = '';
}