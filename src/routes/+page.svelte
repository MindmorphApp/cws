<script lang="ts">
	import { content, handleChoice } from '$lib/services/gameStore';
	import Button from '$lib/components/button.svelte';
	import Scene from '$lib/components/scene.svelte';

	async function makeChoice(path: string) {
		await handleChoice(path);
	}
</script>

<div class="container">
	<!--Header-->
	<div class="header">
		<span class="logo">
			<img src="./pictures/site/logo.png" alt="Mindmorph logo" />
		</span>
		<span class="menu">
			<button class="info">
				<img src="/icons/info.svg" aria-hidden="true" alt="info button" />
			</button>
		</span>
	</div>
	<!--Body-->
	{#if $content}
		<div class="body">
			<Scene scene={$content.scene} staticPlay={false} />
		</div>
		<!--Footer-->
		<div class="footer">
			{#each $content.choices as choice, index (index)}
				<Button
					text={choice.text}
					size="medium"
					onClick={() => makeChoice(choice.goTo)}
				/>
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
			'header header header' 20%
			'body body body' 40%
			'footer footer footer' 40% /
			15% 70% 15%;
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
		margin: var(--font-size);
		height: 100%;
		width: auto;
		display: flex;
		align-items: center;
	}

	.logo img {
		max-width: 20rem;
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
