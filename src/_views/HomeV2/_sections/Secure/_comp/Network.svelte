<script lang="ts">
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import { cn } from '$src/_utils/tailwind.utils';

  import glob_img from '../_assets/globe.png';
  export let className = '';
</script>

<div class={cn(['border border-[#FAFAFF1A]'], [className])}>
  <img src={glob_img} alt="" />
  <div class={cn(['flex flex-col gap-4 p-4'])}>
    <HeadingLatest as="h3" varient="h6">Edge network</HeadingLatest>
    <ParahLates class="lg:text-[18px]">
      Lightning-fast chat delivery through 35+ edge locations worldwide, ensuring minimal latency
      for all users.
    </ParahLates>
  </div>
</div>
