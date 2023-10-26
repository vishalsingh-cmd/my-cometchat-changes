<script lang="ts">
  import type { PricingTableHeaderColumnStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  export let column: PricingTableHeaderColumnStoryblok;
</script>

{#if column}
  {@const { title, description } = column}
  <div use:storyblokEditable={column} class="flex flex-col gap-1.5 pb-8 pt-12 text-gray-12">
    <p class="text-xl/tighter font-semibold">{title}</p>
    <p class="racking-wide text-lg/snug font-medium opacity-74">{description}</p>
  </div>
{/if}
