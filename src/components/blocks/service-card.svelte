<script lang="ts">
  import type { ServiceCardsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Button from '$components/buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

  export let block: ServiceCardsStoryblok;

  // Block structure:
  // block.cards = [
  //   {
  //     icon: "icon-name",
  //     title: "Professional Services",
  //     description: "We also offer...",
  //     cta_text: "Contact us",
  //     cta_link: {...}
  //   }
  // ]
</script>

{#if block}
  <Section>
    <Container>
      <div use:storyblokEditable={block} class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
        {#each block.cards ?? [] as card}
          <div class="group flex flex-col rounded-[24px] border border-gray-12/10 p-8 md:p-10">
            <!-- Icon -->
            {#if card.icon}
              <div
                class="mb-6 flex h-[64px] w-[64px] items-center justify-center rounded-[8px] border border-gray-12/10 bg-gradient-to-b from-[#0A0914] to-white/15"
              >
                <Icon icon={card.icon} size="lg" class="text-gray-11 opacity-60" />
              </div>
            {/if}

            <!-- Title -->
            {#if card.title}
              <h3 class="mb-4 font-sans text-[24px] font-[640px] leading-tighter text-white">
                {card.title}
              </h3>
            {/if}

            <!-- Description -->
            {#if card.description}
              <p
                class="mb-4 text-lg font-medium leading-[130%] tracking-[0.09px] text-gray-11 opacity-74"
              >
                {card.description}
              </p>
            {/if}

            <!-- CTA Button -->
            {#if card.cta_link}
              {@const { href } = getAnchorFromCmsLink(card.cta_link)}
              <div class="mt-auto">
                <Button as="a" {href} variant="secondary" size="sm" class="text-sm">
                  {card.cta_text || 'Learn more'}
                </Button>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </Container>
  </Section>
{/if}
