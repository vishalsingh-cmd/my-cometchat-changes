<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
  import Button from '../components/buttons/button.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<Button> & {
    children: string;
  };

  export let children: $$Props['children'] = '';
</script>

<div data-theme="light" class="flex items-center gap-10">
  <Button {...$$props}>{children}</Button>
  <Button {...$$props}><Icon size="xs" icon="sun" /> {children}</Button>
  <Button {...$$props}>{children} <Icon size="xs" icon="sun" /></Button>
  <Button {...$$props}><Icon size="xs" icon="sun" /></Button>
</div>
<div data-theme="dark" class="flex items-center gap-10 bg-gray-3">
  <Button {...$$props}>{children}</Button>
  <Button {...$$props}><Icon size="xs" icon="sun" /> {children}</Button>
  <Button {...$$props}>{children} <Icon size="xs" icon="sun" /></Button>
  <Button {...$$props}><Icon size="xs" icon="sun" /></Button>
</div>

<style>
  div {
    padding: 20px;
  }
</style>
