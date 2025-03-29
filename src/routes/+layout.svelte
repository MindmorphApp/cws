<script lang="ts">
	import '../global.css';
	let { children } = $props();
</script>

<!-- Here we can add common UI, that will be used by different components-->

<!-- Example -->
<nav>
	<a href="/">home</a>
</nav>

{@render children()}

<style>
	nav {
		position: fixed;
		width: 150px;
		height: 30px;
		top: 50%;
		left: 50%;
		margin-top: -15px;
		margin-left: -75px;
		background-color: var(--primary-green);
		border: 3px solid darkgray;
		border-radius: 5px;
		box-shadow: inset 0 0 5px 3px black;
	}

	nav:hover {
		color: beige;
		background-color: var(--secondary-green);
		box-shadow:
			inset 0 0 5px 3px black,
			0 0 40px 3px limegreen;
	}

	nav:active {
		color: whitesmoke;
		background-color: var(--tertiary-green);
		box-shadow:
			inset 0 0 2px 1px black,
			0 0 100px 3px limegreen;
	}

	a {
		position: absolute;
		width: 150px;
		height: 30px;
		padding-top: 6px;
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
		text-decoration: none;
		font-style: normal;
		font-weight: 700;
	}

	a:hover,
	a:visited,
	a:active {
		color: inherit;
		text-decoration: none;
	}
</style>
