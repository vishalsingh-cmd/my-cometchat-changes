<script lang="ts">
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import type { SecureAwardStoryblok } from '$src/types/bloks';

  import SecureDecCircle from './SecureDecCircle.svelte';

  export let className = '';

  export let block: SecureAwardStoryblok;
  console.log(block);
</script>

<div
  class={cn(
    ['relative', 'border-l border-r border-[#FAFAFF1A]'],
    ['sm:border-b'],
    ['lg:border-b-0'],
    [className]
  )}
>
  <div class={cn(['flex flex-col gap-4 p-4'], ['lg:p-10'])}>
    <HeadingLatest as="h3" varient="h6">{block.title}</HeadingLatest>
    <div class={cn(['grid grid-cols-[150px_150px] gap-4'])}>
      {#each block.imgs as award}
        <div
          class={cn(
            [
              'rounded-[20px] border border-[#FAFAFF0F] border-opacity-8',
              'h-[150px] w-[150px] bg-[#FAFAFF0F]',
              'flex items-center justify-center'
            ],
            ['lg:rounded-full']
          )}
        >
          <img src={award.img.filename} alt={award.img.name} />
        </div>
      {/each}
    </div>
  </div>

  <SecureDecCircle position="topLeft" />
  <SecureDecCircle position="topRight" />
  <SecureDecCircle position="bottomLeft" className="md:hidden" />
  <SecureDecCircle position="bottomRight" />
</div>
