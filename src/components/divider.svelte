<script lang="ts">
  import { cn } from '$lib/utils';

  let className: string | undefined = undefined;
  export { className as class };

  export let direction: 'horizontal' | 'vertical' = 'horizontal';
</script>

{#if direction === 'vertical'}
  <div class={cn('w-px bg-divider-gradient-vertical', className)} />
{:else}
  <div class={cn('h-px w-full bg-divider-gradient', className)} />
{/if}
