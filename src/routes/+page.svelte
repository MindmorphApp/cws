<script lang="ts">
	import { content, handleChoice } from '$lib/services/gameStore';
	import Scene from '$lib/components/scene.svelte';
	import Voices from '$lib/components/voices.svelte';
	import Button from '$lib/components/button.svelte';

	async function makeChoice(path: string) {
		await handleChoice(path);
	}

	// Card Functionality
	let isPlaying = true;

	function togglePlay() {
		isPlaying = !isPlaying;
	}
</script>

{#if $content}
	<button onclick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
	<Scene
		src={$content.scene.character}
		size="15rem"
		autoplay={false}
		playing={isPlaying}
	/>
	{#each $content.scene.voices as voice, index (index)}
		<Voices
			text={voice.text}
			animation={voice.animation}
			position={voice.position}
			size="2rem"
			autoplay={true}
			playing={isPlaying}
		/>
	{/each}
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
