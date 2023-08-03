<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  import '../app.css';
  import Topnav from '$components/topnav/topnav.svelte';
  import Footer from '$components/footer.svelte';

  export let data;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        refetchOnWindowFocus: false
      }
    }
  });
</script>

<QueryClientProvider client={queryClient}>
  <Topnav data={data.topnav.content} />
  <slot />
  {#if data.footer}
    <Footer data={data.footer} />
  {/if}
</QueryClientProvider>
