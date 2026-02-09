<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import QuoteIcon from '../_icons/QuoteIcon.svelte';
  import QuoteIconBg from '../_icons/QuoteIconBg.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import type { SpecialTestimonialStoryblok, AssetStoryblok } from '$src/types/bloks';
  import Media from '$src/components/media.svelte';
  import { getResolvedAsset } from '$lib/image-helper';

  export let className = '';
  const tmolsCard = tv({
    base: ['relative p-6 border border-[#FAFAFF1A] rounded-2xl', ' flex flex-col gap-6']
  });

  export let block: SpecialTestimonialStoryblok;

  // Make these reactive so they update when block changes
  $: profileImg = (getResolvedAsset(block, 'profile_img') || {}) as AssetStoryblok;
  $: brandImg = (getResolvedAsset(block, 'brand_img') || {}) as AssetStoryblok;
</script>

<div class={tmolsCard({ class: className })}>
  <div class="grid max-h-[120px] grid-cols-[_7fr_3fr] gap-3">
    <div class="flex flex-col justify-between gap-3">
      <div class="max-h-40">
        <Media media={brandImg} />
      </div>
      <QuoteIcon />
    </div>
    <div
      class={cn(['relative h-[120px] w-[120px] overflow-hidden rounded-bl-[130px] bg-[#35353E]'])}
    >
      <Media media={profileImg} />
    </div>
  </div>

  <ParahLates>
    {block.description}
  </ParahLates>
  <div class="flex flex-col gap-2">
    <h4 class={cn([' font-sans text-[16px] font-[640] text-[#FAFAFF]'])}>
      {block.name}
    </h4>
    <p class={cn([' font-sans text-[16px] font-semibold leading-[20px] text-[#FAFAFF]/75'])}>
      {block.designation}
    </p>
  </div>

  <QuoteIconBg class="absolute bottom-6 right-6" />
</div>
