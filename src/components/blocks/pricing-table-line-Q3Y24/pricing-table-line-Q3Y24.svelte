<script lang="ts">
  import { cn, separateText } from '$lib/utils';
  import Tooltip from './tooltip.svelte';
  import SimpleText from './simple-text.svelte';
  import Label from './label.svelte';
  export let block;
  let className =
    'relative min-w-[238px] text-[#FAFAFFA6] py-5 px-5 border-gray-4 text-[16px] leading-[21.2px] font-medium';
</script>

<tr class="border-b border-gray-4 text-center">
  {#if block.name_and_description}
    {@const { simpleText, label, tooltip, link } = separateText(block.name_and_description)}
    <td
      class={cn(className, 'max-w-[440px] border-r pl-4 text-left lg:w-[440px] lg:min-w-[440px]')}
    >
      <SimpleText {simpleText} {link} />
      {#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="info-circle-outlined" class="absolute right-2 top-0" />
      {/if}
    </td>
  {/if}
  {#if block.build}
    {@const { simpleText, label, tooltip, link } = separateText(block.build)}
    <td class={cn(className, 'max-w-[238px] border-r')}>
      <SimpleText {simpleText} {link} />
      {#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.basic}
    {@const { simpleText, label, tooltip, link } = separateText(block.basic)}
    <td class={cn(className, 'max-w-[238px] border-r')}>
      <SimpleText {simpleText} {link} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.advanced}
    {@const { simpleText, label, tooltip, link } = separateText(block.advanced)}
    <td class={cn(className, 'max-w-[238px] border-r bg-[#6852D61A]')}>
      <SimpleText {simpleText} {link} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.enterprise}
    {@const { simpleText, label, tooltip, link } = separateText(block.enterprise)}
    <td class={cn(className, 'max-w-[238px]')}>
      <SimpleText {simpleText} {link} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
</tr>
