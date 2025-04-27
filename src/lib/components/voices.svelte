<script lang="ts">
	import { Animator } from '$lib/services/animations/animator';
	import { slitherMotion } from '$lib/services/animations/motions';
	import { onDestroy, onMount } from 'svelte';

	interface Voices {
		text: string;
		animation: 'wave' | 'curve';
		position: 'left' | 'right';
		size: string;
		autoplay: boolean;
		playing: boolean;
		staticView: boolean;
	}

	let { text, animation, position, size, playing, staticView }: Voices =
		$props();

	let animator: Animator;
	let letters: { char: string; x: number; y: number }[] = $state([]);
	let reverse: boolean = $state(true);
	let width: number = $state(0);
	let height: number = $state(0);
	let firstStart: boolean = $state(true);
	let opacity = $state(0);

	function updateLetters() {
		letters = text.split('').map((char, i, arr) => {
			reverse = position === 'right';
			const index = reverse ? arr.length - 1 - i : i;
			const offset = index * 0.05;
			const r = (animator.progress + offset) % 1;
			const { x, y } = animator.getPositionAt(r);
			return { char, x, y };
		});
	}

	onMount(() => {
		const container = document.getElementById('container');
		const rect = container!.getBoundingClientRect();
		width = rect.width;
		height = rect.height;

		if (animation === 'wave') {
			animator = new Animator(width, height, slitherMotion, 10, 0.03);
		}
	});

	$effect(() => {
		if (!animator) return;

		if (staticView) {
			animator.progress = 0.5;
			updateLetters();
			opacity = 1;
			firstStart = false;
			return;
		}

		if (playing) {
			if (firstStart) {
				const randomDelay = Math.floor(Math.random() * Math.random() * 4000);
				setTimeout(() => {
					opacity = 1;
					animator.start(() => {
						updateLetters();
					});
					firstStart = false;
				}, randomDelay);
			} else {
				animator.start(() => {
					updateLetters();
				});
			}
		} else {
			animator.stop();
			updateLetters();
		}
	});

	onDestroy(() => {
		animator?.stop();
	});
</script>

<div
	id="container"
	style="
		transform: {reverse ? 'scale(-1,1)' : 'scale(1,1)'};
		opacity: {opacity};
		transition: opacity 1s ease;
	"
>
	{#each letters as { char, x, y }, i (i)}
		<span
			style="
				transform: translate({x}px, {y}px)
				{reverse ? 'scale(-1,1)' : 'scale(1,1)'};
				font-size: {size};
				transition: transform 0.01s linear;
			"
		>
			{char}
		</span>
	{/each}
</div>

<style>
	#container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		mask-image: linear-gradient(to right, black 90%, transparent 100%);
		mask-image: linear-gradient(to right, black 90%, transparent 100%);
	}

	span {
		position: absolute;
		white-space: pre;
		font-family: 'Comic Sans MS', 'Comic Sans', cursive;
	}
</style>
