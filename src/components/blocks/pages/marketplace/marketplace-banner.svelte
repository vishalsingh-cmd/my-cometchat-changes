<script lang="ts">
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  import { cn } from '$lib/utils';
  export let block;
</script>

<section data-theme="light" class="bg-white">
  <div class="px-container pb-10 pt-10">
    <div class={cn(['grid grid-cols-1 gap-5'], ['md:grid-cols-[0.6fr_0.4fr]'])}>
      <DynamicBlock block={block.carousal[0]} />
      <DynamicBlock block={block.info[0]} />
    </div>
  </div>
</section>
