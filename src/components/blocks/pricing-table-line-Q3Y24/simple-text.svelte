<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
  import { cn, getPricingIconV2, isValidIconType } from '$lib/utils';
  export let simpleText: string;
  export let link = {};
  let words = simpleText.split(' ');
</script>

{#each words as item}
  {#if isValidIconType(item)}
    {@const { icon, color } = getPricingIconV2(item)}
    <div class="relative top-[3px] inline-flex">
      <!-- <div class="relative top-[3px] inline-block"> -->
      <Icon {icon} class={cn(color)} size={icon === 'add-on-V2' ? 'free' : 'sm'} />
    </div>
    {''}
  {:else if item === '<a>'}
    <a class="underline" href={link?.href}>{link?.label}</a>{' '}
  {:else}
    {item}{' '}
  {/if}
{/each}
