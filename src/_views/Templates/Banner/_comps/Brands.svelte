<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import type { simple_assetStoryblok } from '$src/types/bloks';
  import { getImageSrc } from '$lib/image-helper';
  export let brands: simple_assetStoryblok[];
  const cast = (val: any) => val;

  const brand = tv({
    base: ['absolute -z-1 w-10 h-10 object-contain', 'lg:w-16 lg:h-16']
  });
</script>

{#if brands[0]}
  <img
    class={brand({ class: cn(['left-[20%] top-2.5'], ['lg:-top-2.5']) })}
    src={getImageSrc(cast(brands[0]), 'asset')}
    alt={brands[0].asset.alt}
  />
{/if}

{#if brands[1]}
  <img
    class={brand({ class: cn(['-left-4 top-[20%]'], ['lg:left-4']) })}
    src={getImageSrc(cast(brands[1]), 'asset')}
    alt={brands[1].asset.alt}
  />
{/if}

{#if brands[2]}
  <img
    class={brand({ class: cn(['bottom-[10%] left-[4%]'], ['lg:left-[12%]']) })}
    src={getImageSrc(cast(brands[2]), 'asset')}
    alt={brands[2].asset.alt}
  />
{/if}

{#if brands[3]}
  <img
    class={brand({ class: cn(['bottom-0 left-[40%]'], ['lg:left-[30%]']) })}
    src={getImageSrc(cast(brands[3]), 'asset')}
    alt={brands[3].asset.alt}
  />
{/if}

{#if brands[4]}
  <img
    class={brand({ class: cn(['bottom-2 right-4'], ['lg:right-[16%]']) })}
    src={getImageSrc(cast(brands[4]), 'asset')}
    alt={brands[4].asset.alt}
  />
{/if}

{#if brands[5]}
  <img
    class={brand({ class: cn(['-right-4 top-[36%]'], ['lg:right-[10%]']) })}
    src={getImageSrc(cast(brands[5]), 'asset')}
    alt={brands[5].asset.alt}
  />
{/if}

{#if brands[6]}
  <img
    class={brand({ class: cn(['right-[10%] top-4'], ['lg:right-[24%]']) })}
    src={getImageSrc(cast(brands[6]), 'asset')}
    alt={brands[6].asset.alt}
  />
{/if}
