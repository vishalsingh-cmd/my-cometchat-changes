<script lang="ts">
  import Button from '../components/button.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Button>;

  export let label: $$Props['label'] = undefined;
</script>

<div data-theme="light">
  {#if label}
    <Button {...$$props} {label} />
  {:else}
    <Button {...$$props} />
  {/if}
</div>
<div data-theme="dark">
  {#if label}
    <Button {...$$props} {label} />
  {:else}
    <Button {...$$props} />
  {/if}
</div>

<style>
  div {
    padding: 20px;
  }
</style>
