<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { fly, slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import { page } from '$app/stores';

  import type { TopNavigationStoryblok } from '$types/bloks';

  import { clickOutside } from '$lib/actions/click-outside';
  import { cn, scrollLock } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import scrollDirection from '$lib/stores/scroll-direction';
  import { createMediaStore } from '$lib/stores/media';
  import { string } from '$lib/strings';

  import mobileBg from './topnav-mobile-bg.svg';

  import Logo from './logo.svelte';
  import FeaturesPanel from './features-panel.svelte';
  import SolutionsPanel from './solutions-panel.svelte';
  import DevelopersPanel from './developers-panel.svelte';
  import ResourcesPanel from './resources-panel.svelte';
  import ResourcesPanelTemporary from './resources-panel-temporary.svelte';

  import Button from '$components/buttons/button.svelte';
  import Divider from '$components/divider.svelte';
  import Icon from '$components/icon/icon.svelte';

  export let data: TopNavigationStoryblok;

  let expanded = false; // mobile
  let activeIndex = -1;
  $: isSolid = activeIndex > -1 || scrollY > 0 || expanded;
  const isMobile = createMediaStore('(max-width: 1023px)');

  let scrollY = 0;
  $: scrollLock(expanded || !isMobile);

  beforeNavigate(() => {
    expanded = false;
    activeIndex = -1;
  });

  const panelTransition = (
    node: HTMLElement,
    options: { duration: number; direction: 'in' | 'out' }
  ) => {
    if ($isMobile) {
      return fly(node, { duration: options.duration, x: '100vw', easing: circInOut });
    }

    return slide(node, {
      duration: options.duration,
      delay: options.direction === 'in' ? 100 : 0,
      easing: circInOut
    });
  };
</script>

<svelte:window bind:scrollY />

<div
  use:clickOutside={() => {
    activeIndex = -1;
  }}
  data-theme="dark"
  class={cn(
    'fixed left-0 top-0 z-30 w-full text-brand-12 transition-transform duration-300 ease-motion',
    {
      'translate-y-0': $scrollDirection === 'up',
      '-translate-y-16': $scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
    }
  )}
>
  <header
    class={cn(
      'relative bg-transparent transition-all duration-300 hover:bg-gray-3/98 hover:backdrop-blur-xl',
      'after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:z-20 after:h-px after:bg-divider-gradient after:opacity-0 after:transition hover:after:opacity-100',
      isSolid && 'bg-gray-3/98 backdrop-blur-xl after:opacity-100'
    )}
    style="transform: translate3d(0, 0, 0);"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-container">
      <a aria-label="Homepage link | CometChat Logo" href="/">
        <Logo class="h-4 lg:h-5" />
      </a>
      <div on:mouseleave={() => (activeIndex = -1)}>
        <nav class="hidden items-center text-gray-12 opacity-[0.84] lg:flex">
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
                on:mouseenter={() => (activeIndex = i)}
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
        </nav>
        <!-- Mobile nav -->
        {#if expanded}
          <nav
            in:slide={{ duration: 300, delay: 100 }}
            out:slide={{ duration: 100 }}
            class="fixed left-0 right-0 top-16 z-10 flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-auto bg-gray-3/98 backdrop-blur-xl lg:hidden"
            style="background-image: url({mobileBg}); background-size: cover; background-repeat: no-repeat; background-position: center; transform: translate3d(0, 0, 0)"
          >
            <div class="flex-1">
              {#each data.links as item, i}
                {@const style = 'px-container flex text-md/none font-semibold py-6'}
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
                    class={cn(
                      style,
                      'flex w-full items-center justify-between',
                      i === activeIndex && 'text-brand-9'
                    )}
                    on:click={() => (activeIndex = activeIndex === i ? -1 : i)}
                  >
                    {item.title}
                    <Icon class="text-gray-10" size="xs" icon="chevron-right" />
                  </button>
                {/if}
                <Divider />
              {/each}
            </div>
            {#if data.call_to_actions[data.call_to_actions.length - 1]}
              {@const item = data.call_to_actions[data.call_to_actions.length - 1]}
              {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
              <div class="p-container">
                <Button class="w-full" as="a" {href} {target} {rel}>{item.label}</Button>
              </div>
            {/if}
          </nav>
        {/if}
        {#if data.links[activeIndex]}
          {@const item = data.links[activeIndex]}
          <div
            in:panelTransition={{ duration: 200, direction: 'in' }}
            out:panelTransition={{ duration: 100, direction: 'out' }}
            class="fixed left-0 top-16 z-20 max-h-[calc(100dvh-4rem)] w-full translate-x-0 translate-y-0 overflow-auto bg-gradient-to-b from-gray-3/98 to-gray-3/98 backdrop-blur-xl md:to-gray-3/0 lg:from-gray-3/100 lg:to-gray-3/100"
          >
            <button
              class="sticky top-0 z-20 flex w-full items-center gap-2 bg-gray-3/98 px-container py-4 lg:hidden"
              on:click={() => (activeIndex = -1)}
            >
              <Icon size="xs" class="text-gray-10" icon="arrow-left" />
              <span class="text-sm/none font-semibold">{string('back')}</span>
            </button>
            <Divider class="lg:hidden" />
            <div class="translate-x-0 translate-y-0 overflow-hidden backdrop-blur-3xl">
              {#if item.component === 'topnav-panel'}
                {@const data = item.panel[0]}
                {#if data.component === 'topnav-features-panel'}
                  <FeaturesPanel {data} />
                {:else if data.component === 'topnav-solutions-panel'}
                  <SolutionsPanel {data} />
                {:else if data.component === 'topnav-technologies-panel'}
                  <DevelopersPanel {data} />
                {:else if data.component === 'topnav-resources-panel'}
                  <ResourcesPanel {data} />
                {:else if data.component === 'topnav-resources-panel-temporary'}
                  <ResourcesPanelTemporary {data} />
                {/if}
              {/if}
            </div>
          </div>
        {/if}
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center gap-6">
          {#each data.call_to_actions as cta, i}
            {@const { href, target, rel } = getAnchorFromCmsLink(cta.link)}
            {#if i === data.call_to_actions.length - 1}
              <Button class="hidden sm:inline-flex" as="a" {href} {target} {rel}>{cta.label}</Button
              >
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
        <!-- Mobile button -->
        <div class="block lg:hidden">
          <Button
            aria-label="Menu button"
            variant="secondary"
            on:click={() => (expanded = !expanded)}
          >
            <Icon size="xs" icon={expanded ? 'x' : 'menu-01'} class="opacity-80" />
          </Button>
        </div>
      </div>
    </div>
  </header>
</div>
