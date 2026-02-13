<script lang="ts">
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import { getImageSrc } from '$lib/image-helper';
  import type { SecureAwardStoryblok } from '$src/types/bloks';

  import SecureDecCircle from './SecureDecCircle.svelte';

  export let className = '';

  export let block: SecureAwardStoryblok;
  const getAwardImage = (award: Record<string, unknown>) => getImageSrc(award, 'img');
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
    <div class={cn(['grid grid-cols-[1fr_1fr] gap-4'])}>
      {#each block.imgs || [] as award}
        <div
          class={cn(
            [
              'min-w-0 p-6',
              'rounded-[20px] border border-[#FAFAFF0F] border-opacity-8',
              'bg-[#FAFAFF0F]',
              'flex items-center justify-center'
            ],
            ['lg:rounded-full']
          )}
        >
          <img
            class="w-full object-contain"
            src={getAwardImage(award)}
            alt={award.img?.name ?? ''}
          />
        </div>
      {/each}
    </div>
  </div>

  <SecureDecCircle position="topLeft" />
  <SecureDecCircle position="topRight" />
  <SecureDecCircle position="bottomLeft" className="md:hidden" />
  <SecureDecCircle position="bottomRight" />
</div>
