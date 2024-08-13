<script lang="ts">
  import { string } from '$lib/strings';

  import type { BulletPointStoryblok } from '$types/bloks';

  import Icon from '$components/icon/icon.svelte';
  import Badge from '$components/badge.svelte';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { cn } from '$lib/utils';

  export let item: BulletPointStoryblok;
</script>

<div class="flex gap-2">
  <Icon icon="star-04" size="xs" class="mt-0.5 flex-shrink-0 pt-px text-brand-9" />
  <div class="flex flex-wrap gap-2">
    {#if item.item}
      {#if typeof item.item != 'string' && item.item.content}
        {#each item.item.content as content}
          <p class={cn(paragraph, 'text-lg font-medium leading-snug tracking-wide opacity-74')}>
            {@html resolver.render(content)}
          </p>
        {/each}
      {:else}
        <p class="text-lg font-medium leading-snug tracking-wide opacity-74">
          {item.item}
        </p>
      {/if}
    {/if}
    {#if item.coming_soon}
      <Badge label={string('coming_soon')} size="small" />
    {/if}
  </div>
</div>
