<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { page } from '$app/stores';

  import { string } from '$lib/strings';
  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

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

  const dispatch = createEventDispatcher();

  export let headings: HTMLHeadingElement[] = [];
  export let activeHeadingIndex = 0;
</script>

<div class="wrap sticky top-[80px] hidden h-fit w-full max-w-[272px] overflow-visible md:block">
  <div class="relative flex h-full w-fit flex-col justify-between">
    <div class="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-gray-5 to-gray-5/0" />
    <div class="ml-3 inline-flex flex-col items-start">
      {#if headings.length > 0}
        {#each headings as heading, i}
          <button
            class={cn(
              'relative text-left text-lg font-semibold leading-tight opacity-54',
              activeHeadingIndex === i && 'opacity-100',
              i !== 0 && 'pt-4',
              (i < activeHeadingIndex || activeHeadingIndex === i) &&
                'opacity-100 before:absolute before:-left-3 before:top-0 before:h-full before:w-px before:bg-brand-9'
            )}
            on:click={() => {
              activeHeadingIndex = i;

              dispatch('scrollIntoView', {
                i: heading
              });
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
