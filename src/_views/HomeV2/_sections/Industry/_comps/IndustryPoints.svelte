<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { getIndustryContect } from '../_context/IndustryContext';
  import Icon from '$src/components/icon/icon.svelte';
  import EmblaCarousal from '$src/_comps/layouts/EmblaCarousal/EmblaCarousal.svelte';
  import EmblaContainer from '$src/_comps/layouts/EmblaCarousal/EmblaContainer.svelte';
  import EmblaSlide from '$src/_comps/layouts/EmblaCarousal/EmblaSlide.svelte';
  import { type EmblaCarouselType } from 'embla-carousel';
  import type { RollerPointStoryblok } from '$types/bloks';
  import Media from '$src/components/media.svelte';
  import { getResolvedAsset } from '$lib/image-helper';

  const industryContext = getIndustryContect();
  const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
    const emblaApi = event.detail;
    industryContext.onChange((index) => {
      emblaApi.scrollTo(index);
    });
  };

  export let industryPointBlocks: RollerPointStoryblok[];
</script>

<EmblaCarousal onInit={onEmblaInit} emblaOptions={{ watchDrag: false }}>
  <EmblaContainer>
    {#each industryPointBlocks as industryPointBlock}
      {@const resolvedImage = getResolvedAsset(industryPointBlock, 'image')}
      <EmblaSlide className="flex-[0_0_100%] flex flex-col gap-5">
        <ul class={cn('flex flex-col gap-3')}>
          {#each industryPointBlock.points as point}
            <li class="flex-start flex gap-2">
              <Icon icon="star-04" size="xs" class={cn('mt-1 flex-shrink-0', 'text-brand-9')} />
              <p class="text-[18px] font-medium leading-snug tracking-wide opacity-74">
                {point.text}
              </p>
            </li>
          {/each}
        </ul>
        {#if resolvedImage}
          <Media
            class="h-auto w-full object-cover"
            imageTransformOptions={{ size: [1200, 0] }}
            media={resolvedImage}
          />
        {/if}
      </EmblaSlide>
    {/each}
  </EmblaContainer>
</EmblaCarousal>
