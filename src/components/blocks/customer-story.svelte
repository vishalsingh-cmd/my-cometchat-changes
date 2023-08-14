<script lang="ts">
  import { industries } from '$lib/stores/industries';

  import type { CustomerStoryStoryblok } from '$types/bloks';

  import Hero from '$components/customer-story/hero.svelte';
  import PostLayout from '$components/post/post-layout.svelte';

  export let block: CustomerStoryStoryblok;
</script>

{#if block}
  <PostLayout {block}>
    <Hero {block} industries={$industries} />
  </PostLayout>
{/if}
