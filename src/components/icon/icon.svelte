<script lang="ts">
  export let icon: string;
</script>

<i data-icon={icon} aria-hidden="true" {...$$restProps}>
  {#await import(`./assets/${icon}.svg?raw`)}
    <div style="width: 24px; height: 24px;" />
  {:then mod}
    {#if mod && mod.default}
      <!-- eslint-disable-next-line -->
      {@html mod.default}
    {/if}
  {/await}
</i>
