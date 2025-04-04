import { writable } from 'svelte/store';
import { fetchContent } from '$lib/fetchContent';
import type { GameContent } from '$lib/types';

export const content = writable<GameContent | null>(null);
export const currentPath = writable<string>('/content/01_03_01.json');

export async function loadContent(
	path: string,
	fetchFn: typeof fetch = fetch
): Promise<void> {
	currentPath.set(path);
	const data = await fetchContent(path, fetchFn);
	content.set(data);
}

export async function loadBeginningContent(
	fetchFn: typeof fetch = fetch
): Promise<void> {
	await loadContent('/content/01_03_01.json', fetchFn);
}

export async function handleChoice(
	next: string,
	fetchFn: typeof fetch = fetch
): Promise<void> {
	await loadContent(next, fetchFn);
}
