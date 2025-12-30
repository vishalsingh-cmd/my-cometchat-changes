<script lang="ts">
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  //   import { paragraph } from '$components/rich-text/rich-text-store';
  //   import { cn } from '$lib/utils';
  import type { RichtextStoryblok } from '$types/bloks';

  export let block: string | RichtextStoryblok;
  //   let className = 'border-r';
  //   export { className as class };
  //   export let type1 = true;
</script>

{#if block}
  {#if typeof block != 'string' && block.content}
    {#each block.content as content}
      <!-- <td
        class={cn(
          paragraph,
          'border-gray-6 p-2 text-lg font-medium leading-snug tracking-wide',
          className
        )}
      > -->
      {@html resolver.render(content)}
      <!-- </td> -->
    {/each}
  {:else}
    <!-- <td class={cn('border-gray-6 p-2 text-lg font-medium leading-snug tracking-wide', className)}> -->
    {block}
    <!-- </td> -->
  {/if}
{/if}
