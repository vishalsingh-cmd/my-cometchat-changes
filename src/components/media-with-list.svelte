<script lang="ts">
  import ListSectionItem from '$components/list-section/list-section-item.svelte';
  import Media from '$components/media.svelte';
  import type { AssetStoryblok, ListItemStoryblok } from '$types/bloks';

  export let image: AssetStoryblok;
  export let items: ListItemStoryblok[];
  export let accentColour: 'orange' | 'brand' = 'brand';
</script>

<div class="grid grid-cols-1 gap-12 lg:grid-cols-[2fr,1fr] lg:gap-[54px]">
  {#if image}
    <div
      class="order-2 flex max-w-[864px] items-center justify-center overflow-hidden rounded-3xl border border-gray-12/[.04] bg-gray-12/[0.02] py-8 backdrop-blur-[20px] lg:order-1"
    >
      <div class="min-w-[318px] max-w-[555px] lg:w-full">
        <Media
          imageTransformOptions={{ size: [555, 0] }}
          media={image}
          class="w-full object-cover"
        />
      </div>
    </div>
  {/if}

  {#if items && items.length > 0}
    <div
      class="order-1 mt-8 flex flex-col gap-12 md:mt-0 md:grid md:grid-cols-2 md:gap-10 lg:order-2 lg:grid-cols-1 lg:flex-col xl:flex"
    >
      {#each items as item}
        <ListSectionItem accentColour={accentColour || 'brand'} block={item} />
      {/each}
    </div>
  {/if}
</div>
