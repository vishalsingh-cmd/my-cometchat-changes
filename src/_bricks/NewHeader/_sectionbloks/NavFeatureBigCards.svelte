<script lang="ts">
  import type { NavFeatureBigCardsProps } from '../newHeader.types';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import { tv } from '$src/_utils/tailwind.utils';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';
  import NavFeatureBigCard from '../_innerComps/NavFeatureBigCard.svelte';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';

  export let className = '';
  export let cardsClassName = '';
  export let block: NavFeatureBigCardsProps;

  const navFeatureBigCards = tv({
    slots: {
      base: ['flex flex-col gap-4'],
      cards: ['flex gap-4 overflow-auto']
    }
  });
  const { base, cards } = navFeatureBigCards();
</script>

<NavSection className={base({ class: className })}>
  <NavTitle className="px-5">{block.title}</NavTitle>

  <div class={cards({ class: cardsClassName })} data-scrollbar="hide">
    <div class="w-5" />
    {#each block.cards as card}
      <NavFeatureBigCard block={card} />
    {/each}
    <NavFeatureBigCard className="min-w-max w-max hidden xl:grid" block={block.see_all_card[0]} />
    <div class="w-5" />
  </div>
  {@const { href } = getAnchorFromCmsLink(block.see_all_card[0].link)}

  <GhostButton
    as={'a'}
    href={href || '#'}
    target="_blank"
    variant="highlighted"
    class={'mx-5 block w-max xl:hidden'}
  >
    See All
  </GhostButton>
</NavSection>
