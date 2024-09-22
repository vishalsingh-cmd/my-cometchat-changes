<script lang="ts">
  import { cn } from '$lib/utils';
  import Tooltip from './tooltip.svelte';
  import SimpleText from './simple-text.svelte';
  import Label from './label.svelte';
  export let block;
  let className =
    'relative min-w-[238px] text-[#FAFAFFA6] py-5 pl-0 border-gray-4 text-[16px] leading-[21.2px] font-medium';
  function separateText(text: string) {
    let simpleText = '';
    let label = '';
    let tooltip = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '{') {
        for (i++; text[i] !== '}'; i++) {
          tooltip += text[i];
        }
        i++;
      } else if (text[i] === '[') {
        for (i++; text[i] !== ']'; i++) {
          label += text[i];
        }
        i++;
      } else {
        simpleText += text[i];
      }
    }
    return { simpleText, label, tooltip };
  }
</script>

<tr class="border-b border-gray-4 text-center">
  {#if block.name_and_description}
    {@const { simpleText, label, tooltip } = separateText(block.name_and_description)}
    <td
      class={cn(className, 'max-w-[440px] border-r pl-4 text-left lg:w-[440px] lg:min-w-[440px]')}
    >
      {simpleText}{#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="info-circle-outlined" class="absolute right-2 top-0" />
      {/if}
    </td>
  {/if}
  {#if block.build}
    {@const { simpleText, label, tooltip } = separateText(block.build)}
    <td class={cn(className, 'max-w-[238px] border-r')}>
      <SimpleText {simpleText} />
      {#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.basic}
    {@const { simpleText, label, tooltip } = separateText(block.basic)}
    <td class={cn(className, 'max-w-[238px] border-r')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.advanced}
    {@const { simpleText, label, tooltip } = separateText(block.advanced)}
    <td class={cn(className, 'max-w-[238px] border-r bg-[#6852D61A]')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.enterprise}
    {@const { simpleText, label, tooltip } = separateText(block.enterprise)}
    <td class={cn(className, 'max-w-[238px]')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
</tr>
