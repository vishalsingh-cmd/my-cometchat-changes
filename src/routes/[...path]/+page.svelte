<script lang="ts">
  import DynamicBlock from '$components/blocks/dynamic-block.svelte';

  export let data;
</script>

{#key data.page.id}
  <!-- TODO: remove this after we have heroes -->
  <div class="container mx-auto mt-16 px-container py-8">
    <h1 class="text-3xl">{data.page.name}</h1>
  </div>
  <DynamicBlock block={data.page.content} />
{/key}
