<script lang="ts">
  import type { TitleImageSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { cn, getLabelInfo } from '$lib/utils';

  import Title from '$components/title.svelte';
  import Media from '$components/media.svelte';

  export let block: TitleImageSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
    class="overflow-x-hidden bg-gray-1 pb-10 pt-12 text-gray-12 md:py-16"
  >
    <div
      class={cn(
        'container relative mx-auto flex flex-col items-start gap-8 px-container lg:items-center lg:gap-20',
        block.image_side === 'left' && 'lg:flex-row-reverse lg:gap-[128px]',
        block.image_side === 'right' && 'lg:flex-row lg:gap-[88px]'
      )}
    >
      {#if block.title[0]}
        {@const { label, title, description, links } = block.title[0]}
        {@const labelInfo = getLabelInfo(label, 'orange')}
        <Title
          label={labelInfo}
          {title}
          description={description ?? undefined}
          buttons={links ?? undefined}
          class={cn(
            'max-w-[528px] p-0 pl-0 pr-0 lg:p-0',
            block.image_side === 'right' && 'lg:pl-[56px]'
          )}
        />
      {/if}
      {#if block.image}
        <div
          class={cn(
            'aspect-square h-full max-h-[640px] w-full overflow-hidden',
            block.image_side === 'center' && 'lg:relative lg:aspect-auto lg:w-[1440px]'
          )}
        >
          <Media media={block.image} class="object-cover" />
        </div>
      {/if}
    </div>
  </section>
{/if}
