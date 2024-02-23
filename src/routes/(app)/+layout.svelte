<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  import '../../app.css';
  import Topnav from '$components/topnav/topnav.svelte';
  import Footer from '$components/footer.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';
  import { Toaster } from 'svelte-french-toast';

  export let data;

  let scrollY = 0;
  let scrollYPrev = 0;

  $: {
    if (Math.abs(scrollY - scrollYPrev) > 20) {
      scrollDirection.set(scrollY > scrollYPrev ? 'down' : 'up');
    }
    scrollYPrev = scrollY;
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        refetchOnWindowFocus: false
      }
    }
  });
</script>

<svelte:window bind:scrollY />

<Toaster />

<QueryClientProvider client={queryClient}>
  <Topnav data={data.topnav.content} />
  <slot />
  {#if data.footer}
    <Footer data={data.footer} />
  {/if}
</QueryClientProvider>
