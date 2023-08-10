<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { FeaturesSectionStoryblok } from '$types/bloks';

  import Title from '$components/title.svelte';
  import Badge from '$components/badge.svelte';

  export let block: FeaturesSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1">
    <div
      class={cn(
        'container mx-auto flex  flex-col-reverse lg:flex-row ',
        block.image_on_the_right && 'lg:flex-row-reverse'
      )}
    >
      <div
        class="flex w-full items-center justify-center border-b border-gray-12/8 bg-gray-12/[0.02] xl:max-w-[700px]"
      >
        {#if block.image}
          {@const { src, alt, width, height } = getImageAttributes(block.image)}
          <img {src} {alt} {width} {height} />
        {/if}
      </div>
      <div
        class={cn(
          'flex flex-col justify-between gap-10 border-b border-gray-12/8 pb-16 pl-container pr-container lg:pr-32',
          block.image_on_the_right
            ? 'lg:border-r lg:border-gray-12/8'
            : 'lg:border-l lg:border-gray-12/8'
        )}
      >
        {#if block.title && block.title[0]}
          {@const title = block.title[0]}
          <Title
            class="max-w-[528px] pl-0 pr-0"
            alignment="left"
            label={{ content: title.label, color: 'orange' }}
            title={title.title}
            description={title.description}
          />
        {/if}
        {#if block.tags && block.tags?.length > 0}
          <div class="flex max-w-[349px] flex-wrap gap-2">
            {#each block.tags as { tag }}
              <Badge size="medium" label={tag} />
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}
