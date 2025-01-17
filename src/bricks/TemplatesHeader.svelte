<script>
  import { cn } from '$lib/utils';
  import Logo from '$components/topnav/logo.svelte';
</script>

<div
  class={cn(
    ['sticky top-0 z-[999] flex items-center gap-3 p-5'],
    ['border-b border-b-[#E8E8E8] bg-white']
  )}
>
  <a href="/">
    <Logo class="w-32 text-black" />
  </a>
  <span class="text-[20px] font-medium text-[#14131D] lg:text-[24px]">Templates</span>
</div>
