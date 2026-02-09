<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Logo from './_comps/Logo.svelte';
  import NavItems from './_comps/NavItems.svelte';
  import type { ISbStoryData } from '@storyblok/js';
  import type { NewHeaderStoryblok } from './newHeader.types';
  import { createNewHeaderContext } from './_context/newHader.context';
  import Burger from './_comps/Burger.svelte';
  import scrollDirection from '$src/lib/stores/scroll-direction';
  import DummyIconForGradient from '$src/_comps/specials/DummyIconForGradient.svelte';

  export let block: ISbStoryData<NewHeaderStoryblok>;
  const { headerElem, isNavExpanded, actions } = createNewHeaderContext();
  let activeIndex = -1;
  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header
  bind:this={$headerElem}
  class={cn([
    'fixed left-0 right-0 top-0 z-[99999]',
    'font-sans',
    'bg-[#0A0914] bg-opacity-0',
    'transition-[background-color,transform] duration-300',
    'hover:bg-opacity-100',
    scrollY > 100 && 'bg-opacity-100',
    $isNavExpanded && 'min-h-full xl:min-h-0', // Desktop reset to prevent full screen overlay
    'group-data-[header-status="inactive"]/body:-translate-y-full',
    {
      'translate-y-0': $scrollDirection === 'up',
      '-translate-y-full': $scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
    }
  ])}
>
  <Container
    pyEnabled={false}
    expand="full"
    className={cn(
      ['flex items-center justify-between py-2', $isNavExpanded && 'bg-[#0A0914]'],
      ['xl:py-[unset]']
    )}
  >
    <Logo />
    <div class="flex items-center gap-4 xl:hidden">
      {#each block.content.ctas as cta}
        {#if cta.label === 'Log in' && !$isNavExpanded}
          {@const { href, target } = getAnchorFromCmsLink(cta.link)}
          <a
            {href}
            {target}
            class="flex h-[20px] w-[41px] items-center justify-center gap-[10px] text-[14px] font-semibold leading-[1.4] tracking-[0.02em] text-[#FAFAFF] opacity-[0.84] transition-opacity hover:opacity-100"
            on:click={() => {
              actions.hidePanel();
              actions.deactivateNav();
            }}
          >
            {cta.label}
          </a>
        {/if}
      {/each}
      <Burger />
    </div>
    <NavItems navItems={block.content.items} ctas={block.content.ctas} />
    <DummyIconForGradient />
  </Container>
</header>
