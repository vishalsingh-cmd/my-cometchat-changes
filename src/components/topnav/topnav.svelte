<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import { clickOutside } from '$lib/actions/click-outside';
  import { cn } from '$lib/utils';
  import { slide } from 'svelte/transition';
  import Logo from './logo.svelte';

  import FeaturesPanel from './features-panel.svelte';
  import SolutionsPanel from './solutions-panel.svelte';
  import DevelopersPanel from './developers-panel.svelte';
  import ResourcesPanel from './resources-panel.svelte';

  let activeIndex = -1;
  $: isSolid = activeIndex > -1 || scrollY > 100;

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
      <nav class="flex items-center gap-8">
        {#each ['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'] as item, i}
          <a
            class={cn(
              'relative flex h-16 items-center overflow-hidden px-3 text-sm/none font-semibold tracking-widest transition-colors hover:text-brand-9',
              i === activeIndex && 'text-brand-9'
            )}
            href="/"
            on:click={(e) => {
              e.preventDefault();
              activeIndex = activeIndex === i ? -1 : i;
            }}
          >
            <span
              class={cn(
                'pointer-events-none absolute bottom-0 left-0 h-0 w-full bg-gradient-to-t from-brand-9/30 via-brand-9/10 via-30% to-brand-9/0 transition-all delay-0 duration-200 ease-in-out',
                'before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-brand-9 before:opacity-0 before:transition-all before:duration-200 before:ease-in-out',
                i === activeIndex && 'h-6 delay-100 duration-500',
                i === activeIndex && 'before:opacity-1 before:h-0.5'
              )}
            />
            {item}
          </a>
        {/each}
      </nav>

      <div class="flex items-center gap-6">
        <a
          class="text-sm/none font-semibold tracking-widest transition-colors hover:text-brand-9"
          href="/">Sign in</a
        >

        <Button as="a" href="/">Get started</Button>
      </div>
    </div>
  </header>
  {#if activeIndex > -1}
    <div
      in:slide={{ duration: 300, delay: 100 }}
      out:slide={{ duration: 200 }}
      class="border-b border-gray-12/5 bg-gray-3/98 backdrop-blur-xl"
    >
      {#if activeIndex === 0}
        <FeaturesPanel />
      {:else if activeIndex === 1}
        <SolutionsPanel />
      {:else if activeIndex === 2}
        <DevelopersPanel />
      {:else if activeIndex === 3}
        <ResourcesPanel />
      {/if}
    </div>
  {/if}
</div>
