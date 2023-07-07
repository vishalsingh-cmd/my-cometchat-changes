<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import Icon from '$components/icon/icon.svelte';
  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import type { BlogPostStoryblok } from '$types/bloks';

  export let block: BlogPostStoryblok;

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

  const scrollIntoView = (heading: HTMLHeadingElement) => {
    const headerOffset = 64;

    const top = heading.getBoundingClientRect().top + window.pageYOffset - headerOffset - 16;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const progressForContent = () => {
    if (!document) {
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

  const createAbsoluteUrl = (url: string) => {
    return encodeURI(url);
  };

  const shareLinks = [
    {
      icon: 'facebook',
      text: string('blog.facebook'),
      url: `https://www.facebook.com/sharer/sharer.php?u=${createAbsoluteUrl(window.location.href)}`
    },
    {
      icon: 'twitter',
      text: string('blog.twitter'),
      url: `https://twitter.com/intent/tweet?url=${createAbsoluteUrl(window.location.href)}`
    },
    {
      icon: 'linkedin',
      text: string('blog.linkedin'),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${createAbsoluteUrl(
        window.location.href
      )}`
    }
  ];

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
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 px-container text-gray-12"
  >
    {#if block.body && block.body.content}
      <div class="container relative mx-auto">
        <div
          class={cn(
            'sticky left-16 top-[120px] hidden h-0 overflow-visible lg:block',
            hasReachedEndOfContent && 'hidden'
          )}
        >
          <div class="relative flex h-full w-fit flex-col justify-between pl-container">
            <div
              class="absolute bottom-0 left-16 top-0 w-px bg-gradient-to-b from-gray-5 to-gray-5/0"
            />
            <div class="ml-3 inline-flex flex-col items-start">
              {#if headings.length > 0}
                {#each headings as heading, i}
                  <button
                    class={cn(
                      'relative text-lg font-semibold leading-tight opacity-54',
                      activeHeadingIndex === i && 'opacity-100',
                      i !== 0 && 'pt-4',
                      (i < activeHeadingIndex || activeHeadingIndex === i) &&
                        'opacity-100 before:absolute before:-left-3 before:top-0 before:h-full before:w-px before:bg-brand-9'
                    )}
                    on:click={() => {
                      activeHeadingIndex = i;
                      scrollIntoView(heading);
                    }}
                  >
                    {heading.innerHTML}
                  </button>
                {/each}
              {/if}
            </div>
            <div class="ml-3 mt-[100px] flex flex-col gap-6 text-lg font-semibold leading-tight">
              <p>
                {string('blog.share')}
              </p>
              <div class="flex flex-col gap-3">
                {#each shareLinks as link}
                  <a
                    href={link.url}
                    class="flex items-center gap-1.5 opacity-74 ease-smooth hover:opacity-100"
                    target="_blank"
                    rel="noopener"
                  >
                    <Icon icon={link.icon} size="xs" />
                    {link.text}
                  </a>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[640px]" id="content">
          {#each block.body.content as b}
            <RichTextRenderer block={b} />
          {/each}
        </div>
      </div>
    {/if}
  </section>
{/if}
