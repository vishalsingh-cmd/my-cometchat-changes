<script lang="ts">
  import { cva } from 'class-variance-authority';
  import type { ISbRichtext } from '@storyblok/js';

  import { cn } from '$lib/utils';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';

  export let content: ISbRichtext;

  const paragraph = cva([
    'mt-2 mb-6',
    'md:mt-3 md:mb-6',

    'font-normal',
    'text-gray-1',
    '[&_span]:!text-gray-1',
    'tracking-[0.09px]',

    '[&_a]:text-brand-9',
    '[&_a:hover]:text-brand-11',
    '[&_a:active]:text-brand-11',
    '[&_a]:transition-colors',
    '[&_a]:rounded',
    '[&_a]:outline-none',
    '[&_a]:outline-brand-7/0',
    '[&_a:focus-visible]:outline-1',
    '[&_a:focus-visible]:outline-brand-7/100',

    '[&_img]:my-6',
    '[&_img]:md:my-10',
    '[&_img]:rounded-[20px]'
  ]);
</script>

{#if content.content}
  <p class={cn(paragraph(), 'text-lg-richtext leading-[125%]')}>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html resolver.render(content)}
  </p>
{/if}
