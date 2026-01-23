<script lang="ts">
  import { cn, separateText } from '$lib/utils';
  import Tooltip from './tooltip.svelte';
  import SimpleText from './simple-text.svelte';
  import Label from './label.svelte';
  export let block;
  let className =
    'relative text-[#FAFAFFA6] py-5 px-5 border-gray-4 text-[16px] leading-[21.2px] font-medium';
</script>

<tr class="border-b border-gray-4 text-center">
  {#if block.name_and_description}
    {@const { simpleText, label, tooltip, link } = separateText(block.name_and_description)}
    <td class={cn(className, 'max-w-[440px] border-r pl-4 text-left')}>
      <SimpleText {simpleText} {link} />
      {#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="info-circle-outlined" class="absolute right-2 top-0" />
      {/if}
    </td>
  {/if}
  {#if block.web_only}
    {@const { simpleText, label, tooltip, link } = separateText(block.web_only)}
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
  {#if block.core}
    {@const { simpleText, label, tooltip, link } = separateText(block.core)}
    <td class={cn(className, 'max-w-[238px] border-r')}>
      <SimpleText {simpleText} {link} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}

  {#if block.plus}
    {@const { simpleText, label, tooltip, link } = separateText(block.plus)}
    <td class={cn(className, 'max-w-[238px]')}>
      <SimpleText {simpleText} {link} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
</tr>
