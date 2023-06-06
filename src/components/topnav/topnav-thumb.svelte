<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { AssetStoryblok } from '$types/bloks';

  export let image: AssetStoryblok | undefined;
  export let title: string;
  export let publishedAt: string;
  export let publishedBy: string;
  export let href: string;

  let className: string | undefined = undefined;
  export { className as class };
</script>

<a {href} class={cn('group flex items-center gap-4', className)}>
  {#if image?.filename}
    {@const { src, alt, width, height } = getImageAttributes(image, { size: [64 * 2, 64 * 2] })}
    <img {src} {alt} {width} {height} class="h-16 w-16 flex-shrink-0 rounded-xl bg-gray-2" />
  {:else}
    <div class="h-16 w-16 flex-shrink-0 rounded-xl bg-gray-2" />
  {/if}
  <div>
    <p class="line-clamp-2 text-md font-semibold leading-snug opacity-74 group-hover:opacity-100">
      {title}
    </p>
    <p class="mt-1 text-sm opacity-64 group-hover:opacity-80">
      {publishedAt} · {publishedBy}
    </p>
  </div>
</a>
