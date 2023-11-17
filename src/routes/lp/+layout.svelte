<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  import '../../app.css';
  import scrollDirection from '$lib/stores/scroll-direction';

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
  <slot />
</QueryClientProvider>
