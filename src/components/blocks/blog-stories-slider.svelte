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
  let lockTransition = false;
  let containerWidth = 0;
  let isMobile = false;
  let isTablet = false;

  // Touch/swipe state
  let touchStartX = 0;
  let touchCurrentX = 0;
  let touchDeltaX = 0;
  let isDragging = false;
  let sliderElement: HTMLDivElement;

  $: cards = block?.cards ?? [];
  $: duplicatedCards = [cards[cards.length - 1], ...cards, cards[0]];

  // Calculate responsive card width and gap
  $: cardWidth = isMobile ? containerWidth - 40 : isTablet ? containerWidth - 80 : 1200;
  $: gap = isMobile ? 8 : isTablet ? 16 : 32;

  // Calculate transform with drag offset
  $: translateAmount = currentIndex * (cardWidth + gap) - touchDeltaX;

  function startAutoScroll() {
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  function next() {
    if (lockTransition || isDragging) return;
    lockTransition = true;
    transitioning = true;
    currentIndex += 1;
    startAutoScroll();
  }

  function prev() {
    if (lockTransition || isDragging) return;
    lockTransition = true;
    transitioning = true;
    currentIndex -= 1;
    startAutoScroll();
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

  // Touch event handlers
  function handleTouchStart(e: TouchEvent) {
    if (lockTransition) return;

    touchStartX = e.touches[0].clientX;
    touchCurrentX = touchStartX;
    isDragging = true;
    transitioning = false;
    clearInterval(interval);
  }

  function handleTouchMove(e: TouchEvent) {
    if (!isDragging) return;

    touchCurrentX = e.touches[0].clientX;
    touchDeltaX = touchCurrentX - touchStartX;
  }

  function handleTouchEnd() {
    if (!isDragging) return;

    isDragging = false;
    transitioning = true;

    const swipeThreshold = (cardWidth + gap) * 0.25; // 25% of card width

    if (Math.abs(touchDeltaX) > swipeThreshold) {
      if (touchDeltaX > 0) {
        // Swiped right - go to previous
        prev();
      } else {
        // Swiped left - go to next
        next();
      }
    } else {
      // Snap back to current position
      startAutoScroll();
    }

    touchDeltaX = 0;
    touchStartX = 0;
    touchCurrentX = 0;
  }

  // Mouse event handlers for desktop drag
  function handleMouseDown(e: MouseEvent) {
    if (lockTransition) return;

    touchStartX = e.clientX;
    touchCurrentX = touchStartX;
    isDragging = true;
    transitioning = false;
    clearInterval(interval);

    e.preventDefault();
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDragging) return;

    touchCurrentX = e.clientX;
    touchDeltaX = touchCurrentX - touchStartX;
  }

  function handleMouseUp() {
    if (!isDragging) return;

    isDragging = false;
    transitioning = true;

    const swipeThreshold = (cardWidth + gap) * 0.25;

    if (Math.abs(touchDeltaX) > swipeThreshold) {
      if (touchDeltaX > 0) {
        prev();
      } else {
        next();
      }
    } else {
      startAutoScroll();
    }

    touchDeltaX = 0;
    touchStartX = 0;
    touchCurrentX = 0;
  }

  function handleMouseLeave() {
    if (isDragging) {
      handleMouseUp();
    }
  }

  function handleResize() {
    const width = window.innerWidth;
    isMobile = width < 768;
    isTablet = width >= 768 && width < 1024;
    containerWidth = width;
  }

  onMount(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    startAutoScroll();

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
      className="mb-[40px] mt-[60px] md:mt-[80px] lg:mt-[100px] px-[20px] lg:pl-[64px]"
    >
      <div
        class="relative flex w-full flex-col gap-[30px] overflow-hidden md:gap-[40px] lg:gap-[60px]"
      >
        <!-- Heading -->
        <h2 class="font-sans text-[32px] font-semibold leading-snug md:text-3xl">
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
          bind:this={sliderElement}
          class="flex touch-pan-y select-none gap-2 md:gap-4 lg:gap-8"
          class:cursor-grab={!isDragging}
          class:cursor-grabbing={isDragging}
          style="
            transform: translateX(-{translateAmount}px);
            transition: {transitioning ? 'transform 0.5s ease' : 'none'};
          "
          on:transitionend={handleTransitionEnd}
          on:touchstart={handleTouchStart}
          on:touchmove={handleTouchMove}
          on:touchend={handleTouchEnd}
          on:touchcancel={handleTouchEnd}
          on:mousedown={handleMouseDown}
          on:mousemove={handleMouseMove}
          on:mouseup={handleMouseUp}
          on:mouseleave={handleMouseLeave}
        >
          {#each duplicatedCards as card, index}
            <div
              class={'relative flex min-h-[320px] flex-shrink-0 flex-col items-center justify-center rounded-[16px] border border-gray-12/10 bg-transparent px-[16px] py-[20px] transition-all duration-500 ease-in-out hover:border-gray-12/20 hover:bg-gray-12/5 md:min-h-[380px] md:rounded-[20px] md:px-[24px] md:py-[24px] lg:h-[440px] lg:rounded-[24px] lg:px-[40px] lg:py-0 ' +
                (index === currentIndex ? 'opacity-100' : 'opacity-60')}
              style="width: {cardWidth}px;"
            >
              <FeaturedStorySectionV2 block={card} />
            </div>
          {/each}
        </div>

        <!-- Navigation Controls -->
        <div class="flex gap-2 self-center pb-4">
          <Button
            on:click={prev}
            variant="secondary"
            className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
          >
            <Icon icon="chevron-left" size="xs" />
          </Button>

          <div class="flex items-center gap-1.5 md:gap-2">
            {#each cards as _, index}
              <div
                class={`h-1.5 w-1.5 rounded-full transition-colors md:h-2 md:w-2 ${
                  index + 1 === currentIndex ? 'bg-gray-12' : 'bg-gray-12/10'
                }`}
              />
            {/each}
          </div>

          <Button
            on:click={next}
            variant="secondary"
            className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 text-gray-5"
          >
            <Icon icon="chevron-right" size="xs" />
          </Button>
        </div>
      </div>
    </Container>
  </Section>
{/if}
