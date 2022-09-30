import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import getRefs from './helpers/refs';
import { fetchCountries } from './helpers/fetchCountries';
import { resetAll} from './helpers/reset';
import { renderCountries } from './helpers/renderCountries';

const DEBOUNCE_DELAY = 300;

getRefs();

const { input } = refs;


input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    const searchQuery = e.target.value.trim();
    console.log(searchQuery);

    if (searchQuery === '') {
        resetAll();
        return;
    }

    fetchCountries(searchQuery)
        .then(renderCountries)
        .catch(onFetchError);
}

function onFetchError(error) {
    resetAll();
    return Notiflix.Notify.failure('Oops, there is no country with that name');
}
    