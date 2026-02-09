<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavFeatureCardsProps } from '../newHeader.types';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';
  import NavFeatureCard from '../_innerComps/NavFeatureCard.svelte';

  export let className = '';
  export let cardsClassName = '';
  export let block: NavFeatureCardsProps;

  const navFeatureCards = tv({
    base: ['flex flex-col gap-1.5', 'px-0']
  });

  const cards = tv({
    base: ['flex flex-col gap-3']
  });
</script>

<NavSection className={navFeatureCards({ class: className })}>
  <NavTitle>{block.title}</NavTitle>

  <div class={cards({ class: cardsClassName })}>
    {#each block.cards as card}
      <NavFeatureCard block={card} />
    {/each}
  </div>
</NavSection>
