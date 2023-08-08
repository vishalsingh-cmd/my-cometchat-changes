<script lang="ts">
  import InfoItem from '$components/info-item.svelte';

  import { cn } from '$lib/utils';
  import type { PanelItemStoryblok } from '$types/bloks';

  let className: undefined | string = undefined;
  export { className as class };
  export let item: PanelItemStoryblok;
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
