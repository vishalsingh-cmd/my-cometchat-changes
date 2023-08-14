<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { BlogPostStoryblok, CustomerStoryStoryblok, TutorialStoryblok } from '$types/bloks';

  import Sidebar from '$components/post/sidebar.svelte';

  import RelatedStoriesSection from '$components/blocks/related-stories-section.svelte';

  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';
  import PreFooter from '$components/blocks/pre-footer.svelte';

  export let block: CustomerStoryStoryblok | BlogPostStoryblok | TutorialStoryblok;

  let headings: HTMLHeadingElement[] = [];
  let activeHeadingIndex = 0;
  let document = typeof window !== 'undefined' ? window.document : null;
  let windowScroll = 0;

  let hasReachedEndOfContent = false;

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

    const contentOffsetBottom = content.getBoundingClientRect().bottom;

    if (contentOffsetBottom <= 500) {
      hasReachedEndOfContent = true;
    } else {
      hasReachedEndOfContent = false;
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
    class="bg-gray-1 px-container text-gray-12"
  >
    {#if block.content.body && block.content.body.content}
      <div class="container relative mx-auto pt-20">
        <Sidebar
          {headings}
          {activeHeadingIndex}
          {hasReachedEndOfContent}
          on:scrollIntoView={onScrollIntoView}
        />

        <div class="relative mx-auto w-full max-w-[640px]" id="content">
          {#each block.content.body.content as b}
            <RichTextRenderer block={b} />
          {/each}
        </div>
      </div>
    {/if}
  </section>

  {#if block.content.related && block.content.related.length > 0}
    <RelatedStoriesSection block={block.content.related[0]} />
  {/if}

  {#if block.content.pre_footer && block.content.pre_footer.length > 0}
    <PreFooter block={block.content.pre_footer[0]} />
  {/if}
{/if}
