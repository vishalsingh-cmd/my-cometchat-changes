<script lang="ts">
  import Link from '../components/link.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Link> & {
    children: string;
  };

  export let children: $$Props['children'] = '';
</script>

<div data-theme="light">
  <Link {...$$props}>{children}</Link>
</div>
<div data-theme="dark">
  <Link {...$$props}>{children}</Link>
</div>

<style>
  div {
    padding: 20px;
  }
</style>
