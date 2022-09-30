import Notiflix from "notiflix";
import getRefs from "./refs";
import { resetAll, resetCountryList, resetCountryInfo } from "./reset";

getRefs();

const { countryList, countryInfo } = refs;

export function renderCountries(countries) {
    if (countries.length > 10) {
        resetAll();
        return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }

    if (countries.length > 1) {
        resetCountryInfo();
        renderCountryList(countries);
    }

    if (countries.length === 1) {
        resetCountryList();
        renderCountryInfo(countries[0]);
    }
}

function renderCountryList(countries) {
    const markup = countries.map(({ name, flags }) => {
        return `<li class="country__thumb">
        <img class="country__flag" src="${flags.svg}" alt="flag">
        <p class="country-list__name">${name}</p>
        </li>`;
    }).join('');
    countryList.innerHTML = markup;
}

function renderCountryInfo({ name, capital, population, flags, languages}) {
    const languagesList = languages.map(({name}) => name).join(', ');
    const markup = `<div class="country__card">
                <div class="country__thumb">
                <img class="country__flag" src="${flags.svg}" alt="flag">
                <h2 class="country__name">${name}</h2>
                </div>
                <p class="country__data"><span class="country__data--accent">Capital:</span> ${capital} </p>
                <p class="country__data"><span class="country__data--accent">Population:</span> ${population} </p>
                <p class="country__data"><span class="country__data--accent">Languages:</span> ${languagesList} </p>
            </div>`;
    countryInfo.innerHTML = markup;
}