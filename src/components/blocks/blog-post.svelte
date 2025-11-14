<script lang="ts">
  import type { BlogPostStoryblok } from '$types/bloks';
  import Hero from '$components/blog-post/hero/hero.svelte';
  // import PostLayout from '$components/post/post-layout.svelte';
  import PostLayoutV2 from '../post/post-layout-v2.svelte';

  export let block: BlogPostStoryblok;
</script>

<!-- {#if block}
  <PostLayout {block}>
    <Hero {block} />
  </PostLayout>
{/if} -->
{#if block}
  <PostLayoutV2 {block}>
    <Hero {block} />
  </PostLayoutV2>
{/if}
