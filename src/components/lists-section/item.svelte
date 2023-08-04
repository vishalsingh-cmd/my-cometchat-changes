<script lang="ts">
  import { string } from '$lib/strings';

  import type { BulletPointStoryblok } from '$types/bloks';

  import Icon from '$components/icon/icon.svelte';
  import Badge from '$components/badge.svelte';

  export let item: BulletPointStoryblok;
</script>

<div class="flex gap-2">
  <Icon icon="star-04" size="xs" class="flex-shrink-0 pt-px text-brand-9" />
  <div class="flex flex-wrap gap-y-2">
    <p class="text-lg font-medium leading-snug tracking-wide opacity-74">
      {item.item}
    </p>
    {#if item.coming_soon}
      <Badge label={string('coming_soon')} size="medium" />
    {/if}
  </div>
</div>
