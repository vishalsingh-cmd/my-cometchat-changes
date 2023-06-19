<script lang="ts">
  import '../app.css';
  import Topnav from '$components/topnav/topnav.svelte';
  import PreFooter from '$components/pre-footer/pre-footer.svelte';
  import Footer from '$components/footer.svelte';

  export let data;
</script>

<Topnav data={data.topnav.content} />
<slot />
{#if data.footer?.prefooter}
  <PreFooter
    title={data.footer.prefooter.title}
    description={data.footer.prefooter.description}
    buttons={data.footer.prefooter.buttons}
  />
{/if}
{#if data.footer}
  <Footer data={data.footer} />
{/if}
