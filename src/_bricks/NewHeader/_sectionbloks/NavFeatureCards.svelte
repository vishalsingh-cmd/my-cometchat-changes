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
    base: ['flex flex-col gap-6', 'px-6']
  });

  const cards = tv({
    base: ['grid grid-cols gap-6'],
    variants: {
      columns: {
        auto: ['lg:grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]'],
        '1': ['lg:grid-cols-1'],
        '2': ['lg:grid-cols-2'],
        '3': ['lg:grid-cols-3']
      }
    },
    defaultVariants: {
      columns: block.columns
    }
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
