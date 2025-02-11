<script lang="ts">
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import award01 from '../_assets/award01.png';
  import award02 from '../_assets/award02.png';
  import award03 from '../_assets/award03.png';
  import award04 from '../_assets/award04.png';
  import SecureDecCircle from './SecureDecCircle.svelte';

  const awards = [
    {
      src: award01,
      alt: 'award01'
    },
    {
      src: award02,
      alt: 'award02'
    },
    {
      src: award03,
      alt: 'award03'
    },
    {
      src: award04,
      alt: 'award04'
    }
  ];

  export let className = '';
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
    <HeadingLatest as="h3" varient="h6">Enterprise security</HeadingLatest>
    <div class={cn(['grid grid-cols-[150px_150px] gap-4'])}>
      {#each awards as award}
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
          <img src={award.src} alt={award.alt} />
        </div>
      {/each}
    </div>
  </div>

  <SecureDecCircle position="topLeft" />
  <SecureDecCircle position="topRight" />
  <SecureDecCircle position="bottomLeft" className="md:hidden" />
  <SecureDecCircle position="bottomRight" />
</div>
