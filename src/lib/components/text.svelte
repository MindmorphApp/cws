<script lang="ts">
	interface Text {
		text: string;
	}
	let { text }: Text = $props();
</script>

<div>{text}</div>

<style>
	div {
		position: relative;
		background: var(--secondary-background);
		width: 100%;
		height: 100%;
		color: rgb(0 0 0 / 70%);
		font-family: var(--font-family-text);
		font-size: var(--font-size);
		padding: var(--font-size-big);
	}

	div::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -24px;
		width: 0;
		height: 0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		border-top: 25px solid var(--secondary-background);
	}
</style>
