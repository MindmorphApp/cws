<script lang="ts">
	interface Button {
		text: string;
		size?: 'small' | 'medium' | 'large';
		onClick?: () => Promise<void>;
	}
	let { text, size = 'medium', onClick = async () => {} }: Button = $props();
</script>

<button class="btn-{size}" onclick={onClick}>{text}</button>

<style>
	button {
		width: 100%;
		font-family: 'Comic Sans MS', cursive;
	}

	.btn-small {
		font-size: var(--font-size-small);
		padding: 5px 10px;
	}

	.btn-medium {
		font-size: var(--font-size);
		padding: 10px 20px;
	}

	.btn-large {
		font-size: var(--font-size-big);
		padding: 15px 30px;
	}
</style>
