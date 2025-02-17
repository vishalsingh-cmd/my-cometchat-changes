<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { RichtextStoryblok } from '$src/types/bloks';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';

  export let block: RichtextStoryblok;
  export let className = '';

  const templatesRichtext = tv({
    base: [
      'font-inter font-[400] text-[18px] text-[#141414]',
      '[&_a]:font-[500] [&_a]:text-[#6852D6] [&_a]:hover:text-[#7965DB] [&_a]:active:text-[#5D49BE]',
      '[&_a]:transition-colors [&_a]:duration-300'
    ]
  });
</script>

{#if block.content}
  <p class={templatesRichtext({ class: className })}>
    {#each block.content as content}
      {@html resolver.render(content)}
    {/each}
  </p>
{/if}
