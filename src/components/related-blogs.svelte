<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { RelatedBlogsLinkBlockStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';

  export let block: RelatedBlogsLinkBlockStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'wrap sticky top-[400px] hidden h-fit w-full max-w-[272px] flex-col gap-3 space-y-3 overflow-clip  rounded-3xl p-6 text-black md:block'
    )}
  >
    <h3 class="w-full text-start text-xl font-semibold leading-tight">Related Blog Links</h3>

    {#if block}
      <div class="flex flex-col">
        {#each block.blogs as item, i}
          <a
            href={item.link}
            class="mt-3 flex w-full items-start justify-start gap-3 font-medium text-black hover:text-brand-10 hover:underline"
            >{item.name}</a
          >
        {/each}
      </div>
    {/if}
  </div>
{/if}
