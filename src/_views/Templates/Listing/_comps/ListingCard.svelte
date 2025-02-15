<script lang="ts">
  import Media from '$src/components/media.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import type { AssetStoryblok } from '$src/types/bloks';

  export let image: AssetStoryblok;
  export let title: string;
  export let href: string;
</script>

<a {href} target="_self" class={cn(['group/listingCard'])}>
  <div class={cn(['flex flex-col gap-2'], ['lg:gap-5'])}>
    <div class="relative rounded-2xl">
      <Media media={image} class="rounded-[inherit]" />
      <div
        class={cn([
          'absolute inset-0',
          'flex items-center justify-center',
          'rounded-[inherit] bg-[#141414] bg-opacity-20 backdrop-blur-[10px]',
          'transition-all duration-300',
          'opacity-0 group-hover/listingCard:opacity-100'
        ])}
      >
        <button
          class={cn([
            'bg-white font-inter font-[500] text-[#141414]',
            'h-[40px] w-[160px] rounded-[8px]'
          ])}
        >
          View More
        </button>
      </div>
    </div>
    <h2 class={cn(['font-inter text-[18px] font-[500] text-[#141414]'])}>
      {title}
    </h2>
  </div>
</a>
