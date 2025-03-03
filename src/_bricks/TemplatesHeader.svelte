<script>
  import { cn } from '$lib/utils';
  import Logo from '$components/topnav/logo.svelte';
  import TemplatesButton from '$src/_views/Templates/_comps/TemplatesButton.svelte';
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
        <Logo class="w-32 text-black max-sm:w-[77px]" />
      </a>
      <span class="text-[24px] font-medium text-[#14131D] max-sm:text-[14px]">Templates</span>
    </div>

    <div class={cn(['flex items-center gap-3'], ['sm:gap-8'])}>
      <TemplatesButton
        className="max-sm:text-[12px]"
        variant="text"
        color="white"
        as="a"
        target="_blank"
        href={'https://app.cometchat.com/login'}
      >
        Login
      </TemplatesButton>
      <TemplatesButton
        className="max-sm:text-[12px] max-sm:px-3 max-sm:py-2.5 max-sm:min-w-0"
        variant="outlined"
        color="white"
        as="a"
        href={'/contact-sales'}
      >
        Schedule a demo
      </TemplatesButton>
    </div>
  </div>
</div>
