<script lang="ts">
  import type { DirectorySectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  // import BlogPostDirectory from '$components/directory/blog-post-directory.svelte';
  import BlogPostDirectoryV2 from '$components/directory/blog-post-directory-v2.svelte';
  // import CustomerStoryDirectory from '$components/directory/customer-story-directory.svelte';
  import CustomerStoryDirectoryV2 from '$components/directory/customer-story-directory-v2.svelte';
  // import TutorialDirectory from '$src/components/directory/tutorial-directory-v2.svelte';
  import TutorialDirectoryV2 from '$src/components/directory/tutorial-directory-v2.svelte';
  // import GuideDirectory from '$components/directory/guide-directory.svelte';
  import GuideDirectoryV2 from '$components/directory/guide-directory-v2.svelte';

  export let block: DirectorySectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-[#0A0914] pt-12 text-gray-12 md:pt-20"
  >
    <div class="container mx-auto px-container">
      <div id="articles" class="max-w-[528px] pb-8 font-semibold leading-tighter md:pb-12">
        {#if block.label}
          <p class="mb-2 text-xl text-brand-9 md:mb-3">{block.label}</p>
        {/if}
        {#if block.title}
          <span class="text-3xl text-gray-1"> {block.title}</span>
        {/if}
        {#if block.gradient_title}
          <span class="bg-gradient-purple bg-clip-text text-3xl text-transparent"
            >{block.gradient_title}</span
          >
        {/if}
      </div>
      {#if block.content_type === 'tutorial'}
        <!-- <TutorialDirectory {block} /> -->
        <TutorialDirectoryV2 {block} />
      {:else if block.content_type === 'blog-post'}
        <!-- <BlogPostDirectory {block} /> -->
        <BlogPostDirectoryV2 {block} />
      {:else if block.content_type === 'customer-story'}
        <!-- <CustomerStoryDirectory {block} /> -->
        <CustomerStoryDirectoryV2 {block} />
      {:else if block.content_type === 'guide'}
        <!-- <GuideDirectory {block} /> -->
        <GuideDirectoryV2 {block} />
      {/if}
    </div>
  </section>
{/if}
