<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import { clickOutside } from '$lib/actions/click-outside';
  import { cn } from '$lib/utils';
  import { slide } from 'svelte/transition';
  import type { BlogPostStoryblok, CustomerStoryblok, TopNavigationStoryblok } from '$types/bloks';
  import { page } from '$app/stores';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import Logo from './logo.svelte';
  import FeaturesPanel from './features-panel.svelte';
  import SolutionsPanel from './solutions-panel.svelte';
  import DevelopersPanel from './developers-panel.svelte';
  import ResourcesPanel from './resources-panel.svelte';
  import type { ISbStoryData } from '@storyblok/js';

  export let data: TopNavigationStoryblok;
  export let blogPosts: ISbStoryData<BlogPostStoryblok>[];
  export let customerStories: ISbStoryData<
    BlogPostStoryblok & {
      customer: ISbStoryData<CustomerStoryblok>;
    }
  >[];

  let activeIndex = -1;
  $: isSolid = activeIndex > -1 || scrollY > 0;

  let scrollY = 0;
  let scrollYPrev = 0;
  let scrollDirection: 'down' | 'up' = 'down';
  $: {
    if (Math.abs(scrollY - scrollYPrev) > 20) {
      scrollDirection = scrollY > scrollYPrev ? 'down' : 'up';
    }
    scrollYPrev = scrollY;
  }
</script>

<svelte:window bind:scrollY />

<div
  use:clickOutside={() => {
    activeIndex = -1;
  }}
  data-theme="dark"
  class={cn(
    'ease-motion fixed left-0 top-0 z-10 w-full text-brand-12 transition-transform duration-200',
    {
      'translate-y-0': scrollDirection === 'up',
      '-translate-y-16': scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
    }
  )}
>
  <header
    class={cn(
      'bg-transparent transition-all duration-300',
      isSolid && 'bg-gray-3/98 shadow-[inset_0_-1px_hsl(var(--color-gray-12)/0.1)] backdrop-blur-xl'
    )}
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <Logo />
      <nav class="flex items-center" on:mouseleave={() => (activeIndex = -1)}>
        {#each data.links as item, i}
          {@const style =
            'relative flex h-16 items-center overflow-hidden px-5 text-sm/none font-semibold tracking-widest transition-colors hover:text-brand-9'}
          {#if item.component === 'link'}
            {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
            <a
              on:mouseenter={() => (activeIndex = -1)}
              class={cn(style, $page.url.pathname === href && 'text-brand-9')}
              {href}
              {target}
              {rel}
            >
              {item.label}
            </a>
          {:else}
            <button
              class={cn(style, i === activeIndex && 'text-brand-9')}
              on:mouseenter={() => (activeIndex = activeIndex === i ? -1 : i)}
            >
              <span
                class={cn(
                  'pointer-events-none absolute bottom-0 left-2 right-2 h-0 bg-gradient-to-t from-brand-9/30 via-brand-9/10 via-30% to-brand-9/0 transition-all delay-0 duration-200 ease-in-out',
                  'before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-brand-9 before:opacity-0 before:transition-all before:duration-200 before:ease-in-out',
                  i === activeIndex && 'h-6 delay-100 duration-500',
                  i === activeIndex && 'before:opacity-1 before:h-0.5'
                )}
              />
              {item.title}
            </button>
          {/if}
        {/each}
        {#if data.links[activeIndex]}
          {@const item = data.links[activeIndex]}
          <div
            in:slide={{ duration: 300, delay: 100 }}
            out:slide={{ duration: 100 }}
            class="fixed left-0 top-16 w-full border-b border-gray-12/5 bg-gray-3/98 backdrop-blur-xl"
          >
            {#if item.component === 'topnav-panel'}
              {@const data = item.panel[0]}
              {#if data.component === 'topnav-features-panel'}
                <FeaturesPanel {data} />
              {:else if data.component === 'topnav-solutions-panel'}
                <SolutionsPanel {data} />
              {:else if data.component === 'topnav-technologies-panel'}
                <DevelopersPanel {data} />
              {:else if data.component === 'topnav-resources-panel'}
                <ResourcesPanel {data} {blogPosts} {customerStories} />
              {/if}
            {/if}
          </div>
        {/if}
      </nav>

      <div class="flex items-center gap-6">
        {#each data.call_to_actions as cta, i}
          {@const { href, target, rel } = getAnchorFromCmsLink(cta.link)}
          {#if i === data.call_to_actions.length - 1}
            <Button as="a" {href} {target} {rel}>{cta.label}</Button>
          {:else}
            <a
              class="text-sm/none font-semibold tracking-widest transition-colors hover:text-brand-9"
              {href}
              {target}
              {rel}>{cta.label}</a
            >
          {/if}
        {/each}
      </div>
    </div>
  </header>
</div>
