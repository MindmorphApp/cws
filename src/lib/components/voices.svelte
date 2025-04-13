<script lang="ts">
	import { Animator } from '$lib/services/animations/animator';
	import { slitherMotion } from '$lib/services/animations/motions';
	import { onDestroy } from 'svelte';

	interface Voices {
		text: string;
		animation: 'wave' | 'curve';
		position: 'left' | 'right';
		size: string;
		autoplay: boolean;
		playing: boolean;
	}

	let { text, animation, position, size, autoplay, playing }: Voices = $props();

	let animator: Animator;
	let letters: { char: string; x: number; y: number }[] = $state([]);
	let reverse = true;
	let width = $state(0);
	let height = $state(0);

	function updateLetters() {
		letters = text.split('').map((char, i, arr) => {
			if (position === 'left') {
				reverse = true;
			}
			const index = reverse ? arr.length - 1 - i : i;
			const offset = index * 0.05;
			const r = (animator.progress + offset) % 1;
			const { x, y } = animator.getPositionAt(r);
			return { char, x, y };
		});
	}

	$effect(() => {
		const container = document.getElementById('container');
		const rect = container!.getBoundingClientRect();
		width = rect.width;
		height = rect.height;
		console.log(width, height);
		if (animation === 'wave') {
			animator = new Animator(width, height, slitherMotion, 10, 0.03);
		}

		if (autoplay || playing) {
			animator.start(() => {
				updateLetters();
			});
		} else {
			// If static: only compute once
			letters = text.split('').map((char, i) => {
				const r = i / (text.length - 1 || 1);
				const { x, y } = animator.getPositionAt(r);
				return { char, x, y };
			});
		}
	});

	onDestroy(() => {
		animator?.stop();
	});
</script>

<div
	id="container"
	style="position: relative; width: 50%; height: 100dvh; transform: scale(-1,1);"
>
	{#each letters as { char, x, y }, i (i)}
		<span
			style="transform: translate({x}px, {y}px) scale(-1, 1); font-size: {size};"
		>
			{char}</span
		>
	{/each}
</div>

<style>
	span {
		position: absolute;
		transition: transform 0.01s linear;
		white-space: pre;
	}
</style>
