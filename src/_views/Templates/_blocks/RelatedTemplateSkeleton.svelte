<script>
  import { cn } from '$src/_utils/tailwind.utils';
</script>

<div class={cn(['grid w-full max-w-[341px] grid-rows-[auto_1fr] gap-2'], ['lg:gap-2'])}>
  <div class="relative h-auto w-full">
    <div class="h-[174px] w-full animate-pulse rounded-2xl bg-[#b1b5be] lg:h-56" />
    <svg
      class="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path
        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
      />
    </svg>
  </div>
  <div class="flex flex-col gap-1">
    <div class="h-[1.2em] w-4/5 animate-pulse rounded bg-[#b1b5be]" />
  </div>
</div>
