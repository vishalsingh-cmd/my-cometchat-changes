<script lang="ts">
  import type { TutorialStoryblok } from '$types/bloks';

  import Hero from '$components/tutorial/hero.svelte';
  import PostLayout from '$components/post/post-layout.svelte';

  export let block: TutorialStoryblok;
</script>

{#if block}
  <PostLayout {block}>
    <Hero {block} />
  </PostLayout>
{/if}
