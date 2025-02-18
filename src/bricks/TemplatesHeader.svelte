<script>
  import { cn } from '$lib/utils';
  import Logo from '$components/topnav/logo.svelte';
  import { createMediaStore } from '$src/lib/stores/media';
  import { beforeNavigate } from '$app/navigation';

  import TemplateButtons from '$src/_views/Templates/_comps/TemplateButtons.svelte';

  let expanded = false; // mobile
  let activeIndex = -1;
  $: isSolid = activeIndex > -1 || scrollY > 0 || expanded;
  const isMobile = createMediaStore('(max-width: 1023px)');

  let scrollY = 0;

  beforeNavigate(() => {
    expanded = false;
    activeIndex = -1;
  });
</script>

<div
  class={cn(
    ['sticky top-0 z-[100] flex items-center gap-3 '],
    ['border-b border-b-[#E8E8E8] bg-white']
  )}
>
  <div class="container mx-auto flex h-16 items-center justify-between px-container">
    <div class={cn(['flex items-center gap-1.5'], ['sm:gap-3'])}>
      <a href="/templates">
        <Logo class="w-[77px] text-black lg:w-32" />
      </a>
      <span class="text-[14px] font-medium text-[#14131D] lg:text-[24px]">Templates</span>
    </div>

    <div class="flex items-center gap-3">
      <a
        class="font-inter text-[12px] font-normal tracking-widest text-[#141414] transition-colors hover:text-brand-9"
        href="/"
      >
        Login
      </a>
      <TemplateButtons variant="secondary" as="a" href="test">Schedule a demo</TemplateButtons>
    </div>
  </div>
</div>
