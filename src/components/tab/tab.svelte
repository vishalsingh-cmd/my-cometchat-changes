<script lang="ts">
  import TabItem from './tab-item.svelte';

  export let options: {
    id: string;
    label: string;
    isActive: boolean;
  }[];
</script>

<div class="flex">
  {#each options as { id, label, isActive }}
    <TabItem on:click={() => console.log(id)} {id} {label} {isActive} />
  {/each}
</div>
