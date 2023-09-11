<script lang="ts">
  import type {
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    PageStoryblok,
    TechnologyStoryblok,
    TutorialStoryblok
  } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';

  import Page from './page.svelte';
  import BlogPost from './blog-post.svelte';
  import CustomerStory from './customer-story.svelte';
  import Tutorial from './tutorial.svelte';

  /**
   * The dynamic page will render the correct page based on the content type (page, blog-post, etc.)
   */
  export let page: ISbStoryData<
    | CustomerStoryStoryblok
    | BlogPostStoryblok
    | PageStoryblok
    | TechnologyStoryblok
    | TutorialStoryblok
  >;

  const blogPostData = page as unknown as BlogPostStoryblok;
  const customerStoryData = page as unknown as CustomerStoryStoryblok;
  const pageData = page as unknown as PageStoryblok;
  const tutorialData = page as unknown as TutorialStoryblok;
</script>

{#if page.content && page.content?.component && page.content?.component === 'blog-post'}
  <BlogPost block={blogPostData} />
{:else if page.content?.component === 'tutorial'}
  <Tutorial block={tutorialData} />
{:else if page.content?.component === 'customer-story'}
  <CustomerStory block={customerStoryData} />
{:else}
  <Page block={pageData} />
{/if}
