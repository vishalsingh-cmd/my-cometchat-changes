<script lang="ts">
  import type { DisclaimerStoryblok } from '$types/bloks';

  export let block: DisclaimerStoryblok;
</script>

{#if block}
  <div
    class="my-5 flex flex-col gap-1 rounded-2xl border border-gray-12/[0.04] bg-gray-12/[0.02] p-5 text-md font-medium leading-tight tracking-wide backdrop-blur-[20px] md:my-8 md:gap-2 md:p-4"
  >
    <p class="opacity-74">{block.label}</p>
    <p>{block.description}</p>
  </div>
{/if}
