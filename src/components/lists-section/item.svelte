<script lang="ts">
  import { string } from '$lib/strings';

  import type { BulletPointStoryblok } from '$types/bloks';

  import Icon from '$components/icon/icon.svelte';
  import Tag from '$components/tag.svelte';

  export let item: BulletPointStoryblok;
</script>

<div class="flex items-center gap-2">
  <Icon icon="star-04" size="xs" class="flex-shrink-0 text-brand-9" />
  <p class="text-lg font-medium leading-snug tracking-wide opacity-74">
    {item.item}
  </p>
  {#if item.coming_soon}
    <Tag label={string('coming_soon')} />
  {/if}
</div>
