<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
</script>

<div class="flex flex-col gap-8 p-8">
  {#each ['light', 'dark'] as theme}
    <div data-theme={theme} class="rounded-xl border border-gray-5 bg-gray-1 p-6 text-gray-12">
      <h1 class="mb-1 text-3xl font-semibold text-brand-9">Welcome to SvelteKit</h1>
      <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
      </p>
      <p class="mt-4 rounded-md bg-gray-4 p-2 text-orange-9 dark:text-purple-9">
        This text will be a different shade in dark theme
      </p>

      <div class="mt-10 flex gap-2">
        <Icon icon="activity" />
        <Icon icon="activity" class="text-red-9" />
      </div>
    </div>
  {/each}
</div>
