<script lang="ts">
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';

  export let data;
</script>

{#key data.page.id}
  <DynamicBlock block={data.page.content} />
{/key}
