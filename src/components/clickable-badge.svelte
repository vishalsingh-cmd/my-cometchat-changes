<script lang="ts">
  import { cn } from '$lib/utils';
  let className: undefined | string = undefined;
  export { className as class };

  const clickableBadge = cn([
    'inline-flex items-center flex-wrap',
    'font-semibold tracking-wide text-brand-10',
    'bg-brand-10/[0.12]'
  ]);

  export let review: number;
</script>

<div class={cn(clickableBadge, className)}>
  {review}
</div>
