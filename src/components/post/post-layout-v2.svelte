<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type {
    AuthorStoryblok,
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    GuideStoryblok,
    TutorialStoryblok
  } from '$types/bloks';

  // import Share from './share.svelte';-
  import Media from '$components/media.svelte';
  import Sidebar from '$components/post/sidebar.svelte';
  import PreFooter from '$components/blocks/pre-footer.svelte';
  import RichTextRendererV2 from '$components/rich-text-v2/rich-text-renderer.svelte';
  import RelatedStoriesSection from '$components/blocks/related-stories-section.svelte';
  import SideStaticBanner from '$components/side-static-banner.svelte';
  import Toc from '$components/toc.svelte';
  import Breadcumbs from '$components/breadcumbs.svelte';
  import { page } from '$app/stores';
  import RelatedBlogs from '$components/related-blogs.svelte';

  export let block: CustomerStoryStoryblok | BlogPostStoryblok | TutorialStoryblok | GuideStoryblok;

  let headings: HTMLHeadingElement[] = [];
  let activeHeadingIndex = 0;
  let document = typeof window !== 'undefined' ? window.document : null;
  let windowScroll = 0;

  const getAllHeadings = () => {
    if (!document) {
      return;
    }

    const content = document.getElementById('content');
    if (!content) {
      return;
    }

    headings = Array.from(content.querySelectorAll('h2'));
  };

  const onScrollIntoView = (e: CustomEvent) => {
    const heading = e.detail.i as HTMLHeadingElement;

    const headerOffset = 64;

    const top = heading.getBoundingClientRect().top + window.pageYOffset - headerOffset - 16;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const progressForContent = () => {
    if (!document) {
      return;
    }

    /** Detect end of content block and make hasReachEndOfContent true */
    const content = document.getElementById('content');
    if (!content) {
      return;
    }

    headings.forEach((heading: HTMLHeadingElement, i: number) => {
      const headingTop = heading.offsetTop;
      const nextHeadingOffsetTop = i === headings.length - 1 ? 0 : headings[i + 1].offsetTop;

      if (
        (i === headings.length - 1 && windowScroll >= headingTop - 300) ||
        (windowScroll >= headingTop - 100 && windowScroll <= nextHeadingOffsetTop)
      ) {
        activeHeadingIndex = i;
      }
    });
  };

  const isBlockTutorialOrBlogPostOrGuide =
    block.content.component === 'blog-post' ||
    block.content.component === 'tutorial' ||
    block.content.component === 'guide';

  const typedAuthor = (author: string | StoryblokStory<AuthorStoryblok>) => {
    return author as StoryblokStory<AuthorStoryblok>;
  };

  onMount(() => {
    getAllHeadings();
    progressForContent();

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', progressForContent);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', progressForContent);
    }
  });
</script>

<svelte:window bind:scrollY={windowScroll} />

{#if block}
  <slot />

  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="mx-auto bg-[#0a0915] text-gray-1"
  >
    {#if block.content.body && block.content.body.content}
      <div
        class="grid-col-1 container relative mx-auto grid px-container pt-10 md:grid-cols-[1fr_minmax(auto,460px)] md:gap-12 md:pt-20 lg:grid-cols-[1fr_minmax(auto,640px)_1fr] lg:gap-6"
      >
        <Breadcumbs slug={$page.url.pathname} current_page_title={block.name} />

        <Toc {headings} {activeHeadingIndex} on:scrollIntoView={onScrollIntoView} />

        <Sidebar
          {headings}
          {activeHeadingIndex}
          on:scrollIntoView={onScrollIntoView}
          hasShareOptions
        />

        <div class="relative overflow-hidden" id="content">
          {#each block.content.body.content as b}
            <RichTextRendererV2 doc={b} />
          {/each}

          <!-- Author -->
          {#if block.content.author && isBlockTutorialOrBlogPostOrGuide}
            {@const author = typedAuthor(block.content.author)}
            <div class="py-8 md:py-6">
              <div
                class="flex flex-col gap-3 rounded-2xl border border-gray-1/[0.08] bg-gray-1/[0.04] p-4 backdrop-blur-[20px] md:p-5"
                style="transform: translate3d(0, 0, 0);"
              >
                <div class="flex items-center gap-3">
                  {#if author.content.avatar}
                    <Media
                      imageTransformOptions={{ size: [100, 100] }}
                      media={author.content.avatar}
                      class="h-10 w-10 rounded-full"
                    />
                  {/if}
                  <div
                    class="flex flex-col gap-[2px] text-md font-semibold leading-tight tracking-wide text-gray-1"
                  >
                    <p>{author.content.name}</p>
                    <p class="opacity-74">
                      {#if author.content.role}
                        {author.content.role}
                      {/if}
                      {#if author.content.role && author.content.company}
                        ,
                      {/if}
                      {#if author.content.company}
                        {author.content.company}
                      {/if}
                    </p>
                  </div>
                </div>
                <div
                  class="text-lg-richtext font-normal leading-[125%] tracking-wide text-[#BEBEC2]"
                >
                  {author.content.description}
                </div>
              </div>
            </div>
          {/if}
          <!-- Author
          {#if block.content.author && isBlockTutorialOrBlogPostOrGuide}
            {@const author = typedAuthor(block.content.author)}
            <div class="py-8 md:py-6">
              <div
                class="flex flex-col gap-3 rounded-2xl border border-gray-12/[0.04] bg-gray-12/2 p-4 backdrop-blur-[20px] md:p-5"
                style="transform: translate3d(0, 0, 0);"
              >
                <div class="flex items-center gap-3">
                  {#if author.content.avatar}
                    <Media
                      imageTransformOptions={{ size: [100, 100] }}
                      media={author.content.avatar}
                      class="h-10 w-10 rounded-full"
                    />
                  {/if}
                  <div
                    class="flex flex-col gap-[2px] text-md font-semibold leading-tight tracking-wide text-gray-12"
                  >
                    <p>{author.content.name}</p>
                    <p class="opacity-74">
                      {#if author.content.role}
                        {author.content.role}
                      {/if}
                      {#if author.content.role && author.content.company}
                        ,
                      {/if}
                      {#if author.content.company}
                        {author.content.company}
                      {/if}
                    </p>
                  </div>
                </div>
                <div class="text-lg-richtext font-medium leading-snug tracking-wide text-gray-12">
                  {author.content.description}
                </div>
              </div>
            </div>
          {/if} -->

          <!-- <Share class="pb-8 md:hidden" /> -->
        </div>

        {#if block.content.sidebar_right_slot && block.content.sidebar_right_slot.length > 0}
          <div class="flex flex-col gap-6">
            {#each block.content.sidebar_right_slot as slot}
              {#if slot.component === 'side-static-banner'}
                <SideStaticBanner block={slot} />
              {:else if slot.component === 'related-blogs'}
                <RelatedBlogs block={slot} />
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </section>

  {#if block.content.related && block.content.related.length > 0}
    <RelatedStoriesSection block={block.content.related[0]} />
  {/if}

  {#if block.content.pre_footer && block.content.pre_footer.length > 0 && block.content.pre_footer[0].synced_block.content.body[0]}
    <PreFooter block={block.content.pre_footer[0].synced_block.content.body[0]} />
  {/if}
{/if}
