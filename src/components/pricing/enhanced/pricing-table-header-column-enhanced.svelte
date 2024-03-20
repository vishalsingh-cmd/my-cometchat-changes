<script lang="ts">
  import type { PricingTableHeaderEnhancedStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  export let price: number | null = null;
  export let column: PricingTableHeaderEnhancedStoryblok;
</script>

{#if column}
  {@const { title, description } = column}
  <div
    use:storyblokEditable={column}
    class="col-span-2 flex flex-col items-center justify-between gap-1.5 pb-8 pt-12 text-gray-12"
  >
    <p class="text-xl/tighter font-semibold">{title}</p>
    <p class="text-lg/snug font-medium tracking-wide opacity-74">
      {#if description}
        {description}
      {:else}
        {#if price === 0}
          Free
        {/if}
        starts at &#36;{price}
      {/if}
    </p>
  </div>
{/if}
