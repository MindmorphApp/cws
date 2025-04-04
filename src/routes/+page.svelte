<script lang="ts">
	import '@lottiefiles/lottie-player';
	import type { LottiePlayerElement } from '$lib/types';
	import { content, handleChoice } from '$lib/gameStore';

	async function makeChoice(path: string) {
		await handleChoice(path);
	}

	// Lottie Functionality
	let lottieEl: LottiePlayerElement | null = null;
	let isPlaying: boolean = true;

	function toggleLottie(): void {
		if (!lottieEl) return;

		if (isPlaying) {
			lottieEl.pause();
		} else {
			lottieEl.play();
		}

		isPlaying = !isPlaying;
	}

	function handleKey(e: KeyboardEvent): void {
		if (e.key === 'Enter' || e.key === '') {
			e.preventDefault();
			toggleLottie();
		}
	}

	// Snake Effect Functionality
	let text: string = '';
	let letters: string[] = [];

	$: if ($content?.image?.voices?.[1]) {
		text = $content.image.voices[1].text;
		letters = text.split('');
	}
</script>

{#if $content}
	<div class="snake-container">
		<div class="snake-text">
			{#each letters as letter, i (letter + i)}
				{#if letter === ' '}
					<span
						class="snake-letter space"
						style="

--i:{i}">&nbsp;</span
					>
				{:else}
					<span
						class="snake-letter"
						style="

--i:{i}">{letter}</span
					>
				{/if}
			{/each}
		</div>
	</div>
	<lottie-player
		bind:this={lottieEl}
		src={$content.image.character}
		autoplay
		loop
		renderer="svg"
		background="transparent"
		tabindex="0"
		role="button"
		aria-label="Toggle animation"
		onclick={toggleLottie}
		onkeydown={handleKey}
	></lottie-player>

	{#each $content.choices as choice, index (index)}
		<button onclick={() => makeChoice(choice.goTo)}>{choice.text}</button>
	{/each}
{:else}
	<p>Loading...</p>
{/if}

<style>
	.snake-container {
		position: absolute;
		top: 3.2%;
		left: 56.4%;
		width: 40px;
		height: 140px;
		overflow: hidden;
		transform: rotate(50deg);
	}

	.snake-text {
		position: absolute;
		left: 50%;
		margin: -0.5rem;
		padding: 0%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
		animation: slither-loop 16s ease-out infinite;
	}

	.snake-letter {
		font-size: 0.8rem;
		font-family: 'Comic Sans MS', cursive;
		margin: 0%;
		padding: 0%;
		font-weight: normal;
		color: black;
		animation: wave 4s linear infinite;
		animation-delay: calc(var(--i) * 500ms);
	}

	@keyframes wave {
		0%,
		100% {
			transform: translate(0, 0) rotate(-50deg);
		}

		25% {
			transform: translate(-10px, 0) rotate(-50deg);
		}

		75% {
			transform: translate(10px, 0) rotate(-50deg);
		}
	}

	@keyframes slither-loop {
		0% {
			opacity: 0;
			transform: translateY(-100%);
		}

		10% {
			opacity: 1;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			transform: translateY(100%);
		}
	}

	lottie-player {
		position: absolute;
		top: 30%;
		left: 50%;
		margin-left: -75px;
		margin-top: -75px;
		width: 150px;
		height: 150px;
	}

	lottie-player:focus {
		outline: none;
	}
</style>
