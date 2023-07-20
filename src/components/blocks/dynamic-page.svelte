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
  import Tutorial from './tutorial.svelte';
  import BlogPost from './blog-post.svelte';
  import CustomerStory from './customer-story.svelte';

  /**
   * The dynamic page will render the correct page based on the content type (page, blog-post, etc.)
   */
  export let page: ISbStoryData<
    | PageStoryblok
    | CustomerStoryStoryblok
    | TechnologyStoryblok
    | BlogPostStoryblok
    | TutorialStoryblok
  >;

  const pageData = page as unknown as PageStoryblok;
  const blogPostData = page as unknown as BlogPostStoryblok;
  const tutorialData = page as unknown as TutorialStoryblok;
  const customerStoryData = page as unknown as CustomerStoryStoryblok;
</script>

{#if page.content.component === 'blog-post'}
  <BlogPost block={blogPostData} />
{:else if page.content.component === 'tutorial'}
  <Tutorial block={tutorialData} />
{:else if page.content.component === 'customer-story'}
  <CustomerStory block={customerStoryData} />
{:else}
  <Page block={pageData} />
{/if}
