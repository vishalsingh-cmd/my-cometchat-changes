<script lang="ts">
  import { cn } from '$lib/utils';

  export let icon: string;
  export let size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'free' = 'md';
  const sizes = {
    '2xs': 'w-3 h-3',
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    free: 'h-8'
  };
  let className: string | undefined = undefined;
  export { className as class };

  const importIcon = (name: string) => import(`./assets/${name}.svg?raw`);
</script>

<i data-icon={icon} aria-hidden="true" class={cn(sizes[size], className)} {...$$restProps}>
  {#await importIcon(icon)}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" />
  {:then mod}
    {#if mod && mod.default}
      <!-- eslint-disable-next-line -->
      {@html mod.default}
    {/if}
  {/await}
</i>
