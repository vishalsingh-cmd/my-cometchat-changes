<script lang="ts">
  import { onMount, tick } from 'svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '../icon/icon.svelte';
  import FeaturedStorySectionV2 from './featured-story-section-v2.svelte';
  import type { BlogStoriesSliderStoryblok } from '$types/bloks';

  export let block: BlogStoriesSliderStoryblok;

  let interval: ReturnType<typeof setInterval>;
  let currentIndex = 1;
  let transitioning = true;
  let lockTransition = false; // prevent multiple transitions at once

  $: cards = block?.cards ?? [];
  $: duplicatedCards = [cards[cards.length - 1], ...cards, cards[0]];

  function startAutoScroll() {
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  function next() {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex += 1;
    startAutoScroll();
  }

  function prev() {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex -= 1;
    startAutoScroll();
  }

  async function handleTransitionEnd(e: TransitionEvent) {
    // only trigger on container
    if (e.target !== e.currentTarget) return;

    lockTransition = false;

    const lastIndex = duplicatedCards.length - 1;

    // jump to first real slide
    if (currentIndex === lastIndex) {
      transitioning = false;
      currentIndex = 1;
      await tick();
      transitioning = false;
    }
    // jump to last real slide
    else if (currentIndex === 0) {
      transitioning = false;
      currentIndex = duplicatedCards.length - 2;
      await tick();
      transitioning = false;
    }
  }

  let isMobile = false;

  const checkScreen = () => (isMobile = window.innerWidth < 768);

  onMount(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  });

  onMount(() => {
    startAutoScroll();
    return () => clearInterval(interval);
  });
</script>

{#if block}
  <Section>
    <Container
      pxEnabled={false}
      pyEnabled={false}
      className="mb-[40px] mt-[100px] px-[20px] lg:pl-[64px] "
    >
      <div class="relative flex w-full flex-col gap-[60px] overflow-hidden">
        <h2 class="font-sans text-3xl font-semibold leading-snug">
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
          class="flex gap-2 lg:gap-8"
          style="
             transform: translateX(-{currentIndex * (isMobile ? 100.5 : 90)}%);
            transition: {transitioning ? 'transform 0.5s ease' : 'none'};
          "
          on:transitionend={handleTransitionEnd}
        >
          {#each duplicatedCards as card, index}
            <div
              class={'max-h-content relative flex max-w-full flex-shrink-0 flex-col items-center justify-center rounded-[24px] border border-gray-12/10 bg-transparent px-[20px]  pr-4 transition-all duration-500 ease-in-out hover:border-gray-12/20 hover:bg-gray-12/5 lg:h-[440px] lg:w-[1200px] lg:pl-[40px] ' +
                (index === currentIndex ? 'opacity-100' : 'opacity-60')}
            >
              <FeaturedStorySectionV2 block={card} />

              <!-- Decorative background SVG -->
              <!-- <div class="group absolute inset-x-0 bottom-0 z-30 [filter:blur(29.137px)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="644"
                  height="416"
                  viewBox="0 0 644 416"
                  fill="none"
                  class="transition-colors duration-300"
                >
                  <g filter="url(#filter0_f_2337_576)">
                    <path
                      d="M556.005 38.8246L839.177 89.3145C864.237 93.7828 885.637 109.991 896.728 132.904C925.163 191.65 874.541 257.716 810.42 245.543L636.186 212.464C608.859 207.276 580.798 216.655 562.082 237.232L302.736 522.374C281.463 545.763 248.412 554.429 218.4 544.489L149.054 521.519C90.6258 502.167 75.0245 426.841 120.959 385.873L488.713 57.8786C507.033 41.5399 531.839 34.5158 556.005 38.8246Z"
                      class="fill-[#FAFAFF] opacity-[0.06] transition-all duration-300 group-hover:fill-[#7f6fce] group-hover:opacity-[0.16]"
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
              </div> -->
            </div>
          {/each}
        </div>

        <!-- Arrows and Dots -->
        <div class="flex gap-2 self-center pb-4">
          <Button on:click={prev} variant="secondary">
            <Icon icon="chevron-left" size="xs" />
          </Button>

          <div class="flex items-center gap-2">
            {#each cards as _, index}
              <div
                class={`h-2 w-2 rounded-full ${
                  index + 1 === currentIndex ? 'bg-gray-12' : 'bg-gray-12/10'
                }`}
              />
            {/each}
          </div>

          <Button on:click={next} variant="secondary" className="text-gray-5">
            <Icon icon="chevron-right" size="xs" />
          </Button>
        </div>
      </div>
    </Container>
  </Section>
{/if}
