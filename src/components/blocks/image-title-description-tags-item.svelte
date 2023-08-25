<script lang="ts">
  import { cn } from '$lib/utils';
  import { intersectionObserver } from '$lib/actions/intersection-observer';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { ImageTitleDescriptionTagsItemStoryblok } from '$types/bloks';

  import Badge from '$components/badge.svelte';
  import Media from '$components/media.svelte';

  let className: string | undefined = undefined;
  export { className as class };
  export let block: ImageTitleDescriptionTagsItemStoryblok;

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
    {#if block.image}
      <Media media={block.image} class="mb-12 w-full max-w-[436px]" />
    {/if}
    {#if block.title}
      <p class="font-semibold leading-tight">{block.title}</p>
    {/if}
    {#if block.description}
      <p class="mt-2 font-medium leading-snug tracking-wide opacity-64">{block.description}</p>
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
