<script lang="ts">
	import { _, locale } from 'svelte-i18n';

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

<!-- Dolor dolore officia pariatur Lorem ullamco dolore commodo ex tempor pariatur velit. Deserunt dolore proident consectetur aute ut exercitation incididunt voluptate voluptate. Minim elit est nostrud id Lorem. Ut ex cillum sint occaecat aliqua et ad fugiat eu nostrud deserunt. Consectetur veniam exercitation consectetur Lorem irure ullamco amet occaecat incididunt veniam eiusmod non anim consectetur. Culpa fugiat minim cupidatat laboris elit elit consequat exercitation adipisicing sunt excepteur aliqua est. Aliquip magna elit et ut et.
Anim dolore dolor amet fugiat aute in voluptate. Sit eiusmod non nostrud eiusmod dolor cillum quis. Deserunt ut Lorem ex excepteur in dolor amet quis elit ut ea. Amet elit ea incididunt magna proident qui nulla aliqua ad ad velit eiusmod. Ex et exercitation commodo ut Lorem exercitation fugiat nulla dolor amet consectetur. Occaecat officia eu esse sunt culpa nisi ea laborum culpa culpa deserunt eu proident. Amet consequat amet commodo cillum esse veniam voluptate.
Lorem mollit adipisicing labore irure sint excepteur veniam sint ipsum Lorem consectetur ea pariatur. Consequat consequat reprehenderit exercitation Lorem dolore voluptate dolor elit proident excepteur. Lorem nostrud quis magna eiusmod laborum commodo velit qui magna ut enim incididunt nulla. Enim tempor est minim et laboris commodo sit velit.
Ipsum commodo ea do occaecat aliquip consequat. Sint et consectetur laboris in quis et pariatur esse deserunt non officia. Et excepteur nostrud labore ea esse laborum enim tempor aute dolor veniam cillum laborum.
Officia pariatur ex adipisicing ad eiusmod do amet fugiat. Aute consequat irure mollit sit laboris nisi qui anim dolor esse officia velit. Incididunt nostrud incididunt in occaecat laboris officia magna consectetur eu in aliqua. Exercitation consequat eu commodo fugiat. Sint proident laborum sunt sint labore nisi adipisicing Lorem. Ad amet ea deserunt dolore aliqua occaecat qui dolor mollit sunt pariatur. Elit labore officia cupidatat dolore nulla non labore.
Laboris ad nisi tempor pariatur duis tempor in sit sunt enim. Occaecat labore nulla consequat fugiat sunt mollit eu officia. Aliquip cillum elit non et aliqua irure esse.-->
