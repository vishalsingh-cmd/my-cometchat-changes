<script lang="ts">
  import type { GuideStoryblok } from '$types/bloks';
  import Hero from '$components/guide/hero.svelte';
  import PostLayout from '$components/post/post-layout.svelte';

  export let block: GuideStoryblok;
</script>

{#if block}
  <PostLayout {block}>
    <Hero {block} />
  </PostLayout>
{/if}
