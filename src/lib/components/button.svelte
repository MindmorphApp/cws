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
		font-family: 'Comic Sans MS', cursive;
	}

	.btn-small {
		font-size: 12px;
		padding: 5px 10px;
	}

	.btn-medium {
		font-size: 16px;
		padding: 10px 20px;
	}

	.btn-large {
		font-size: 20px;
		padding: 15px 30px;
	}
</style>
