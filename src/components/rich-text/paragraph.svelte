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

    '[&>a]:text-brand-9',
    '[&>a]:hover:text-brand-7',

    '[&>img]:my-6',
    '[&>img]:md:my-10',
    '[&>img]:rounded-[20px]'
  ]);
</script>

{#if content.content}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <p class={cn(paragraph())}>{@html resolver.render(content)}</p>
{/if}
