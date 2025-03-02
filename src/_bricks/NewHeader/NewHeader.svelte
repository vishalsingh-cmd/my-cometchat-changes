<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Logo from './_comps/Logo.svelte';
  import NavCtas from './_comps/NavCtas.svelte';
  import NavItems from './_comps/NavItems.svelte';
  import type { ISbStoryData } from '@storyblok/js';
  import type { NewHeaderStoryblok } from './newHeader.types';

  export let block: ISbStoryData<NewHeaderStoryblok>;
</script>

<header
  class={cn([
    'relative z-50 box-border',
    'border-b border-b-[#22212C] border-opacity-0 bg-[#0A0914] bg-opacity-0',
    'transition-colors duration-300',
    'hover:border-opacity-100 hover:bg-opacity-100'
  ])}
>
  <Container pyEnabled={false}>
    <nav class={cn(['flex items-center justify-between'])}>
      <Logo />
      <NavItems navItems={block.content.items} />
      <NavCtas />
    </nav>
  </Container>
</header>
