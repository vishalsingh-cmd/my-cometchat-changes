<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type {
    AuthorStoryblok,
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    TutorialStoryblok
  } from '$types/bloks';

  import Sidebar from '$components/post/sidebar.svelte';

  import RelatedStoriesSection from '$components/blocks/related-stories-section.svelte';

  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';
  import PreFooter from '$components/blocks/pre-footer.svelte';
  import Media from '$components/media.svelte';
  import Share from './share.svelte';

  export let block: CustomerStoryStoryblok | BlogPostStoryblok | TutorialStoryblok;

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

  const isBlockTutorialOrBlogPost =
    block.content.component === 'blog-post' || block.content.component === 'tutorial';

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

  <section use:storyblokEditable={block} data-theme="light" class="mx-auto bg-gray-1 text-gray-12">
    {#if block.content.body && block.content.body.content}
      <div
        class="grid-col-1 container relative mx-auto grid px-container pt-10 md:grid-cols-[1fr_minmax(auto,460px)] md:gap-12 md:pt-20 lg:grid-cols-[1fr_minmax(auto,640px)_1fr] lg:gap-16"
      >
        <Sidebar {headings} {activeHeadingIndex} on:scrollIntoView={onScrollIntoView} />

        <div class="relative" id="content">
          {#each block.content.body.content as b}
            <RichTextRenderer block={b} />
          {/each}

          <!-- Author -->
          {#if block.content.author && isBlockTutorialOrBlogPost}
            {@const author = typedAuthor(block.content.author)}
            <div class="py-8 md:py-6">
              <div
                class="flex flex-col gap-3 rounded-2xl border border-gray-12/[0.04] bg-gray-12/[0.02] p-4 backdrop-blur-[20px] md:p-5"
                style="transform: translate3d(0, 0, 0);"
              >
                <div class="flex items-center gap-3">
                  {#if author.content.avatar}
                    <Media media={author.content.avatar} class="h-10 w-10 rounded-full" />
                  {/if}
                  <div
                    class="flex flex-col gap-[2px] text-md font-semibold leading-tight tracking-wide text-gray-12"
                  >
                    <p>{author.content.name}</p>
                    <p class="opacity-74">{author.content.role}, {author.content.company}</p>
                  </div>
                </div>
                <div class="text-lg-richtext font-medium leading-snug tracking-wide text-gray-12">
                  {author.content.description}
                </div>
              </div>
            </div>
          {/if}

          <Share class="pb-8 md:hidden" />
        </div>
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
