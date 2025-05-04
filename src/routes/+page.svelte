<script lang="ts">
	import { content, handleChoice } from '$lib/services/gameStore';
	import Button from '$lib/components/button.svelte';
	import Scene from '$lib/components/scene.svelte';
	import Text from '$lib/components/text.svelte';

	async function makeChoice(path: string) {
		await handleChoice(path);
	}
</script>

<div class="container">
	<!--Header-->
	<div class="header">
		<div class="logo">
			<img src="./pictures/site/logo.png" alt="Mindmorph logo" />
		</div>
		<div class="menu">
			<button class="info">
				<img src="/icons/info.svg" aria-hidden="true" alt="info button" />
			</button>
		</div>
	</div>
	<!--Body-->
	{#if $content}
		<div class="body">
			<div class="scene">
				<Scene scene={$content.scene} staticPlay={false} />
			</div>
			<div class="text"><Text text={$content.text} /></div>
		</div>
		<!--Footer-->
		<div class="footer">
			{#each $content.choices as choice, index (index)}
				<Button text={choice.text} onClick={() => makeChoice(choice.goTo)} />
			{/each}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<style>
	.container {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template:
			'header' 10%
			'body' 60%
			'footer' 30%;
	}

	/* Header */
	.header {
		height: 100%;
		width: 100%;
		grid-area: header;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.logo,
	.menu {
		margin: var(--font-size-small);
		height: 100%;
		width: auto;
		display: flex;
		align-items: center;
	}

	.logo img {
		max-width: 10rem;
		width: 100%;
		object-fit: contain;
	}

	.menu img {
		height: var(--font-size-big);
		width: var(--font-size-big);
	}

	/* Body */
	.body {
		grid-area: body;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.scene {
		width: 100%;
		flex: 7;
	}

	.text {
		width: 100%;
		flex: 3;
	}

	/* Footer */
	.footer {
		margin: var(--font-size);
		grid-area: footer;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
