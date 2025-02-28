<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { fly, slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';

  import { clickOutside } from '$lib/actions/click-outside';
  import { cn, scrollLock } from '$lib/utils';
  import scrollDirection from '$lib/stores/scroll-direction';
  import { createMediaStore } from '$lib/stores/media';

  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Logo from '$src/components/topnav/logo.svelte';
  import NavTitle from './_comps/NavTitle.svelte';
  import NavInnerInfos from './_comps/NavInnerInfos.svelte';
  import NavItem from './_comps/NavItem.svelte';
  import BuildCard from './_comps/BuildCard.svelte';
  import IconLink from './_comps/IconLink.svelte';
  import GuidesCard from './_comps/GuidesCard.svelte';
  import NewChip from './_comps/NewChip.svelte';

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
    'fixed left-0 top-0 z-[100] w-full text-brand-12 transition-transform duration-300 ease-motion',
    {
      'translate-y-0': $scrollDirection === 'up',
      '-translate-y-16': $scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
    },
    'group-data-[header-status="inactive"]/body:-translate-y-16'
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

      <nav>
        <ul>
          <NavItem>
            <NavTitle>Products <NewChip /></NavTitle>
            <div
              class={cn([
                'absolute top-10 w-max rounded-2xl border border-[#FAFAFF0F]',
                'bg-[#0A0914] p-6'
              ])}
            >
              <NavInnerInfos>Build with UI kits | SDKs| APIs</NavInnerInfos>

              <div class="mt-6 flex flex-col gap-6 lg:flex-row">
                <BuildCard />
              </div>

              <div class="mt-8">
                <NavInnerInfos>Manage with purpose built applications</NavInnerInfos>
                <div class="mt-5">
                  <IconLink href="#" />
                </div>
              </div>
              <div class="mt-8">
                <GuidesCard />
              </div>
            </div>
          </NavItem>
        </ul>
      </nav>

      <div class="flex items-center gap-3">
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
