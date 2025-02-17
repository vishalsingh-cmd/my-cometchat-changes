<script lang="ts">
  import type {
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    GuideStoryblok,
    PageStoryblok,
    TechnologyStoryblok,
    TutorialStoryblok
  } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';

  import Page from './page.svelte';
  import BlogPost from './blog-post.svelte';
  import CustomerStory from './customer-story.svelte';
  import Tutorial from './tutorial.svelte';
  import Guide from './guide.svelte';
  import { isTemplatesInnerPage } from '$src/_helpers/withSlugs';
  import TemplatesInnerLayout from '$src/_views/Templates/_layouts/TemplatesInnerLayout.svelte';

  /**
   * The dynamic page will render the correct page based on the content type (page, blog-post, etc.)
   */
  export let page: ISbStoryData<
    | CustomerStoryStoryblok
    | BlogPostStoryblok
    | PageStoryblok
    | TechnologyStoryblok
    | TutorialStoryblok
    | GuideStoryblok
  >;

  const blogPostData = page as unknown as BlogPostStoryblok;
  const customerStoryData = page as unknown as CustomerStoryStoryblok;
  const pageData = page as unknown as PageStoryblok;
  const tutorialData = page as unknown as TutorialStoryblok;
  const guideData = page as unknown as GuideStoryblok;
</script>

{#if page.content && page.content?.component && page.content?.component === 'blog-post'}
  <BlogPost block={blogPostData} />
{:else if page.content?.component === 'tutorial'}
  <Tutorial block={tutorialData} />
{:else if page.content?.component === 'customer-story'}
  <CustomerStory block={customerStoryData} />
{:else if page.content && page.content?.component && page.content?.component === 'guide'}
  <Guide block={guideData} />
{:else if isTemplatesInnerPage(page.full_slug)}
  <TemplatesInnerLayout block={pageData} />
{:else}
  <Page block={pageData} />
{/if}
