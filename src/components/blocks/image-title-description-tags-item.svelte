<script lang="ts">
  import { intersectionObserver } from '$lib/actions/intersection-observer';
  import { getImageAttributes } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  import type { ImageTitleDescriptionTagsItemStoryblok } from '$types/bloks';

  import Tag from '$components/tag.svelte';

  let className: string | undefined = undefined;
  export { className as class };
  export let block: ImageTitleDescriptionTagsItemStoryblok;

  let isIntersecting = false;
</script>

{#if block}
  <div
    class={cn(
      'text-lg text-gray-12 transition-all ease-smooth',
      isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-[-200px] opacity-0',
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
      {@const { src, alt, width, height } = getImageAttributes(block.image)}
      <img {src} {alt} {width} {height} class="mb-12 w-full max-w-[436px]" />
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
          <Tag label={tag.tag} />
        {/each}
      </div>
    {/if}
  </div>
{/if}
