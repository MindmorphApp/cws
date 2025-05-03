<script lang="ts">
	import Image from './image.svelte';
	import Voices from './voices.svelte';
	import Audio from './audio.svelte';
	import Play from '$lib/components/play.svelte';
	import type { Scene } from '$lib/types';

	interface Card {
		scene: Scene;
		staticPlay: boolean;
	}

	let { scene, staticPlay = true }: Card = $props();

	let isPlaying = $state(false);

	function togglePlay() {
		isPlaying = !isPlaying;
	}
</script>

<Audio src={scene.sound} playing={isPlaying} />
<div class="container">
	{#if scene.image.background}
		<div class="layer background">
			<Image src={scene.image.background} size="100%" playing={isPlaying} />
		</div>
	{/if}
	<div class="layer voices">
		{#each scene.voices as voice, index (index)}
			<span class="voice {voice.position}">
				<Voices
					text={voice.text}
					animation={voice.animation}
					position={voice.position}
					size="var(--font-size)"
					playing={isPlaying}
					staticView={false}
				/>
			</span>
		{/each}
	</div>
	<div class="layer character">
		<Image src={scene.image.character} size="100%" playing={isPlaying} />
	</div>
	{#if !staticPlay}
		<div class="layer play">
			<Play icon="play" onClick={togglePlay} play={false} />
		</div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.layer {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.background {
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.voices {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		top: 30%;
		width: 100%;
		height: 50%;
		z-index: 2;
	}

	.voice {
		flex: 0 0 45%;
		height: 100%;
	}

	.left {
		order: 0;
	}

	.right {
		order: 1;
	}

	.character {
		left: 10%;
		width: 80%;
		height: 50%;
		bottom: 0%;
		z-index: 3;
	}

	.play {
		width: 100%;
		height: 100%;
		z-index: 4;
	}
</style>
