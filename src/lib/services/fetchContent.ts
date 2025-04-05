export async function fetchContent(
	path: string,
	fetchFn: typeof fetch = fetch
) {
	const response = await fetchFn(path);
	if (!response.ok) throw new Error(`Could not load ${path}`);
	return await response.json();
}
