<script lang="ts">
  import Link from '../components/buttons/link.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Link> & {
    children: string;
  };

  export let children: $$Props['children'] = '';
</script>

<div data-theme="light" class="flex items-center gap-10">
  <Link {...$$props}>{children}</Link>
</div>
<div data-theme="dark" class="flex items-center gap-10 bg-gray-3">
  <Link {...$$props}>{children}</Link>
</div>

<style>
  div {
    padding: 20px;
  }
</style>
