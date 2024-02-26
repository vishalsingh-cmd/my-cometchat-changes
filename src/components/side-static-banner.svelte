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
      'wrap sticky top-[80px] hidden h-[300px] w-full max-w-[500px] flex-col gap-3 space-y-3 overflow-clip rounded-3xl border border-gray-4 bg-[#F8F8F8] p-5 text-black shadow-lg lg:block'
    )}
  >
    <h1 class="text-xl font-semibold leading-tight">{block.title}</h1>
    <p class="text-sm font-normal">{block.description}</p>

    {#if block.cta_slot}
      <div class="flex gap-3">
        {#each block.cta_slot as button}
          <Button class="hidden sm:inline-flex" as="a" href={button.link.url}>{button.label}</Button
          >
        {/each}
      </div>
    {/if}

    {#if block.image}
      <img src={block.image} alt="Comet Chat" class="absolute -right-12 top-[200px] w-44" />
    {/if}
  </div>
{/if}
