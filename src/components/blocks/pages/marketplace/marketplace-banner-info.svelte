<script lang="ts">
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';
  export let block;
</script>

<div class={'flex flex-col gap-8'}>
  {#each block.info as info}
    <DynamicBlock block={info} />
  {/each}
</div>
