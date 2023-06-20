<script lang="ts">
  import type { InfoItemType } from '$components/info-item.svelte';
  import InfoItem from '$components/info-item.svelte';

  import { cn } from '$lib/utils';

  let className: undefined | string = undefined;
  export { className as class };
  export let item: InfoItemType;
  export let infoItemClassName: string | undefined = undefined;
</script>

<div
  class={cn(
    'border-b border-gray-12/[.08] px-5 py-10 md:border-b-0 md:border-r md:px-16 md:py-[72px]',
    className
  )}
>
  <InfoItem {item} class={infoItemClassName} />
</div>
