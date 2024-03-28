<script lang="ts">
  import { getPricingIcon } from '$lib/utils';
  import Icon from '$components/icon/icon.svelte';
  import { cn } from '$lib/utils';
  import tippy from 'tippy.js';

  export let name: string;
  export let scale: string;
  export let grow: string;
  export let tooltip: string;
</script>

<div id="line" class="ml-0 grid grid-cols-6 gap-10 border-b border-gray-12/[.08] md:ml-1">
  <div
    class="col-span-2 ml-12 flex flex-row items-start justify-start gap-3 self-center py-5 text-lg/snug font-medium tracking-wide"
  >
    <span>
      {name}
    </span>

    {#if tooltip}
      <div
        class="h-5 w-5 cursor-pointer hover:text-brand-9"
        use:tippy={{
          content: `${tooltip}`,
          placement: 'right'
        }}
      >
        <Icon icon="info-circle" size="xs" class="hover:text-brand-9" />
      </div>
    {/if}
  </div>
  <!-- scale can have values like none, paid-add-on, included or other text(note for other text just render the text instead of icon for none it's -) -->
  {#if scale === 'no'}
    <div class="col-span-2 flex w-full items-center justify-center">
      <span class="self-center">-</span>
    </div>
  {:else if scale === 'addon'}
    {@const { icon, color } = getPricingIcon('paid-add-on')}
    <div class="col-span-2 flex w-full items-center justify-center">
      <div class="flex w-6 flex-col items-center justify-center">
        <Icon {icon} class={cn(color, 'self-center')} size="sm" />
      </div>
    </div>
  {:else if scale === 'yes'}
    {@const { icon, color } = getPricingIcon('included')}
    <div class="col-span-2 flex w-full items-center justify-center">
      <div class="flex w-6 flex-col items-center justify-center">
        <Icon {icon} class={cn(color, 'self-center')} size="sm" />
      </div>
    </div>
  {:else}
    <div class="col-span-2 flex w-full items-center justify-center">
      <span class="self-center">{scale}</span>
    </div>
  {/if}

  <!-- same for the grow -->
  {#if grow === 'no'}
    <div class="col-span-2 flex w-full items-center justify-center">
      <span class="self-center">-</span>
    </div>
  {:else if grow === 'addon'}
    {@const { icon, color } = getPricingIcon('paid-add-on')}
    <div class="col-span-2 flex w-full items-center justify-center">
      <div class="w-6 items-center justify-center">
        <Icon {icon} class={cn(color, 'self-center')} size="sm" />
      </div>
    </div>
  {:else if grow === 'yes'}
    {@const { icon, color } = getPricingIcon('included')}
    <div class="col-span-2 flex w-full items-center justify-center">
      <div class="w-6 items-center justify-center">
        <Icon {icon} class={cn(color, 'self-center')} size="sm" />
      </div>
    </div>
  {:else}
    <div class="col-span-2 flex w-full items-center justify-center">
      <span class="self-center">{grow}</span>
    </div>
  {/if}
</div>
