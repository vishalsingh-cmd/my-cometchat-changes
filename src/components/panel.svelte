<script lang="ts">
  import type { InfoItemType } from '$components/info-item.svelte';
  import InfoItem from '$components/info-item.svelte';

  export let item: InfoItemType;
  export let infoItemClassName: string | undefined;
</script>

<div
  class="border-b border-gray-12/[.08] px-5 py-10 md:border-b-0 md:border-r md:px-16 md:py-[72px]"
>
  <InfoItem {item} class={infoItemClassName} />
</div>
