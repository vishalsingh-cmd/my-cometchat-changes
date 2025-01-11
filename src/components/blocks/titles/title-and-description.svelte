<script lang="ts">
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { cn } from '$lib/utils';
  import type { TitleAndDescriptiontoryblok } from '$types/bloks';
  import clsx from 'clsx';
  export let block: TitleAndDescriptiontoryblok;
</script>

<div class="flex flex-col gap-3">
  <div
    class={clsx(['font-[700] text-black'], {
      ['text-h1']: block.title_size === 'h1',
      ['text-h2']: block.title_size === 'h2',
      ['text-h3']: block.title_size === 'h3',
      ['text-h4']: block.title_size === 'h4',
      ['text-h5']: block.title_size === 'h5'
    })}
  >
    {block.title}
  </div>
  {#if block.description}
    {#if typeof block.description != 'string' && block.description.content}
      {#each block.description.content as content}
        <p class={cn(paragraph, 'leading-normal tracking-wide text-[#727272]')}>
          {@html resolver.render(content)}
        </p>
      {/each}
    {:else}
      <p class="leading-normal tracking-wide text-[#727272]">{block.description}</p>
    {/if}
  {/if}
</div>
