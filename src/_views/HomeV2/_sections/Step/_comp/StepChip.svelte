<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  let className: undefined | string = undefined;
  export { className as class };
</script>

<span
  class={cn(
    [
      'rounded-md border border-[#FAFAFF0F] px-3 py-2',
      'font-sans text-sm font-semibold text-[#FAFAFFC2]'
    ],
    className
  )}
>
  <slot />
</span>
