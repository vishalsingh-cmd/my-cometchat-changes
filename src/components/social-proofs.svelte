<script lang="ts">
  type Customer = {
    name: string;
    logo: string;
  };

  export let title: string;
  export let customers: Customer[];
</script>

<section
  data-theme="dark"
  class="flex flex-col items-center justify-center gap-8 bg-gray-1 pb-20 pt-16"
>
  <h1 class="text-lg tracking-wide text-gray-12 opacity-54">{title}</h1>
  <div class="flex gap-10 overflow-x-scroll px-10 opacity-50">
    {#each customers as { name, logo }}
      <img alt={name} src={logo} class="max-h-8" />
    {/each}
  </div>
</section>
