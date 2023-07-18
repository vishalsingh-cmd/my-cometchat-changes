<script lang="ts">
  import type {
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    CustomerStoryblok,
    IndustryStoryblok,
    PageStoryblok,
    TechnologyStoryblok
  } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';

  import BlogPost from './blog-post.svelte';
  import CustomerStory from './customer-story.svelte';
  import Page from './page.svelte';

  /**
   * The dynamic page will render the correct page based on the content type (page, blog-post, etc.)
   */
  export let page: {
    page: ISbStoryData<
      PageStoryblok | CustomerStoryStoryblok | TechnologyStoryblok | BlogPostStoryblok
    >;
    industries: ISbStoryData<IndustryStoryblok>[] | undefined;
  };

  const pageData = page.page as unknown as PageStoryblok;
  const customerStoryData = page.page as unknown as CustomerStoryblok;
</script>

{#if page.page.content.component === 'blog-post'}
  <BlogPost block={page.page.content} />
{:else if page.page.content.component === 'customer-story' && page.industries}
  <CustomerStory block={customerStoryData} industries={page.industries} />
{:else}
  <Page block={pageData} />
{/if}
