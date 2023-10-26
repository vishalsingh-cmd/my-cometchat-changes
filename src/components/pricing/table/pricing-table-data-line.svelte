<script lang="ts">
  import type { PricingTableGroupLineStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { cn, getPricingIcon } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

  export let line: PricingTableGroupLineStoryblok;
</script>

{#if line}
  {@const { name, essentials, pro, enterprise } = line}
  <div use:storyblokEditable={line} class="grid grid-cols-4 gap-10 border-b border-gray-12/[.08]">
    <p class="self-center py-5 text-lg/snug font-medium tracking-wide">{name}</p>
    {#if essentials}
      {@const { icon, color } = getPricingIcon(essentials)}
      <Icon {icon} class={cn(color, 'self-center')} size="sm" />
    {/if}
    {#if pro}
      {@const { icon, color } = getPricingIcon(pro)}
      <Icon {icon} class={cn(color, 'self-center')} size="sm" />
    {/if}
    {#if enterprise}
      {@const { icon, color } = getPricingIcon(enterprise)}
      <Icon {icon} class={cn(color, 'self-center')} size="sm" />
    {/if}
  </div>
{/if}
