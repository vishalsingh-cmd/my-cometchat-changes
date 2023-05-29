{#each ['light', 'dark'] as theme}
  <div data-theme={theme} class="bg-gray-1 p-6">
    <h1 class="text-xl text-brand-9">Welcome to SvelteKit</h1>
    <p class="text-gray-12">
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    <p class="text-orange-9 dark:text-purple-9">
      This text will be a different shade in dark theme
    </p>
  </div>
{/each}
