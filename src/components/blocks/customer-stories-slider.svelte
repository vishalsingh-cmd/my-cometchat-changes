<script lang="ts">
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import { createIndustryContext } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  import { getIndustryContect } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  //   import { onMount } from 'svelte';
  import Button from '$src/components/buttons/button.svelte';
  import Icon from '../icon/icon.svelte';

  import type { CustomerStoriesSliderStoryblok } from '$types/bloks';
  export let block: CustomerStoriesSliderStoryblok;

  createIndustryContext(0);
  const { activeIndex, setActiveIndex } = getIndustryContect();

  //   let unsubscribe: () => void;

  //   onMount(() => {
  //     unsubscribe = onChange((index: number) => {
  //       // Optional: trigger animations or effects
  //     });
  //     return () => unsubscribe?.();
  //   });

  function next() {
    setActiveIndex(($activeIndex + 1) % block.cards.length);
  }

  function prev() {
    setActiveIndex(($activeIndex - 1 + block.cards.length) % block.cards.length);
  }
</script>

{#if block}
  <Section>
    <Container>
      <div
        class=" relative mx-auto mt-40 flex w-full flex-col gap-[60px] overflow-hidden font-semibold"
      >
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
        <div
          class="flex gap-8 transition-transform duration-500 ease-in-out"
          style="transform: translateX(-{$activeIndex * 66}%)"
        >
          {#each block.cards ?? [] as card, index}
            <div
              class={'relative flex min-h-[416px] w-[816px] flex-shrink-0 flex-col justify-between rounded-[24px] border border-gray-12/10 p-[60px] transition-all duration-500 ease-in-out ' +
                (index === $activeIndex ? 'opacity-100' : 'opacity-60')}
            >
              <div class="h-[60px]">
                <img src={card?.customer_logo?.filename} alt="customer_logo" class="shrink-0" />
              </div>

              <div class="flex flex-col gap-[40px]">
                <p class="mt-4 font-sans text-2xl font-semibold leading-snug">
                  {card?.description}
                </p>

                <div>
                  <Button className="w-5" as="a" href={card?.cta_link} variant="secondary"
                    >{card?.cta_text}</Button
                  >
                </div>
              </div>

              <div class="pointer-events-none absolute bottom-0 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="644"
                  height="416"
                  viewBox="0 0 644 416"
                  fill="none"
                >
                  <g opacity="0.06" filter="url(#filter0_f_2337_576)">
                    <path
                      d="M556.005 38.8246L839.177 89.3145C864.237 93.7828 885.637 109.991 896.728 132.904C925.163 191.65 874.541 257.716 810.42 245.543L636.186 212.464C608.859 207.276 580.798 216.655 562.082 237.232L302.736 522.374C281.463 545.763 248.412 554.429 218.4 544.489L149.054 521.519C90.6258 502.167 75.0245 426.841 120.959 385.873L488.713 57.8786C507.033 41.5399 531.839 34.5158 556.005 38.8246Z"
                      fill="#FAFAFF"
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

        <!-- Arrows and dots -->
        <div class="flex gap-2 self-center">
          <Button on:click={prev} variant="secondary"><Icon icon="chevron-left" size="xs" /></Button
          >
          <div class="flex items-center gap-2">
            {#each block.cards ?? [] as card, index}
              <div
                class={`h-2 w-2 rounded-full ${
                  index === $activeIndex ? 'bg-gray-12' : 'bg-gray-12/10'
                } `}
              />
            {/each}
          </div>
          <Button on:click={next} variant="secondary" className="text-gray-5"
            ><Icon icon="chevron-right" size="xs" /></Button
          >
        </div>
      </div>
    </Container>
  </Section>
{/if}
