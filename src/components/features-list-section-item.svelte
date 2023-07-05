<script lang="ts">
  import { cn } from '$lib/utils';
  import { getImageAttributes } from '$lib/storyblok';
  import { string } from '$lib/strings';

  import type { FeaturesListSubItemStoryblok } from '$types/bloks';

  import Icon from './icon/icon.svelte';
  import Tag from './tag.svelte';

  export let i: number;
  export let item: FeaturesListSubItemStoryblok;
</script>

<p
  class={cn(
    'p-5 pl-container text-xl font-semibold leading-tighter',
    i !== 0 && 'border-t-gray-12/[0.08] md:border-t lg:border-t-0 lg:pl-5'
  )}
>
  {item.title}
</p>
{#if item.content.length > 0}
  {#each item.content as contentItem}
    {#if contentItem.items}
      <div class={cn('flex flex-col gap-3 px-container pt-0 lg:pl-5')}>
        {#each item.content[0].items as contentItem}
          <div class="flex items-center gap-2">
            <Icon icon="star-04" size="xs" class="flex-shrink-0 text-brand-9" />
            <p class="text-lg font-medium leading-snug tracking-wide">
              {contentItem.item}
            </p>
            {#if contentItem.coming_soon}
              <Tag label={string('coming_soon')} />
            {/if}
          </div>
        {/each}
      </div>
    {/if}
    {#if contentItem.illustration}
      {@const { src, alt, width, height } = getImageAttributes(contentItem.illustration)}
      <img {src} {alt} {width} {height} />
    {/if}
  {/each}
{/if}
