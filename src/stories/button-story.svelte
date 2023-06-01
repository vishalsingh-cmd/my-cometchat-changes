<script lang="ts">
  import Button from '../components/buttons/button.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Button> & {
    children: string;
  };

  export let children: $$Props['children'] = '';
</script>

<div data-theme="light">
  <Button {...$$props}>{children}</Button>
</div>
<div data-theme="dark">
  <Button {...$$props}>{children}</Button>
</div>

<style>
  div {
    padding: 20px;
  }
</style>
