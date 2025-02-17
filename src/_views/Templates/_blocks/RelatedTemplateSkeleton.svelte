<script>
  import { cn } from '$src/_utils/tailwind.utils';
</script>

<div class={cn(['grid w-full max-w-[341px] grid-rows-[auto_1fr] gap-4'], ['lg:gap-5'])}>
  <div class="relative h-auto w-full">
    <div class="h-[174px] w-full animate-pulse rounded-2xl bg-[#b1b5be]" />
  </div>
  <div class="flex flex-col gap-1">
    <div class="h-[1.2em] w-4/5 animate-pulse rounded bg-[#b1b5be]" />
    <div class="h-[2.2em] w-full animate-pulse rounded bg-[#b1b5be]" />
  </div>
</div>
