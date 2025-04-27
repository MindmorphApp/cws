<script lang="ts">
	import { content, handleChoice } from '$lib/services/gameStore';
	import Button from '$lib/components/button.svelte';
	import Scene from '$lib/components/scene.svelte';

	async function makeChoice(path: string) {
		await handleChoice(path);
	}
</script>

{#if $content}
	<Scene size="medium" scene={$content.scene} staticPlay={false} />
	{#each $content.choices as choice, index (index)}
		<Button
			text={choice.text}
			size="medium"
			onClick={() => makeChoice(choice.goTo)}
		/>
	{/each}
{:else}
	<p>Loading...</p>
{/if}

<style>
</style>
