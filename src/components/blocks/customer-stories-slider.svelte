<script lang="ts">
  import { onMount, tick } from 'svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '../icon/icon.svelte';
  import type { CustomerStoriesSliderStoryblok } from '$types/bloks';

  export let block: CustomerStoriesSliderStoryblok;

  let interval: ReturnType<typeof setInterval>;
  let currentIndex = 1;
  let transitioning = true;
  let lockTransition = false;
  let containerWidth = 0;
  let isMobile = false;

  $: cards = block?.cards ?? [];
  $: duplicatedCards = [cards[cards.length - 1], ...cards, cards[0]];

  // Responsive card width and gap
  $: cardWidth = isMobile ? containerWidth - 32 : 816;
  $: gap = isMobile ? 16 : 32;

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  function next() {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex += 1;
    resetInterval();
  }

  function prev() {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex -= 1;
    resetInterval();
  }

  async function handleTransitionEnd(e: TransitionEvent) {
    if (e.target !== e.currentTarget) return;

    lockTransition = false;

    const lastIndex = duplicatedCards.length - 1;

    if (currentIndex === lastIndex) {
      transitioning = false;
      currentIndex = 1;
      await tick();
      transitioning = false;
    } else if (currentIndex === 0) {
      transitioning = false;
      currentIndex = duplicatedCards.length - 2;
      await tick();
      transitioning = false;
    }
  }

  function handleResize() {
    isMobile = window.innerWidth < 768;
    containerWidth = window.innerWidth;
  }

  onMount(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    interval = setInterval(next, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

{#if block}
  <Section>
    <Container
      pxEnabled={false}
      pyEnabled={false}
      className="mb-[40px] mt-[60px] md:mt-[108px] pl-[16px] md:pl-[64px]"
    >
      <div
        class="relative flex w-full flex-col gap-[30px] overflow-hidden font-semibold md:gap-[60px]"
      >
        <!-- Heading -->
        <h2 class="pr-[16px] font-sans text-2xl font-semibold leading-snug md:pr-0 md:text-3xl">
          {#if block.heading}
            <span class="text-gray-12">{block.heading}</span>
          {/if}

          {#if block.gradient_heading}
            <span class="bg-gradient-purple bg-clip-text text-transparent">
              {block.gradient_heading}
            </span>
          {/if}
        </h2>

        <!-- Slider Track -->
        <div
          class="flex gap-4 md:gap-8"
          style="
            transform: translateX(-{currentIndex * (cardWidth + gap)}px);
            transition: {transitioning ? 'transform 0.4s' : 'none'};
          "
          on:transitionend={handleTransitionEnd}
        >
          {#each duplicatedCards as card, index}
            <div
              class={'group relative flex min-h-[350px] flex-shrink-0 flex-col justify-between rounded-[16px] border border-gray-12/10 bg-[#0A0914] p-[24px] transition-all duration-500 ease-in-out hover:border-gray-12/50 hover:bg-gray-11/5 md:min-h-[416px] md:rounded-[24px] md:p-[60px] ' +
                (index === currentIndex ? 'opacity-100' : 'opacity-60')}
              style="width: {cardWidth}px;"
            >
              <!-- Logo -->
              <div class="h-[40px] md:h-[60px]">
                <img
                  src={card?.customer_logo?.filename}
                  alt="customer_logo"
                  class="h-full w-auto object-contain object-left"
                />
              </div>

              <!-- Content -->
              <div class="flex flex-col gap-[24px] md:gap-[40px]">
                <div class="font-sans text-lg font-semibold leading-snug md:text-2xl">
                  {#if card?.description}
                    <p class="mt-4">{card?.description}</p>
                  {/if}

                  {#if card?.gradient_description}
                    <span
                      class="bg-[linear-gradient(180deg,#FAFAFF_7.35%,rgba(250,250,255,0.30)_107.35%)] bg-clip-text text-transparent"
                    >
                      {card.gradient_description}
                    </span>
                  {/if}
                </div>

                <div>
                  <Button
                    className="w-auto text-sm md:text-base"
                    as="a"
                    href={card?.cta_link}
                    variant="secondary"
                  >
                    {card?.cta_text}
                  </Button>
                </div>
              </div>

              <!-- Decorative Shape -->
              <div class="pointer-events-none absolute bottom-0 right-0 opacity-50 md:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-auto w-[400px] md:w-[644px]"
                  viewBox="0 0 644 416"
                  fill="none"
                >
                  <g filter="url(#filter0_f_2337_576)">
                    <path
                      class="fill-[#FAFAFF] opacity-[0.06] transition-all duration-300 group-hover:fill-[#6852D6] group-hover:opacity-[0.16]"
                      d="M556.005 38.8246L839.177 89.3145C864.237 93.7828 885.637 109.991 896.728 132.904C925.163 191.65 874.541 257.716 810.42 245.543L636.186 212.464C608.859 207.276 580.798 216.655 562.082 237.232L302.736 522.374C281.463 545.763 248.412 554.429 218.4 544.489L149.054 521.519C90.6258 502.167 75.0245 426.841 120.959 385.873L488.713 57.8786C507.033 41.5399 531.839 34.5158 556.005 38.8246Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2337_576"
                      x="0.176086"
                      y="-56.4183"
                      width="998.654"
                      height="698.967"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_2337_576" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          {/each}
        </div>

        <!-- Navigation Controls -->
        <div class="flex gap-2 self-center pr-[16px] md:pr-0">
          <Button on:click={prev} variant="secondary" className="h-8 w-8 md:h-10 md:w-10">
            <Icon icon="chevron-left" size="xs" />
          </Button>

          <div class="flex items-center gap-2">
            {#each cards as _, index}
              <div
                class={`h-2 w-2 rounded-full transition-colors ${
                  index + 1 === currentIndex ? 'bg-gray-12' : 'bg-gray-12/10'
                }`}
              />
            {/each}
          </div>

          <Button on:click={next} variant="secondary" className="h-8 w-8 md:h-10 md:w-10">
            <Icon icon="chevron-right" size="xs" />
          </Button>
        </div>
      </div>
    </Container>
  </Section>
{/if}
