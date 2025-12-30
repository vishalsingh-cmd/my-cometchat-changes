<script lang="ts">
  import { industries } from '$lib/stores/industries';

  import type { CustomerStoryStoryblok } from '$types/bloks';

  import Hero from '$components/customer-story/hero.svelte';
  // import PostLayout from '$components/post/post-layout.svelte';
  import PostLayoutV2 from '../post/post-layout-v2.svelte';

  export let block: CustomerStoryStoryblok;
</script>

{#if block}
  <PostLayoutV2 {block}>
    <Hero {block} industries={$industries} />
  </PostLayoutV2>
{/if}
