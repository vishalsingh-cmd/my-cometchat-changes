<script lang="ts">
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import { cn } from '$src/_utils/tailwind.utils';

  import glob_img from '../_assets/globe.png';
  import SecureDecCircle from './SecureDecCircle.svelte';
  export let className = '';
</script>

<div
  class={cn(
    ['relative', 'border-b border-l border-r border-[#FAFAFF1A]'],
    ['sm:border-r-0'],
    ['lg:border-b-0'],
    [className]
  )}
>
  <img class="mx-auto" src={glob_img} alt="" />
  <div class={cn(['flex flex-col gap-4 p-4'], ['lg:p-10'])}>
    <HeadingLatest as="h3" varient="h6">Edge network</HeadingLatest>
    <ParahLates class="lg:text-[18px]">
      Lightning-fast chat delivery through 35+ edge locations worldwide, ensuring minimal latency
      for all users.
    </ParahLates>
  </div>

  <SecureDecCircle position="topLeft" />
  <SecureDecCircle position="topRight" className="sm:hidden" />
  <SecureDecCircle position="bottomLeft" />
  <SecureDecCircle position="bottomRight" className="sm:hidden" />
</div>
