<script lang="ts">
	interface Play {
		icon: string;
		onClick: () => void;
		play: boolean;
	}
	let { icon, onClick = () => {}, play }: Play = $props();

	let isPlaying = $state(play);

	function handleClick(): void {
		isPlaying = !isPlaying;
		onClick();
	}
</script>

<button type="button" onclick={handleClick}>
	{#if isPlaying}
		<img src="/icons/{icon}-off.svg" aria-hidden="true" alt={icon} />
	{:else}
		<img src="/icons/{icon}-on.svg" aria-hidden="true" alt={icon} />
	{/if}
</button>

<style>
	button {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: transparent;
		opacity: 0;
	}

	button:focus {
		outline: none;
	}

	button:hover {
		opacity: 0.33;
	}

	img {
		width: 25%;
		height: auto;
	}
</style>
