<script lang="ts">
  import { cn } from '$lib/utils';
  import { RichTextResolver, type ISbRichtext } from '@storyblok/js';

  export let content: ISbRichtext;

  const resolver = new RichTextResolver();
</script>

<svelte:element
  this={`h${content.attrs.level}`}
  class={cn(
    'pb-2.5 pt-5 md:pb-3 md:pt-10',
    'font-semibold leading-tighter text-gray-12',
    content?.attrs?.level == 2 ? 'text-2xl' : 'text-xl'
  )}
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html resolver.render(content)}
</svelte:element>
