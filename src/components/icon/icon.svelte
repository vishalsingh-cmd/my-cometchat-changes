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
</script>

{#if icons[icon]}
  <i data-icon={icon} aria-hidden="true" {...$$restProps}>
    <!-- eslint-disable-next-line -->
    {@html icons[icon]}
  </i>
{/if}
