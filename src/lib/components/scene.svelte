<script lang="ts">
	import '@lottiefiles/lottie-player';
	import type { LottieAsElement } from '$lib/types';

	interface Lottie {
		src: string;
		size: string;
		autoplay: boolean;
		playing: boolean;
	}
	let { src, size, autoplay, playing }: Lottie = $props();

	let lottieEl: LottieAsElement | null = null;

	$effect(() => {
		if (lottieEl) {
			if (playing) {
				lottieEl.play();
			} else {
				lottieEl.pause();
			}
		}
	});
</script>

<lottie-player
	bind:this={lottieEl}
	{src}
	style="

--size: {size}"
	{autoplay}
	loop
	renderer="svg"
	background="transparent"
></lottie-player>

<style>
	lottie-player {
		width: var(--size);
		height: var(--size);
	}

	lottie-player:focus {
		outline: none;
	}
</style>
