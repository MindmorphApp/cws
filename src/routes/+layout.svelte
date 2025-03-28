<script lang="ts">
	let { children } = $props();
</script>

<!-- Here we can add common UI, that will be used by different components-->

<!-- Example -->
<nav>
	<a href="/">home</a>
</nav>

{@render children()}
