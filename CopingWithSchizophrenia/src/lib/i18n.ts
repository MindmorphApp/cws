import { addMessages, init } from 'svelte-i18n';

// Translations JSON Files
import en from './translations/en.json';
import deCh from './translations/de-ch.json';

// The following Languages are available
addMessages('en', en);
addMessages('de-ch', deCh);

init({
	initialLocale: 'de-ch',
	fallbackLocale: 'de-ch'
});
