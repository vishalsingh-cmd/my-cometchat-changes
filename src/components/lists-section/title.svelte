<script lang="ts">
  import { cn } from '$lib/utils';

  let className: undefined | string = undefined;

  export { className as class };
  export let title: string;
</script>

<div class={cn('bg-gray-1 text-xl font-semibold leading-tighter', className)}>
  {title}
</div>
