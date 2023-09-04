<script lang="ts">
  import { cn } from '$lib/utils';
  import Icon from './icon/icon.svelte';
  let className: undefined | string = undefined;
  export { className as class };

  const clickableBadge = cn(
    'inline-flex items-center flex-wrap gap-',
    'text-sm font-semibold tracking-widest leading-normal text-brand-10',
    'py-1 px-1.5',
    'bg-brand-10/[0.12]',
    'rounded-[10px]'
  );

  export let review: number;
</script>

<div class={cn(clickableBadge, className)}>
  <Icon icon="star-01" size="xs" class="flex-shrink-0 text-brand-9" />
  {review}
</div>
