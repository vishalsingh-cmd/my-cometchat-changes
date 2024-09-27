<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
  import { cn } from '$lib/utils';

  import tippy from 'tippy.js';
  export let tooltip;
  export let icon;
  let className = 'relative top-0.5 ml-0.5';
  export { className as class };
</script>

<div
  class={cn(
    'inline-flex h-full w-5 cursor-help items-center self-center hover:text-brand-9',
    className
  )}
  use:tippy={{
    content: `${tooltip}`,
    placement: 'top',
    animation: 'scale'
  }}
>
  <Icon {icon} size="xs" class="hover:text-brand-9" />
</div>
