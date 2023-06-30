<script lang="ts">
  import Tag from '$components/tag.svelte';
  import { getImageAttributes } from '$lib/storyblok';
  import type { ImageTitleDescriptionTagsItemStoryblok } from '$types/bloks';

  export let block: ImageTitleDescriptionTagsItemStoryblok;
</script>

{#if block}
  <div class="text-lg text-gray-12">
    {#if block.image}
      {@const { src, alt, width, height } = getImageAttributes(block.image)}
      <img {src} {alt} {width} {height} class="mb-12" />
    {/if}
    {#if block.title}
      <p class="font-semibold leading-tight">{block.title}</p>
    {/if}
    {#if block.description}
      <p class="mt-2 font-medium leading-snug tracking-wide opacity-64">{block.description}</p>
    {/if}
    {#if block.tags}
      <div class="mt-5 flex flex-row gap-2">
        {#each block.tags as tag}
          <Tag label={tag.item} />
        {/each}
      </div>
    {/if}
  </div>
{/if}
