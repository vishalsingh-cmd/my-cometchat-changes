<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../../app.css';
  import Footer from '$components/footer.svelte';
  import scrollDirection from '$lib/stores/scroll-direction';
  import { Toaster } from 'svelte-french-toast';
  import TemplatesHeader from '$src/_bricks/TemplatesHeader.svelte';
  import TemplatesFooter from '$src/_bricks/TemplatesFooter.svelte';
  import NewHeader from '$src/_bricks/NewHeader/NewHeader.svelte';

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
  <!-- ------------------------------- header -------------------------------- -->
  {#if data.newHeader}
    <NewHeader block={data.newHeader} />
  {/if}

  {#if data.templatesHeaderData}
    <TemplatesHeader />
  {/if}

  <!-- --------------------------------- main --------------------------------- -->

  <slot />

  <!-- --------------------------------- footer --------------------------------- -->
  {#if data.templatesFooterData}
    <TemplatesFooter data={data.templatesFooterData} />
  {/if}

  {#if data.footer}
    <Footer data={data.footer} />
  {/if}
</QueryClientProvider>
