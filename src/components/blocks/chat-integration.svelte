<script lang="ts">
  import type { ChatIntegrationStoryblok } from '$src/types/bloks';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  import Link from '$components/buttons/link.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Icon from '../icon/icon.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

  export let block: ChatIntegrationStoryblok;

  let bullet_icon = '/agent_lp_images/bullet_icon.png';

  // Calculate grid columns based on number of cards
  let gridCols = '';
  $: {
    const cardCount = block?.cards?.length ?? 0;

    if (cardCount === 2) {
      gridCols = 'lg:grid-cols-[0.5fr_1fr_1fr_0.5fr]';
    } else if (cardCount === 3) {
      gridCols = 'lg:grid-cols-[0.3fr_1fr_1fr_1fr_0.3fr]';
    } else if (cardCount === 4) {
      gridCols = 'lg:grid-cols-[0.2fr_1fr_1fr_1fr_1fr_0.2fr]';
    } else {
      gridCols = 'lg:grid-cols-[0.3fr_1fr_1fr_1fr_0.3fr]';
    }
  }

  // Calculate gradient line width based on cards
  // $: gradientWidth = cardCount === 4 ? '1640px' : '1312px';
</script>

{#if block}
  <Section>
    <Container>
      <div class="relative mb-20 grid min-h-[325px] grid-cols-1 gap-0 {gridCols}">
        <!-- Left spacer -->
        <div class="hidden border-b-0 border-r border-t-0 border-gray-5 lg:block" />

        {#each block.cards ?? [] as card}
          <div class="group relative">
            <div
              class="relative z-20 flex h-full min-h-[261px] flex-shrink-0 flex-col items-start justify-between gap-[24px] overflow-hidden border border-b border-l border-r border-t border-gray-5 p-6 text-white transition-all duration-500 hover:shadow-xl lg:gap-0 lg:border-b-0 lg:border-l-0 lg:border-t-0"
            >
              <!-- Gradient background -->
              <div class="absolute inset-0 hidden overflow-hidden lg:block">
                <div
                  class="absolute inset-0 z-10 flex-none translate-y-[-100%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style="background: url('/agent_lp_images/gradient.svg') no-repeat center/cover;"
                />
              </div>

              <!-- Icon -->
              <div
                class="relative z-10 flex items-end transition-opacity duration-300 group-hover:opacity-0"
              >
                <Icon
                  icon={card.Icon}
                  alt={card.title}
                  size="free"
                  class="min-h-[60px] min-w-[60px] rounded-lg border border-gray-7 p-3 opacity-50"
                />
              </div>

              <!-- Content -->
              <div class="relative z-10 flex flex-col gap-[24px] lg:gap-0">
                <div
                  class="flex translate-y-0 flex-col items-start gap-3 duration-300 group-hover:translate-y-[-190px] lg:gap-0"
                >
                  <h3
                    class="self-stretch pb-3 font-sans text-xl font-[640px] leading-tighter transition-all duration-300 group-hover:mb-2"
                  >
                    {card.title}
                  </h3>
                  <p
                    class="max-h-20 text-lg font-medium leading-snug tracking-[0.09px] text-gray-11 opacity-74 transition-all duration-300 group-hover:max-h-0 group-hover:opacity-0"
                  >
                    {card.description}
                  </p>

                  <!-- Mobile hover points -->
                  <div
                    class="pointer-events-none z-0 mt-0 flex w-[300px] flex-col items-start gap-2 self-stretch transition-all lg:hidden"
                  >
                    {#each card.hover_points ?? [] as point}
                      <div class="pointer-events-none flex items-start gap-2 self-stretch">
                        <img src={bullet_icon} alt="" class="mr-1 flex-none object-contain" />
                        <div
                          class="text-[16px] font-medium leading-snug tracking-[0.08px] text-gray-11"
                        >
                          {point.text}
                        </div>
                      </div>
                    {/each}
                  </div>

                  <!-- Desktop hover points (show on hover) -->
                  <div
                    class="pointer-events-none absolute top-[42px] z-0 mt-0 hidden w-full max-w-[300px] flex-col items-start gap-3 self-stretch opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex"
                  >
                    {#each card.hover_points ?? [] as point}
                      <div class="pointer-events-none flex items-start gap-2 self-stretch">
                        <img src={bullet_icon} alt="" class="mr-1 flex-none object-contain" />
                        <div
                          class="font-sans text-[16px] leading-snug tracking-[0.08px] text-gray-12 opacity-74"
                        >
                          {point.text}
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>

                <!-- Link -->
                <div>
                  {#if card.link}
                    {@const { href } = getAnchorFromCmsLink(card.link)}
                    <Link
                      {href}
                      class="relative z-10 pt-4 text-lg font-[640px] leading-tight text-brand-9"
                      variant="secondary"
                    >
                      {card.link_text}
                    </Link>
                  {/if}
                </div>
              </div>
            </div>

            <!-- Decorative Circles -->
            <SecureDecCircle position="topLeft" className="absolute z-50" />
            <SecureDecCircle position="topRight" className="absolute z-50" />
            <SecureDecCircle position="bottomLeft" className="absolute z-50" />
            <SecureDecCircle position="bottomRight" className="absolute z-50" />
          </div>
        {/each}

        <!-- Right spacer -->
        <div class="hidden border-l-0 border-t-0 border-gray-5 lg:block" />

        <!-- Top gradient line -->
        <div
          class="absolute top-0 z-30 hidden h-[1px] w-[1312px] lg:block"
          style="background: linear-gradient(90deg, rgba(250,250,255,0) 0%, rgba(250,250,255,1) 5%, rgba(250,250,255,1) 95%, rgba(250,250,255,0) 100%); opacity: 0.1;"
        />

        <!-- Bottom gradient line -->
        <div
          class="absolute bottom-0 z-30 hidden h-[1px] w-[1312px] lg:block"
          style="background: linear-gradient(90deg, rgba(250,250,255,0) 0%, rgba(250,250,255,1) 5%, rgba(250,250,255,1) 95%, rgba(250,250,255,0) 100%); opacity: 0.1;"
        />
      </div>
    </Container>
  </Section>
{/if}
