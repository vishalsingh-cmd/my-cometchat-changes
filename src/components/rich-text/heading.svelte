<script lang="ts">
  import { RichTextResolver, type ISbRichtext } from '@storyblok/js';

  export let content: ISbRichtext;

  const resolver = new RichTextResolver();
</script>

<h3 class="my-3 text-xl font-semibold leading-tighter md:mt-5">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html resolver.render(content)}
</h3>
