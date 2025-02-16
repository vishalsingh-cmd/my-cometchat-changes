<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import type { MarketplaceBannerStoryblok } from '$src/types/bloks';
  import ImageCarousal from '../../carousals/image-carousal.svelte';
  import MarketplaceBannerInfo from './marketplace-banner-info.svelte';

  export let block: MarketplaceBannerStoryblok;
</script>

<Section>
  <Container
    pxEnabled={false}
    pyEnabled={false}
    expand="full"
    className={cn(
      [
        'relative overflow-hidden',
        'py-4 max-w-full w-full',
        'grid grid-cols-1 md:grid-cols-2 gap-4'
      ],
      ['md:py-8'],
      ['lg:gap-5']
    )}
  >
    <div class="w-full min-w-0">
      <ImageCarousal block={block.carousal[0]} />
    </div>
    <div class="w-full min-w-0">
      <MarketplaceBannerInfo block={block.info[0]} />
    </div>
  </Container>
</Section>
