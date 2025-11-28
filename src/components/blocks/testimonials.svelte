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
  let windowWidth = 0;

  $: testimonials = block?.testimonial ?? [];
  $: duplicatedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  // Responsive card dimensions
  $: isMobile = windowWidth < 768;
  $: cardWidth = isMobile ? windowWidth - 32 : 640; // Full width minus padding on mobile
  $: gap = isMobile ? 16 : 26;
  $: totalWidth = cardWidth + gap;

  function selectTestimonial(index: number) {
    if (lockTransition) return;
    lockTransition = true;
    transitioning = true;
    currentIndex = index + 1;
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

  $: actualIndex =
    currentIndex === 0
      ? testimonials.length - 1
      : currentIndex === duplicatedTestimonials.length - 1
      ? 0
      : currentIndex - 1;

  onMount(() => {
    windowWidth = window.innerWidth;

    const handleResize = () => {
      windowWidth = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    resetAutoPlay();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if block}
  <Section>
    <Container pxEnabled={false} pyEnabled={false}>
      <div class="relative w-full overflow-hidden py-12 md:py-20" use:storyblokEditable={block}>
        <!-- Title Section -->
        {#if block.title || block.description}
          <div
            class="container mx-auto mb-[40px] px-4 pb-[48px] pt-[60px] text-center md:pt-[100px]"
          >
            {#if block.title}
              <h2
                class="mb-[12px] font-sans text-lg font-semibold leading-tight text-brand-9 md:text-xl"
              >
                {block.title}
              </h2>
            {/if}
            {#if block.description}
              <p
                class="mx-auto max-w-3xl text-[32px] font-semibold leading-tight text-gray-12 md:text-[48px]"
              >
                {block.description}
              </p>
            {/if}
          </div>
        {/if}

        <!-- Testimonial Cards Carousel -->
        <div class="relative mb-[24px] overflow-hidden md:mb-[32px]">
          <div
            class="flex"
            style="
              gap: {gap}px;
              transform: translateX(calc(50% - {currentIndex * totalWidth}px - {cardWidth / 2}px));
              transition: {transitioning ? 'transform 0.5s ease-in-out' : 'none'};
            "
            on:transitionend={handleTransitionEnd}
          >
            {#each duplicatedTestimonials as testimonial, index}
              <div
                class={`rounded-[20px] border p-[6px] transition-all duration-500 ${
                  index === currentIndex ? 'border-brand-9' : 'border-transparent'
                }`}
              >
                <div
                  class={`relative flex flex-shrink-0 flex-col justify-between rounded-[16px] border bg-gradient-to-b from-[#6852D633]/20 to-[#0A09141A]/10 p-6 transition-all duration-500 md:p-12 md:px-[40px] md:pb-[32px] md:pt-[32px]
    ${
      index === currentIndex
        ? ' border-gray-12/10 bg-gradient-to-br opacity-100'
        : ' border-gray-12/20'
    }
  `}
                  style="
                    width: {cardWidth}px;
                    height: auto;
                    min-height: {isMobile ? '380px' : '410px'};
                    {index === currentIndex
                    ? 'box-shadow: 0 0 214px 0 rgba(104, 82, 214, 0.24);'
                    : ''}
                  "
                >
                  <!-- Quote Text -->
                  <blockquote
                    class="mb-[32px] text-lg font-medium leading-snug tracking-[0.16px] text-gray-12 opacity-80 md:mb-[48px] md:text-2xl"
                  >
                    <div
                      class="relative mr-4 inline-block h-[40px] text-[60px] text-brand-9 md:mr-6 md:h-[50px] md:text-[80px]"
                    >
                      <span class="absolute -left-2 top-0">"</span>
                    </div>
                    {testimonial.testimonial}
                    <div
                      class="relative mr-4 inline-block h-[40px] text-[60px] text-brand-9 md:mr-6 md:h-[50px] md:text-[80px]"
                    >
                      <span class="absolute left-0 top-0">"</span>
                    </div>
                  </blockquote>

                  <!-- Author Info -->
                  <div class="flex items-center gap-[16px] md:gap-[20px]">
                    {#if testimonial.author_image?.filename}
                      <img
                        src={testimonial.author_image.filename}
                        alt={testimonial.author_name}
                        class="h-12 w-12 rounded-[8px] object-cover md:h-[64px] md:w-[64px]"
                      />
                    {/if}
                    <div>
                      <p class="text-base font-semibold text-white md:text-lg">
                        {testimonial.author_name}
                      </p>
                      <p
                        class="text-[14px] leading-[125%] tracking-[0.08px] text-gray-11 md:text-[16px]"
                      >
                        {testimonial.author_position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Company Logos Carousel -->
        <div class="relative overflow-hidden">
          <div
            class="flex items-center justify-center"
            style="
              gap: {isMobile ? '12px' : '24px'};
              transform: translateX(calc(50% - {actualIndex * (isMobile ? 112 : 204)}px - {isMobile
              ? 50
              : 90}px));
              transition: transform 0.5s ease-in-out;
            "
          >
            {#each testimonials as testimonial, index}
              <button
                on:click={() => selectTestimonial(index)}
                class={`group relative flex flex-shrink-0 items-center justify-center rounded-[12px] border p-2 transition-all duration-500 hover:border-brand-9/50 hover:bg-brand-9/10 md:rounded-[16px] md:p-[24px] ${
                  actualIndex === index
                    ? 'h-[70px] w-[100px]  border-brand-9 bg-gradient-to-b from-[#6852D64D]/30 to-transparent md:h-[88px] md:w-[180px]'
                    : 'h-[60px] w-[90px]  border-gray-12/10 bg-gray-12/5 md:h-[76px] md:w-[160px]'
                }`}
                style={actualIndex === index
                  ? 'box-shadow: 0 0 40px 0 rgba(104, 82, 214, 0.3);'
                  : ''}
              >
                {#if testimonial.company_logo?.filename}
                  <img
                    src={testimonial.company_logo.filename}
                    alt="Company logo"
                    class={`h-[36px] w-auto max-w-full object-contain transition-all duration-500 ${
                      actualIndex === index
                        ? ' opacity-100 '
                        : ' opacity-40 group-hover:opacity-70 '
                    }`}
                  />
                {/if}

                {#if actualIndex === index}
                  <div
                    class="pointer-events-none absolute inset-0 rounded-[12px] border border-brand-9/30 md:rounded-[16px]"
                  />
                {/if}
              </button>
            {/each}
          </div>
        </div>

        <!-- Gradient overlays - hidden on mobile for better visibility -->
        <div
          class="absolute right-0 top-0 hidden h-full w-[150px] bg-gradient-to-r from-transparent via-[#0A0914BF]/50 to-[#0A0914] md:block"
        />
        <div
          class="absolute left-0 top-0 hidden h-full w-[150px] bg-gradient-to-l from-transparent via-[#0A0914BF]/50 to-[#0A0914] md:block"
        />
      </div>
    </Container>
  </Section>
{/if}
