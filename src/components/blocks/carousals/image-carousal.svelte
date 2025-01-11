<script lang="ts">
  import { cn } from '$lib/utils';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  import type { ImageCarousalStoryblok } from '$types/bloks';
  export let block: ImageCarousalStoryblok;

  const options = { loop: false };
  const plugins = [Autoplay()];

  console.log(block);
</script>

<div class={cn(['embla'], ['overflow-hidden'])} use:emblaCarouselSvelte={{ options, plugins }}>
  <!-- <div class="embla__viewport"> -->
  <div class={cn(['embla__container'], ['flex'])}>
    {#each block.images as image}
      <div class={cn(['embla__slide'], ['min-w-0 flex-[0_0_100%]'])}>
        <img class="h-full w-full object-cover" src={image.filename} alt={image.alt} />
      </div>
    {/each}
  </div>
  <!--  </div>
<button class="embla__prev">Prev</button>
  <button class="embla__next">Next</button> -->
</div>
