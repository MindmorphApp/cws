<script lang="ts">
	interface voices {
		text: string;
		animation: string;
		position: string; // 'left' or 'right'
		size: string;
	}

	let { text, animation, position, size }: voices = $props();
	let letters = $state<string[]>([]);

	$effect(() => {
		letters = text.split('');
	});
</script>

<div
	class="container {animation}-container {position}
    {position === 'left' ? 'mirrored' : ''}"
>
	<!-- This wrapper gets flipped back only if the parent is mirrored -->
	<div class="text-wrapper">
		<div class="text {animation}-text">
			{#each letters as letter, i (letter + i)}
				{#if letter === ' '}
					<span
						class="letter {animation}-letter space"
						style="

--i:{i}; --size:{size};"
					>
						&nbsp;
					</span>
				{:else}
					<span
						class="letter {animation}-letter
                        {position === 'left' ? 'mirrored' : ''}"
						style="

--i:{i}; --size:{size};"
					>
						{letter}
					</span>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		background-color: red;
		position: absolute;
		z-index: -1;
		height: 50%;
		overflow: hidden;
	}

	.right {
		left: 50%;
	}

	.left {
		left: 0;
		transform: scaleX(-1); /* Mirror the whole container */
	}

	.left .text-wrapper {
		transform: scaleX(-1); /* Flip the inner content back */
	}

	/* Text Layout */
	.text {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
	}

	/* Letters */
	.letter {
		font-size: var(--size);
		font-family: 'Comic Sans MS', cursive;
		font-weight: normal;
		color: black;
		margin: 0%;
		padding: 0%;
	}

	/* Snake animation styles */
	.snake-container {
		top: 10%;
		width: var(--size);
		transform: rotate(50deg);
	}

	.snake-container.mirrored {
		transform: rotate(-50deg);
	}

	.snake-text {
		animation: slither-loop 16s ease-out infinite;
	}

	.snake-letter {
		margin: 0 calc(var(--size) / 1.4);
		animation: wave 4s linear infinite;
		animation-delay: calc(var(--i) * 400ms);
	}

	.snake-letter.mirrored {
		animation: wave-mirrored 4s linear infinite;
	}

	@keyframes wave {
		0%,
		100% {
			transform: translate(calc(var(--size) / -2), 0) rotate(-50deg);
		}

		25%,
		75% {
			transform: translate(calc(var(--size) / 2), 0) rotate(-50deg);
		}
	}

	@keyframes wave-mirrored {
		0%,
		100% {
			transform: translate(calc(var(--size) / 2), 0) rotate(-50deg);
		}

		25%,
		75% {
			transform: translate(calc(var(--size) / -2), 0) rotate(-50deg);
		}
	}

	@keyframes slither-loop {
		0% {
			opacity: 0;
			transform: translateY(-100%);
		}

		10%,
		90% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			transform: translateY(100%);
		}
	}
</style>
