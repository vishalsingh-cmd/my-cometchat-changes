<script lang="ts">
  import type { GuideStoryblok } from '$types/bloks';
  import Hero from '$components/guide/hero.svelte';
  // import PostLayout from '$components/post/post-layout.svelte';
  import PostLayoutV2 from '../post/post-layout-v2.svelte';
  export let block: GuideStoryblok;
</script>

{#if block}
  <PostLayoutV2 {block}>
    <Hero {block} />
  </PostLayoutV2>
{/if}
