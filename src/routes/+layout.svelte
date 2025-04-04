<script lang="ts">
	import '../global.css';
	//import { locale, t } from '$lib/i18n';
	//import { get } from 'svelte/store';

	/*
	function toggleLang() {
		const current = get(locale);
		locale.set(current === 'en' ? 'de' : 'en');
	}
    */
	let { children } = $props();
</script>

<!-- Here we can add common UI, that will be used by different components-->

<!-- Example -->
<!--
<nav>
	<a href="/">{$t('navigate')}</a>
</nav>

<button onclick={toggleLang}>{$t('language')}</button>
-->
{@render children()}
