<script lang="ts">
	interface Audio {
		src: string;
		playing: boolean;
	}

	let { src, playing }: Audio = $props();

	let audioElement: HTMLAudioElement;

	$effect(() => {
		if (playing) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	});
</script>

<audio bind:this={audioElement} {src}></audio>
