// src/lib/i18n.ts

import { init, addMessages, locale, _ } from 'svelte-i18n';
import en from '../locales/en.json';
import de from '../locales/de.json';

// Load messages synchronously
addMessages('en', en);
addMessages('de', de);

init({
	fallbackLocale: 'en',
	initialLocale: 'en' // or detect manually
});

export { locale, _ as t };
