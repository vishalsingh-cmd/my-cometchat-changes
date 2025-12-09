<script lang="ts">
  import type { TutorialStoryblok } from '$types/bloks';

  import Hero from '$components/tutorial/hero.svelte';
  // import PostLayout from '$components/post/post-layout.svelte';
  import PostLayoutV2 from '../post/post-layout-v2.svelte';

  export let block: TutorialStoryblok;
</script>

{#if block}
  <PostLayoutV2 {block}>
    <Hero {block} />
  </PostLayoutV2>
{/if}
