<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import type { LayoutData } from './$types';
  import '../../app.css';
  import scrollDirection from '$lib/stores/scroll-direction';

  import Footer from '$components/footer.svelte';
  // import Topnav from '$components/topnav/topnav.svelte';
  export let data: LayoutData;

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

<QueryClientProvider client={queryClient}>
  <!-- <Topnav data={data.topnav.content} /> -->
  <slot />
  {#if data.footer}
    <Footer data={data.footer} />
  {/if}
</QueryClientProvider>
