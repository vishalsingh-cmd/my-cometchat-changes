<script lang="ts">
  import type { TestimonialsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import { onMount, tick } from 'svelte';

  export let block: TestimonialsStoryblok;

  let currentIndex = 1;
  let transitioning = true;
  let lockTransition = false;
  let interval: ReturnType<typeof setInterval>;

  $: testimonials = block?.testimonial ?? [];
  $: duplicatedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  // Card width + gap
  const cardWidth = 640; // card width
  const gap = 32; // gap between cards
  const totalWidth = cardWidth + gap;

  function selectTestimonial(index: number) {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex = index + 1; // +1 because of duplicated array
    resetAutoPlay();
  }

  function resetAutoPlay() {
    clearInterval(interval);
    interval = setInterval(() => {
      next();
    }, 5000);
  }

  function next() {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex += 1;
    resetAutoPlay();
  }

  function prev() {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex -= 1;
    resetAutoPlay();
  }

  async function handleTransitionEnd(e: TransitionEvent) {
    if (e.target !== e.currentTarget) return;

    lockTransition = false;

    const lastIndex = duplicatedTestimonials.length - 1;

    if (currentIndex === lastIndex) {
      transitioning = false;
      currentIndex = 1;
      await tick();
      transitioning = false;
    } else if (currentIndex === 0) {
      transitioning = false;
      currentIndex = duplicatedTestimonials.length - 2;
      await tick();
      transitioning = false;
    }
  }

  // Get actual testimonial index for company logo highlighting
  $: actualIndex =
    currentIndex === 0
      ? testimonials.length - 1
      : currentIndex === duplicatedTestimonials.length - 1
      ? 0
      : currentIndex - 1;

  onMount(() => {
    resetAutoPlay();
    return () => clearInterval(interval);
  });
</script>

{#if block}
  <Section>
    <Container pxEnabled={false} pyEnabled={false}>
      <div class="relative w-full overflow-hidden py-12 md:py-20" use:storyblokEditable={block}>
        <!-- Testimonial Cards Carousel -->
        <div class="relative mb-12 overflow-hidden md:mb-16">
          <div
            class="flex gap-8"
            style="
              transform: translateX(calc(50% - {currentIndex * totalWidth}px - {cardWidth / 2}px ));
              transition: {transitioning ? 'transform 0.5s ease-in-out' : 'none'};
            "
            on:transitionend={handleTransitionEnd}
          >
            {#each duplicatedTestimonials as testimonial, index}
              <div
                class={`rounded-2xl border p-[6px] transition-all duration-500 ${
                  index === currentIndex ? 'border-brand-9' : 'border-transparent'
                }`}
              >
                <div
                  class={`relative flex h-full w-[640px] flex-shrink-0 flex-col justify-between rounded-[16px] border bg-gradient-to-b from-[#6852D633]/20 to-[#0A09141A]/10 p-8 transition-all duration-500 md:p-12 md:px-[40px] md:pb-[32px] md:pt-[40px]
    ${
      index === currentIndex
        ? 'scale-100 border-gray-12/20 bg-gradient-to-br opacity-100'
        : 'scale-95 border-gray-12 opacity-40'
    }
  `}
                  style={index === currentIndex
                    ? 'box-shadow: 0px 4px 24px rgba(105, 83, 214, 0.15);'
                    : ''}
                >
                  <!-- Quote Icon -->
                  <!-- <div class="mb-6 text-brand-9">
                  <svg
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="currentColor"
                    class="opacity-60"
                  >
                    <path
                      d="M0 32V16C0 7.16 7.16 0 16 0h2v8h-2c-4.42 0-8 3.58-8 8v2h10v14H0zm22 0V16c0-8.84 7.16-16 16-16h2v8h-2c-4.42 0-8 3.58-8 8v2h10v14H22z"
                    />
                  </svg>
                </div> -->

                  <!-- Quote Text -->
                  <blockquote
                    class="mb-[48px] text-xl font-medium leading-snug tracking-[0.16px] text-gray-12 md:text-2xl"
                  >
                    <div class="relative mr-6 inline-block h-[50px] text-[80px] text-brand-9">
                      <span class="absolute -left-2 top-0"> “</span>
                    </div>
                    {testimonial.testimonial}
                    <div class="relative mr-6 inline-block h-[50px] text-[80px] text-brand-9">
                      <span class="absolute left-0 top-0">” </span>
                    </div>
                  </blockquote>

                  <!-- Author Info -->
                  <div class="flex items-center gap-4">
                    {#if testimonial.author_image?.filename}
                      <img
                        src={testimonial.author_image.filename}
                        alt={testimonial.author_name}
                        class="h-12 w-12 object-cover md:h-14 md:w-[64px]"
                      />
                    {/if}
                    <div>
                      <p class="text-base font-semibold text-white md:text-lg">
                        {testimonial.author_name}
                      </p>
                      <p class="text-[16px] leading-[125%] tracking-[0.08px] text-gray-11">
                        {testimonial.author_position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Company Logos -->
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {#each testimonials as testimonial, index}
              <button
                on:click={() => selectTestimonial(index)}
                class={`group relative flex h-[70px] w-[120px] items-center justify-center rounded-[16px] border border-gray-12/10 bg-gray-12/5 p-3 transition-all duration-300 hover:border-brand-9/50 hover:bg-brand-9/10 md:h-[100px] md:w-[180px] md:p-[24px] ${
                  actualIndex === index ? 'bg-gradient-to-b from-[#6852D64D]/30 to-transparent' : ''
                }`}
                class:border-brand-9={actualIndex === index}
                class:bg-brand-9={actualIndex === index}
              >
                {#if testimonial.company_logo?.filename}
                  <img
                    src={testimonial.company_logo.filename}
                    alt="Company logo"
                    class="h-auto max-h-[35px] w-auto max-w-full object-contain transition-all duration-300 md:max-h-[50px]"
                    class:opacity-100={actualIndex === index}
                    class:opacity-40={actualIndex !== index}
                    class:group-hover:opacity-70={actualIndex !== index}
                  />
                {/if}

                <!-- Active Indicator Border -->
                {#if actualIndex === index}
                  <div
                    class="pointer-events-none absolute inset-0 rounded-[12px] border border-brand-9/30"
                  />
                {/if}
              </button>
            {/each}
          </div>
        </div>
        <div
          class="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-r from-transparent via-[#0A0914BF]/75 to-[#0A0914]"
        />
        <div
          class="absolute left-0 top-0 h-full w-[200px] bg-gradient-to-l from-transparent via-[#0A0914BF]/75 to-[#0A0914]"
        />
      </div>
    </Container>
  </Section>
{/if}
