<script lang="ts">
  import { cn, separateText } from '$lib/utils';
  import Tooltip from './tooltip.svelte';
  import SimpleText from './simple-text.svelte';
  import Label from './label.svelte';
  export let block;
  export let plans;
  export let selectedOption;
  let className =
    'w-full pl-4 relative py-5 border-gray-6 text-[14px] md:text-[16px] leading-[21.2px] font-medium text-[#FAFAFFA6]';
</script>

{#key selectedOption}
  <tr class="border-b border-gray-6 text-center">
    {#if block.name_and_description}
      {@const { simpleText, label, tooltip, link } = separateText(block.name_and_description)}
      <td
        class={cn(
          className,
          'w-[252px] border-r pr-9 text-left sm:w-[400px] md:w-[500px] lg:w-[600px]'
        )}
      >
        <SimpleText {simpleText} {link} />{#if label}
          <Label {label} />
        {/if}
        {#if tooltip}
          <Tooltip {tooltip} icon="info-circle-outlined" class="absolute right-2 top-0" />
        {/if}
      </td>
    {/if}
    {#if block[plans[selectedOption].value.toLowerCase()]}
      {@const { simpleText, label, tooltip, link } = separateText(
        block[plans[selectedOption].value.toLowerCase()]
      )}
      <td class={cn(className, 'px-auto w-[100px] md:w-[200px]')}>
        <SimpleText {simpleText} {link} />{#if label}
          <Label {label} />
        {/if}{#if tooltip}
          <Tooltip {tooltip} icon="plus-circle" />
        {/if}</td
      >
    {/if}
  </tr>
{/key}
