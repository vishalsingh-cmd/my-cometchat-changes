<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { CenterStaticBannerV02Storyblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';

  export let block: CenterStaticBannerV02Storyblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'flex h-auto w-full gap-3 overflow-clip rounded-2xl bg-gradient-to-r p-8 text-white shadow-md',
      'flex-col sm:from-brand-10 sm:to-brand-12', // Flex direction is column on responsive screens
      'from-brand-12 to-brand-10 sm:flex-row lg:flex-row' // Flex direction is row on large screens
    )}
  >
    <h3 class="w-full text-start text-xl font-semibold leading-tight">{block.title}</h3>
    {#if block.cta_slot}
      <div class="flex gap-3">
        {#each block.cta_slot as button}
          <Button as="a" block={button.link} class="w-fit">{button.label}</Button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
