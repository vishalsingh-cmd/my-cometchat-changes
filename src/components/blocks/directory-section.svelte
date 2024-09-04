<script lang="ts">
  import type { DirectorySectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import BlogPostDirectory from '$components/directory/blog-post-directory.svelte';
  import CustomerStoryDirectory from '$components/directory/customer-story-directory.svelte';
  import TutorialDirectory from '$components/directory/tutorial-directory.svelte';
  import GuideDirectory from '$components/directory/guide-directory.svelte';

  export let block: DirectorySectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 pt-12 text-gray-12 md:pt-20"
  >
    <div class="container mx-auto px-container">
      <div id="articles" class="max-w-[528px] pb-8 font-semibold leading-tighter md:pb-12">
        <p class="mb-2 text-xl text-brand-9 md:mb-3">{block.label}</p>
        <p class="text-3xl">{block.title}</p>
      </div>
      {#if block.content_type === 'tutorial'}
        <TutorialDirectory {block} />
      {:else if block.content_type === 'blog-post'}
        <BlogPostDirectory {block} />
      {:else if block.content_type === 'customer-story'}
        <CustomerStoryDirectory {block} />
      {:else if block.content_type === 'guide'}
        <GuideDirectory {block} />
      {/if}
    </div>
  </section>
{/if}
