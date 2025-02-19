<script>
  import { cn } from '$src/_utils/tailwind.utils';
  import TemplateButtons from '../../_comps/TemplateButtons.svelte';
</script>

<div
  class={cn(
    ['relative  isolate z-[1] flex w-full flex-col items-center justify-center'],
    [
      'after:absolute after:inset-0 after:h-full after:w-full  after:text-[#141414]/2 after:content-["500"]',
      'after:text-center after:text-[200px] after:leading-[110%] lg:after:text-[400px]',
      'after:top-1/2 after:-translate-y-1/2 lg:after:-translate-y-full',
      'after:-z-[1]'
    ]
  )}
>
  <h1
    class={cn(
      ['font-inter text-[80px] font-medium leading-[110%] text-[#141414]'],
      ['lg:text-[160px]']
    )}
  >
    500
  </h1>
  <p class={cn(['font-inte text-[12px] font-medium text-[#727272] lg:text-[16px]'])}>
    We Can’t found the page that you’re looking for :(
  </p>
  <TemplateButtons as="a" variant="primary" href="/" class="mt-5 w-28 lg:mt-10 lg:w-40"
    >Back to Home</TemplateButtons
  >
</div>
