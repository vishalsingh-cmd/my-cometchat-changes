<script lang="ts">
  import type { IndustryCarouselStoryblok } from '$src/types/bloks';
  import { createIndustryContext } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  import IndustryRollerItem from './industry-carousel-item.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  import { onMount, onDestroy } from 'svelte';

  export let block: IndustryCarouselStoryblok;

  const { activeIndex, setActiveIndex } = createIndustryContext(0);

  let interval: ReturnType<typeof setInterval> | null;
  let containerRef: HTMLElement;
  let observer: IntersectionObserver;

  function startAnimation() {
    if (!interval) {
      interval = setInterval(() => {
        activeIndex.update((i) => (i + 1) % (block.items?.length ?? 1));
      }, 20000);
    }
  }

  function stopAnimation() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function handleClick(index: number) {
    stopAnimation();
    setActiveIndex(index);
    startAnimation();
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 👇 Start animation when visible
            startAnimation();
          } else {
            // 👇 Stop animation when out of view
            stopAnimation();
          }
        });
      },
      {
        threshold: 0.3 // start when 30% of the section is visible
      }
    );

    if (containerRef) {
      observer.observe(containerRef);
    }
  });

  onDestroy(() => {
    stopAnimation();
    if (observer && containerRef) {
      observer.unobserve(containerRef);
    }
  });
  import { getResolvedAsset } from '$lib/image-helper';

  // Helper to resolve image for a given index: checks item for external URL first, then block.images
  function resolveCarouselImage(index: number) {
    const item = block.items?.[index];
    if (!item) return undefined;

    // Check if item has external image configured (we pretend 'image' field exists on item for the helper,
    // or just check the external fields directly if we want to be specific, but getResolvedAsset is cleaner if we assume the fields follow pattern)
    // However, since 'image' asset is NOT on the item (it's in block.images), getResolvedAsset(item, 'image') would fall back to item.image which is undefined.
    // So we need: check external on item -> if active, use it. Else use block.images[index].

    // We can use getResolvedAsset if we pass a constructed object or if we use the lower level getImageSrc but we need to handle the fallback manually.

    // Let's use getResolvedAsset logic manually or adapt it?
    // Actually, if we use getResolvedAsset(item, 'image'), it looks for item.image_use_external_url and item.image_external_url.
    // If those exist and are true, it returns the URL string (patched into an asset object if we use getResolvedAsset).
    // If not, it returns item.image (which is undefined).

    const resolvedFromItem = getResolvedAsset(item, 'image');
    if (resolvedFromItem?.filename && resolvedFromItem.is_external_url) {
      return resolvedFromItem.filename;
    }

    // Fallback to the main images array
    return block.images?.[index]?.filename ?? '';
  }
</script>

{#if block}
  <Section>
    <Container>
      <div class="flex items-start gap-6" bind:this={containerRef}>
        <!-- Image section -->
        <img
          src={resolveCarouselImage($activeIndex)}
          alt={block.images?.[$activeIndex]?.alt ?? ''}
          class="hidden h-[580px] w-[752px] shrink-0 lg:block"
        />

        <!-- Carousel section -->
        <div class="flex w-full flex-col gap-[40px]">
          {#each block.items ?? [] as item, index}
            <div class="flex flex-col items-start gap-4 self-stretch lg:hidden">
              <div class="flex flex-col items-start gap-2">
                <div class="flex flex-col items-start gap-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-md border border-[#6852D6] bg-[linear-gradient(180deg,rgba(104,82,214,0.03)_0%,rgba(104,82,214,0.15)_100%)]"
                  >
                    <Icon
                      size="xs"
                      icon={item.icon}
                      class="h-[20px] w-[20px] [&_path]:fill-[#6852D6] [&_path]:opacity-100 [&_path]:transition-colors [&_path]:duration-300"
                    />
                  </div>
                  <h2
                    class="text-sans text-3xl font-semibold leading-tighter tracking-none text-brand-9"
                  >
                    {item.title}
                  </h2>
                </div>
                <p class="text-xl font-medium text-gray-11">{item.subheading}</p>
              </div>
              <img
                src={resolveCarouselImage(index)}
                alt={item.image_alt}
                class="aspect-[153/118] h-[269px] w-[350px] shrink-0"
              />
              <div class="flex flex-col items-start gap-2 self-stretch">
                <div>{item.description}</div>
                <div class="flex flex-col gap-3 self-stretch">
                  {#each item?.points ?? [] as point}
                    <div class="flex items-start gap-[8px] self-stretch">
                      <img src="/agent_lp_images/bullet_icon.png" alt="" />
                      <p
                        class="text-left font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                      >
                        {point.text}
                      </p>
                    </div>
                  {/each}
                </div>
              </div>
            </div>

            <div class="hidden lg:flex">
              <IndustryRollerItem
                {index}
                onClick={handleClick}
                icon={item.icon}
                title={item.title}
                subHeading={item.subheading}
                description={item.description}
                points={item.points}
                link={item.link}
                linkText={item.link_text}
                on:click={() => handleClick(index)}
              />
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </Section>
{/if}
