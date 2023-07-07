<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import { page } from '$app/stores';

  import ContentCard from '$components/content-card.svelte';
  import Icon from '$components/icon/icon.svelte';
  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import type { CustomerStoryblok, IndustryStoryblok } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';
  import Title from '$components/title.svelte';

  export let block: CustomerStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

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

  const createAbsoluteUrl = (url: string) => {
    return encodeURIComponent(url);
  };

  const shareLinks = [
    {
      icon: 'facebook',
      text: string('blog.facebook'),
      url: `https://www.facebook.com/sharer/sharer.php?u=${createAbsoluteUrl($page.url.href)}`
    },
    {
      icon: 'twitter',
      text: string('blog.twitter'),
      url: `https://twitter.com/intent/tweet?url=${createAbsoluteUrl($page.url.href)}`
    },
    {
      icon: 'linkedin',
      text: string('blog.linkedin'),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${createAbsoluteUrl(
        $page.url.href
      )}`
    }
  ];

  const parsedItem = (item: StoryblokStory<CustomerStoryblok> | string) => {
    const typedItem = item as StoryblokStory<CustomerStoryblok>;
    const typedCustomer = typedItem.content.customer as StoryblokStory<CustomerStoryblok>;
    const industryId = typedCustomer.content.industry as string;

    const industry = industries.find((industry) => industry.uuid === industryId);

    return {
      title: typedItem.name,
      image: typedItem.content.cover?.filename !== '' ? typedItem.content.cover : undefined,
      tag: industry?.name,
      link: typedItem.full_slug
    };
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
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 px-container text-gray-12"
  >
    {#if block.content.body && block.content.body.content}
      <div class="container relative mx-auto">
        <div
          class={cn(
            'sticky left-16 top-[120px] hidden h-0 overflow-visible lg:block',
            hasReachedEndOfContent && 'lg:hidden'
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
          {#each block.content.body.content as b}
            <RichTextRenderer block={b} />
          {/each}
        </div>
      </div>
    {/if}
  </section>

  <!-- Related content-->
  <section class="bg-gray-1 px-container text-gray-12" data-theme="light">
    <Title
      label={{ content: string('customer_stories'), color: 'brand' }}
      title={string('related_stories')}
      class="pl-0 pr-0"
    />
    <div class="container mx-auto grid grid-cols-1 gap-8 pb-12 md:grid-cols-3 md:pb-20">
      {#if block.content.related_items && block.content.related_items.length > 0}
        {#each block.content.related_items as item}
          {@const { title, image, tag, link } = parsedItem(item)}
          <ContentCard {title} {image} {tag} {link} />
        {/each}
      {/if}
    </div>
  </section>
{/if}
