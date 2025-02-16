<script lang="ts">
  import { cn, scrollLock } from '$lib/utils';
  import Logo from '$components/topnav/logo.svelte';
  import { createMediaStore } from '$src/lib/stores/media';
  import { beforeNavigate } from '$app/navigation';
  import { fly, slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import { clickOutside } from '$src/lib/actions/click-outside';
  import scrollDirection from '$src/lib/stores/scroll-direction';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '$src/components/icon/icon.svelte';

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

<div
  use:clickOutside={() => {
    activeIndex = -1;
  }}
  data-theme="light"
  class={cn(
    ['fixed left-0 top-0 z-[100]  w-full transition-transform duration-300 ease-motion'],
    ['border-b border-b-[#E8E8E8] bg-white']
  )}
>
  <div class="container mx-auto flex h-16 items-center justify-between px-container">
    <div class={cn(['flex items-center gap-3'])}>
      <a href="/">
        <Logo class="w-32 text-black" />
      </a>
      <span class="text-[20px] font-medium text-[#14131D] lg:text-[24px]">Templates</span>
    </div>

    <div class="flex items-center gap-3">
      <a
        class="font-inter text-[12px] font-normal tracking-widest text-[#141414] transition-colors hover:text-brand-9"
        href="/">Login</a
      >
      <Button
        variant="secondary"
        class="hidden border-[#DCDCDC] bg-transparent font-inter text-[12px] font-normal sm:inline-flex"
        as="a"
        href="test">Schedule a demo</Button
      >
    </div>
    <!-- Mobile button -->
    <div class="block lg:hidden">
      <Button aria-label="Menu button" variant="secondary" on:click={() => (expanded = !expanded)}>
        <Icon size="xs" icon={expanded ? 'x' : 'menu-01'} class="opacity-80" />
      </Button>
    </div>

    <!-- Mobile nav -->

    {#if expanded}
      <nav
        in:slide={{ duration: 300, delay: 100 }}
        out:slide={{ duration: 100 }}
        class="fixed left-0 right-0 top-16 z-10 flex h-[calc(100dvh-4rem)] flex-col justify-between overflow-auto bg-gray-3/98 bg-white backdrop-blur-xl lg:hidden"
      />
    {/if}
  </div>
</div>
