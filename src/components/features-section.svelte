<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { FeaturesSectionStoryblok } from '$types/bloks';
  import Tag from './tag.svelte';
  import Title from './title.svelte';

  export let block: FeaturesSectionStoryblok;
  console.log(block.image_on_the_left);
</script>

{#if block}
  <section data-theme="light" class="  bg-white">
    <div
      class={cn(
        'container mx-auto flex flex-col-reverse px-container lg:flex-row',
        block.image_on_the_left ? '' : 'lg:flex-row-reverse'
      )}
    >
      <div data-theme="light" class="self-center">
        {#if block.image}
          {@const { src, alt, width, height } = getImageAttributes(block.image)}
          <img {src} {alt} {width} {height} class="" />
        {/if}
      </div>
      <div data-theme="light" class="flex flex-col justify-between px-5 pb-10 pt-12 md:p-16">
        {#if block.title[0]}
          <Title
            class={cn('max-w-[528px] pl-0 pr-0 pt-0 lg:p-0 xl:pt-0')}
            alignment="left"
            label={{ content: block.title[0].label, color: 'orange' }}
            title={block.title[0].title}
            description={block.title[0].description}
          />
        {/if}
        {#if block.tags.length > 0}
          <div class="flex flex-wrap gap-2 gap-y-2">
            {#each block.tags as tag}
              <Tag label={tag.item} />
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}
