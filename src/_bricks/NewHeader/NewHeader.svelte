<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Logo from './_comps/Logo.svelte';
  import NavItems from './_comps/NavItems.svelte';
  import type { ISbStoryData } from '@storyblok/js';
  import type { NewHeaderStoryblok } from './newHeader.types';
  import { createNewHeaderContext } from './_context/newHader.context';
  import Burger from './_comps/Burger.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  import scrollDirection from '$src/lib/stores/scroll-direction';

  export let block: ISbStoryData<NewHeaderStoryblok>;
  const { headerElem, isNavExpanded } = createNewHeaderContext();
  let activeIndex = -1;
  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header
  bind:this={$headerElem}
  class={cn([
    'fixed left-0 right-0 top-0 z-50',
    'border-b border-b-[#22212C] border-opacity-0 bg-[#0A0914] bg-opacity-0',
    'transition-colors duration-300',
    'hover:border-opacity-100 hover:bg-opacity-100',
    {
      'translate-y-0': $scrollDirection === 'up',
      '-translate-y-16': $scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
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
    <Burger />
    <NavItems navItems={block.content.items} />

    <!-- hidden icon for gradient id -->
    <Icon icon="shop-gradient" class="pointer-events-none visually-hidden" />
  </Container>
</header>
