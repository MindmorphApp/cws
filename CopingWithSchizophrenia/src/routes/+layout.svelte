<script lang='ts'>
    import { _ , locale } from 'svelte-i18n';
    
    
    let { children } = $props();
    const switchLanguage = (lang: string) => {
        locale.set(lang);
    };

</script>

<!-- Here we can add common UI, that will be used by different components-->


<!-- Example -->
<nav>
    <a href="/">{$_('nav.home')}</a>
</nav>

<button onclick={() => switchLanguage('en')}>English</button>
<button onclick={() => switchLanguage('de-ch')}>Deutsch</button>


{@render children()}
