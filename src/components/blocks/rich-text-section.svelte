<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { RichTextSectionStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';
  import Sidebar from '$components/post/sidebar.svelte';

  export let block: RichTextSectionStoryblok;

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

    headings = Array.from(content.querySelectorAll('h3'));
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
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1 py-20 text-gray-12">
    <div class="container mx-auto px-container">
      {#if block.body.content}
        <div
          class="grid-col-1 container relative mx-auto grid px-container pt-10 md:grid-cols-[1fr_minmax(auto,460px)] md:gap-12 md:pt-20 lg:grid-cols-[1fr_minmax(auto,640px)_1fr] lg:gap-16"
        >
          <Sidebar
            {headings}
            {activeHeadingIndex}
            on:scrollIntoView={onScrollIntoView}
            hasShareOptions={false}
          />
          <div class="relative" id="content">
            {#each block.body.content as b}
              <RichTextRenderer block={b} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </section>
{/if}
