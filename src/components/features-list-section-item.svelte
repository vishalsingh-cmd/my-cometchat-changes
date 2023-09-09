<script lang="ts">
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import type { FeaturesListSubItemStoryblok } from '$types/bloks';

  import Icon from './icon/icon.svelte';
  import Badge from './badge.svelte';
  import Media from './media.svelte';

  export let i: number;
  export let item: FeaturesListSubItemStoryblok;
</script>

<div class={cn('flex h-full flex-col')}>
  <h4
    class={cn(
      ' pb-6 pl-container pt-10 text-xl font-semibold leading-tighter',
      i !== 0 && 'border-t-gray-12/[0.08] px-5 md:border-t md:px-10 lg:border-t-0'
    )}
  >
    {item.title}
  </h4>
  {#if item?.content?.length > 0}
    {#each item.content as contentItem}
      {#if contentItem.items}
        <div class={cn('flex flex-col gap-3 px-container pb-5 pt-2 lg:pl-10')}>
          {#each item.content[0].items as contentItem}
            <div class="flex items-center gap-2">
              <Icon icon="star-04" size="xs" class="flex-shrink-0 text-brand-9" />
              <p class="text-lg font-medium leading-snug tracking-wide">
                {contentItem.item}
              </p>
              {#if contentItem.coming_soon}
                <Badge size="medium" label={string('coming_soon')} />
              {/if}
            </div>
          {/each}
        </div>
      {/if}
      {#if contentItem.illustration}
        <div class="flex h-full flex-col justify-end">
          <Media
            media={contentItem.illustration}
            imageTransformOptions={{ size: [700, 0] }}
            class=" w-full max-w-[480px]"
          />
        </div>
      {/if}
    {/each}
  {/if}
</div>
