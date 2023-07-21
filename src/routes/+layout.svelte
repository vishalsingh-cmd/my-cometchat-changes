<script lang="ts">
  import '../app.css';
  import Topnav from '$components/topnav/topnav.svelte';
  import Footer from '$components/footer.svelte';

  export let data;
</script>

<Topnav data={data.topnav.content} />
<slot />
{#if data.footer}
  <Footer data={data.footer} />
{/if}
