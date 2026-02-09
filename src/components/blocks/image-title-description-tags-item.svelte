<script lang="ts">
  import { cn } from '$lib/utils';
  import { intersectionObserver } from '$lib/actions/intersection-observer';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getResolvedAsset } from '$lib/image-helper';

  import type { ImageTitleDescriptionTagsItemStoryblok, AssetStoryblok } from '$types/bloks';

  import Badge from '$components/badge.svelte';
  import Media from '$components/media.svelte';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';

  let className: string | undefined = undefined;
  export { className as class };
  export let block: ImageTitleDescriptionTagsItemStoryblok;

  // Resolve image for external URL support
  $: resolvedImage = getResolvedAsset(block, 'image') as AssetStoryblok | undefined;

  let isIntersecting = false;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'text-lg text-gray-12 transition-all ease-smooth',
      isIntersecting
        ? 'translate-y-0 opacity-100 md:translate-x-0'
        : 'translate-y-[200px] opacity-0 md:-translate-x-[200px] md:translate-y-0',
      className
    )}
    use:intersectionObserver={{
      callback: ([e]) => {
        if (e.isIntersecting) {
          isIntersecting = true;
        }
      },
      options: {
        rootMargin: '0px 0px -400px 0px',
        threshold: 0.1
      }
    }}
  >
    {#if resolvedImage}
      <Media
        imageTransformOptions={{ size: [800, 0] }}
        media={resolvedImage}
        class="mb-12 w-full max-w-[436px]"
      />
    {/if}
    {#if block.title}
      <p class="font-semibold leading-tight">{block.title}</p>
    {/if}
    {#if block.description}
      {#if typeof block.description != 'string' && block.description.content}
        {#each block.description.content as content}
          <p class={cn(paragraph, 'mt-2 font-medium leading-snug tracking-wide opacity-64')}>
            {@html resolver.render(content)}
          </p>
        {/each}
      {:else}
        <p class="mt-2 font-medium leading-snug tracking-wide opacity-64">{block.description}</p>
      {/if}
    {/if}
    {#if block.tags}
      <div class="mt-5 flex flex-row flex-wrap gap-2">
        {#each block.tags as tag}
          <Badge size="medium" label={tag.tag} />
        {/each}
      </div>
    {/if}
  </div>
{/if}
