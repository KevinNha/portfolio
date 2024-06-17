import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { DARK_THEME, LIGHT_THEME } from '$lib/constants/constants';

export const theme = writable('');

if (browser && localStorage.theme) {
	theme.set(localStorage.theme);
}

theme.subscribe((theme: string) => {
	if (!browser) return;

	if (theme === DARK_THEME) {
		document.documentElement.classList.add(DARK_THEME);
	} else if (theme === LIGHT_THEME) {
		document.documentElement.classList.remove(DARK_THEME);
	}
	localStorage.theme = theme;
});
