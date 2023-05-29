<script context="module" lang="ts">
  const files = import.meta.glob('./assets/*.svg', { as: 'raw', eager: true });

  export const icons = Object.entries(files).reduce<Record<string, string>>((acc, [path, file]) => {
    const name = path.replace('./assets/', '').replace('.svg', '');
    acc[name] = file;
    return acc;
  }, {});
</script>

<script lang="ts">
  export let icon: string;

  $: svg = icons[icon];
</script>

{#if svg}
  <i data-icon={icon} aria-hidden="true" {...$$restProps}>
    {@html svg}
  </i>
{/if}
