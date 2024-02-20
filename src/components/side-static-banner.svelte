<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { SideStaticBannerStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';

  export let block: SideStaticBannerStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'wrap sticky top-[80px] flex h-fit max-w-[272px] flex-col gap-3 space-y-3 overflow-clip rounded-3xl bg-white p-6 text-black shadow-lg md:block'
    )}
  >
    <h1 class="text-xl font-semibold leading-tight">{block.title}</h1>
    <p class="text-md font-normal">{block.description}</p>

    {#if block.cta_slot}
      <div class="flex gap-3">
        {#each block.cta_slot as button}
          <Button as="a" block={button.link} class="w-fit">{button.label}</Button>
        {/each}
      </div>
    {/if}

    <img src={block.image} alt="Comet Chat" class="absolute -right-16 top-48 w-96" />
  </div>
{/if}
