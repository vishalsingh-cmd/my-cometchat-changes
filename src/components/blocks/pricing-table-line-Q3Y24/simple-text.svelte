<script lang="ts">
  import Icon from '$components/icon/icon.svelte';

  import { cn, getPricingIconV2, isValidIconType } from '$lib/utils';
  export let simpleText: string;
</script>

{#if isValidIconType(simpleText)}
  {@const { icon, color } = getPricingIconV2(simpleText)}
  <div class="flex w-full items-center justify-center">
    <Icon {icon} class={cn('min-w-fit', color)} size="sm" />
  </div>
{:else}
  {simpleText}
{/if}
