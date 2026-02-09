<script lang="ts">
  import { cn } from '$lib/utils';
  import { getImageSrc } from '$lib/image-helper';
  import type { ConnectedStepStoryblok } from '$types/bloks';
  export let block: ConnectedStepStoryblok;
</script>

<div class={'group/step grid grid-cols-[auto_1fr] gap-5'}>
  <div class="relative isolate h-full">
    <div
      class={cn([
        'h-12 w-12 rounded-lg bg-[#F5F5F5]',
        'flex items-center justify-center',
        'border border-[#E8E8E8]'
      ])}
    >
      <img src={getImageSrc(block, 'icon')} alt="icon" />
    </div>
    <div class="absolute left-1/2 top-0 -z-[1] h-full w-[1px] bg-[#E8E8E8]" />
  </div>
  <div class={cn(['flex flex-col gap-0.5 font-sans', 'pb-10 group-last-of-type/step:pb-0'])}>
    <h3 class="text-lg-richtext font-[700] text-black">{block.title}</h3>
    {#if block.description}
      <p class="text-lg font-normal text-[#727272]">
        {block.description}
      </p>
    {/if}
  </div>
</div>
