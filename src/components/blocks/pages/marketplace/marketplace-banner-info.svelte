<script lang="ts">
  import type { MarketplaceBannerInfoStoryblok } from '$src/types/bloks';
  import TitleAndDescription from '../../titles/title-and-description.svelte';
  import TitleAndIcons from '../../titles/title-and-icons.svelte';
  export let block: MarketplaceBannerInfoStoryblok;
</script>

<div class={'flex flex-col gap-8'}>
  {#each block.info as info}
    {#if info.component === 'title-and-description'}
      <TitleAndDescription block={info} />
    {:else if info.component === 'title-and-icons'}
      <TitleAndIcons block={info} />
    {/if}
  {/each}
</div>
