<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../../app.css';
  import Topnav from '$components/topnav/topnav.svelte';
  import Footer from '$components/footer.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';
  import { Toaster } from 'svelte-french-toast';
  import TemplatesHeader from '$bricks/TemplatesHeader.svelte';

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
  {#if data.topnav}
    <Topnav data={data.topnav.content} />
  {/if}

  {#if data.templatesHeaderData}
    <TemplatesHeader />
  {/if}

  <slot />

  {#if data.footer}
    <Footer data={data.footer} />
  {/if}
</QueryClientProvider>
