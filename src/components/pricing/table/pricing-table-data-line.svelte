<script lang="ts">
  import type { PricingTableGroupLineStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

  const typeIcon = (icon: string | number) => {
    return icon as string;
  };

  const getPricingIcon = (pricingType: 'included' | 'paid-add-on' | 'none') => {
    switch (pricingType) {
      case 'included':
        return { icon: typeIcon('check-verified-01'), color: 'text-brand-9' };
      case 'paid-add-on':
        return { icon: typeIcon('coins'), color: 'text-brand-11' };
      case 'none':
        return { icon: typeIcon('x-circle'), color: 'text-gray-5' };
      default:
        return { icon: typeIcon('x-circle'), color: 'text-gray-5' };
    }
  };

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
