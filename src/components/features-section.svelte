<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { FeaturesSectionStoryblok } from '$types/bloks';
  import Tag from './tag.svelte';
  import Title from './title.svelte';

  export let block: FeaturesSectionStoryblok;
  console.log(block);
</script>

{#if block}
  <section data-theme="light" class="bg-white">
    <div
      class={cn(
        'container mx-auto flex flex-col-reverse lg:flex-row lg:px-container',
        block.image_on_the_right && 'lg:flex-row-reverse'
      )}
    >
      <div class={cn('flex items-center justify-center bg-gray-12/[2%]', 'p-10 xl:p-20')}>
        {#if block.image}
          {@const { src, alt, width, height } = getImageAttributes(block.image)}
          <img {src} {alt} {width} {height} class="" />
        {/if}
      </div>
      <div
        data-theme="light"
        class={cn(
          'flex flex-col justify-between',
          'px-container pb-10 pt-12 xl:p-16',
          'border-b border-gray-12/8',
          block.image_on_the_right
            ? 'lg:border-r lg:border-gray-12/8'
            : 'lg:border-l lg:border-gray-12/8'
        )}
      >
        {#if block.title[0]}
          <Title
            class={'max-w-[528px] pl-0 pr-0 pt-0 lg:p-0 xl:pt-0'}
            alignment="left"
            label={{ content: block.title[0].label, color: 'orange' }}
            title={block.title[0].title}
            description={block.title[0].description}
          />
        {/if}
        {#if block.tags && block.tags?.length > 0}
          <div class="flex max-w-[349px] flex-wrap gap-2">
            {#each block.tags as { tag }}
              <Tag label={tag} />
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}
