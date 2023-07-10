<script lang="ts">
  import { getImageAttributes, sanitizeSlug } from '$lib/storyblok';

  import type { AssetStoryblok } from '$types/bloks';

  export let image: AssetStoryblok | undefined = undefined;
  export let title: string | undefined = undefined;
  export let tag: string | undefined = undefined;
  export let link: string | undefined = undefined;
</script>

{#if link}
  <a href={sanitizeSlug(link)} class="group flex flex-col font-semibold text-gray-12">
    {#if image}
      {@const { src, alt, width, height } = getImageAttributes(image)}
      <img
        class="mb-5 aspect-video max-h-[280px] rounded-2xl object-cover"
        {src}
        {alt}
        {width}
        {height}
      />
    {/if}
    {#if title}
      <h3 class="mb-3 text-xl leading-tighter group-hover:text-brand-9">{title}</h3>
    {/if}
    {#if tag}
      <span class="text-lg leading-tight opacity-64">{tag}</span>
    {/if}
  </a>
{/if}
