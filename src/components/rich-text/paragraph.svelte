<script lang="ts">
  import { cva } from 'class-variance-authority';
  import { RichTextResolver, type ISbRichtext } from '@storyblok/js';

  import { cn } from '$lib/utils';

  export let content: ISbRichtext;

  const resolver = new RichTextResolver();

  const paragraph = cva([
    'text-lg-richtext',
    'font-medium',
    'text-gray-12',
    'leading-snug',
    'tracking-wide',

    '[&_a]:text-brand-9',
    '[&_a:hover]:text-brand-7',

    '[&_img]:my-6',
    '[&_img]:md:my-10',
    '[&_img]:rounded-[20px]'
  ]);
</script>

{#if content.content}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <p class={cn(paragraph())}>{@html resolver.render(content)}</p>
{/if}
