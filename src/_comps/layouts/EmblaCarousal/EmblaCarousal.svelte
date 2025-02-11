<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType
  } from 'embla-carousel';
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  export let className = '';
  export let emblaOptions: EmblaOptionsType = {};
  export let emblaPlugins: EmblaPluginType[] = [];
  export let onInit: ((event: CustomEvent<EmblaCarouselType>) => void) | undefined = undefined;

  const emblaCarousal = tv({
    base: ['embla', 'overflow-hidden']
  });
</script>

<div
  class={emblaCarousal({ class: className })}
  use:emblaCarouselSvelte={{ options: emblaOptions, plugins: emblaPlugins }}
  on:emblaInit={onInit}
>
  <slot />
</div>
