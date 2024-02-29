<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { CenterStaticBannerV01Storyblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let block: CenterStaticBannerV01Storyblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'relative flex h-auto w-full flex-col gap-3 overflow-clip rounded-3xl border border-gray-6 bg-[#F8F8F8] p-8 shadow-md'
    )}
  >
    <h1 class="text-xl font-semibold leading-tight">{block.title}</h1>
    <p class="max-w-xs text-md font-normal">{block.description}</p>
    {#if block.cta_slot}
      <div class="flex gap-3">
        {#each block.cta_slot as button}
          {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
          <Button variant={'primary'} as="a" {href} {target} {rel}>
            {button.label}
          </Button>
        {/each}
      </div>
    {/if}

    {#if block.image}
      <img src={block.image} alt="Comet Chat" class="absolute -right-36 top-24 w-96" />
    {/if}
  </div>
{/if}
