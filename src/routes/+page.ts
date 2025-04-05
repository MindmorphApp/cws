import type { PageLoad } from './$types';
import {
	loadBeginningContent,
	content,
	currentPath
} from '$lib/services/gameStore';
import { get } from 'svelte/store';

export const load: PageLoad = async ({ fetch }) => {
	await loadBeginningContent(fetch);

	// Get latest values from the stores
	const value = get(content);
	const pathValue = get(currentPath);

	return {
		content: value,
		currentPath: pathValue
	};
};
