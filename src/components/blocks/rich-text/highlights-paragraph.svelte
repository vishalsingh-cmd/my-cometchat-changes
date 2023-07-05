<script lang="ts">
  import type { HighlightsParagraphStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Icon from '$components/icon/icon.svelte';

  export let block: HighlightsParagraphStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class="my-4 flex flex-col gap-6 md:flex-row md:justify-between md:gap-10"
  >
    {#each block.items as item}
      <div class="flex flex-row items-center gap-3">
        <div
          class="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-9/10 text-brand-9"
        >
          <Icon icon={item.icon.toString()} size="sm" class="h-[18px] w-[18px]" />
        </div>
        <div class="flex flex-col gap-[2px] text-lg font-semibold leading-tight text-gray-12">
          <p>{item.title}</p>
          <p class="font-medium opacity-74">{item.subtitle}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}
