<script lang="ts">
	interface Button {
		text: string;
		onClick?: () => Promise<void>;
	}
	let { text, onClick = async () => {} }: Button = $props();
</script>

<button onclick={onClick}>{text}</button>

<style>
	button {
		width: 100%;
		background: var(--primary-color);
		color: var(--tertiary-color);
		font-weight: 900;
		font-family: var(--font-family-button);
		font-size: var(--font-size);
		padding: var(--font-size-small);
		border: 2px solid var(--tertiary-color);
		border-radius: var(--font-size);
		box-shadow: 0 2px 2px 1px rgb(0 0 0 / 30%);
	}
</style>
