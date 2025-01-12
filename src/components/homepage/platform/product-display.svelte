<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Media from '$components/media.svelte';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { cn } from '$lib/utils';
  import type { MultilinkStoryblok, AssetStoryblok, RichtextStoryblok } from '$types/bloks';

  export let illustration: AssetStoryblok;
  export let title = '';
  export let description: string | RichtextStoryblok = '';
  export let link: MultilinkStoryblok;
</script>

<div class={cn(['grid max-w-[640px] grid-rows-[1fr_auto] gap-8'], ['sm:grid-rows-2'])}>
  <div class="relative h-full w-full">
    <Media
      class="h-full w-full object-cover"
      imageTransformOptions={{ size: [1200, 0] }}
      media={illustration}
    />
  </div>
  <div class="max-w-[416px] font-sans text-xl text-gray-12">
    <h3 class="mb-1 font-semibold leading-tighter md:mb-2">{title}</h3>
    {#if description}
      {#if typeof description != 'string' && description.content}
        {#each description.content as content}
          <p class={cn(paragraph, 'mb-3 font-medium leading-snug tracking-wide opacity-74')}>
            {@html resolver.render(content)}
          </p>
        {/each}
      {:else}
        <p class="mb-3 font-medium leading-snug tracking-wide opacity-74">{description}</p>
      {/if}
    {/if}
    <GhostButton as="a" href={link.href} target={link.target} rel={link.rel} variant="highlighted">
      {link.label}
    </GhostButton>
  </div>
</div>
