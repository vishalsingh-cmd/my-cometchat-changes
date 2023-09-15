<script lang="ts">
  import type { ISbRichtext } from '@storyblok/js';

  import { dev } from '$app/environment';

  import Heading from './heading.svelte';
  import OrderedList from './ordered-list.svelte';
  import Paragraph from './paragraph.svelte';
  import UnorderedList from './unordered-list.svelte';
  import CodeBlock from './code-block.svelte';

  import RichTextDynamicBlock from '$components/blocks/rich-text/rich-text-dynamic-block.svelte';

  export let block: ISbRichtext;

  const map = {
    heading: Heading,
    ordered_list: OrderedList,
    bullet_list: UnorderedList,
    paragraph: Paragraph,
    code_block: CodeBlock
  };

  const component = block.type && block.type in map ? map[block.type as keyof typeof map] : null;
  const isBlok = block.type === 'blok';

  if (!component && !isBlok && dev) {
    console.error('Uncaught component:', block);
  }
</script>

{#if component}
  <svelte:component this={component} content={block} {...$$restProps} />
{/if}

{#if isBlok}
  {#each block.attrs.body as b}
    <RichTextDynamicBlock block={b} />
  {/each}
{/if}
