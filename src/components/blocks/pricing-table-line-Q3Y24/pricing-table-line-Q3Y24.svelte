<script lang="ts">
  import { cn } from '$lib/utils';
  import Tooltip from './tooltip.svelte';
  import SimpleText from './simple-text.svelte';
  import Label from './label.svelte';
  export let block;
  let className =
    'relative px-2 py-5 border-gray-6 text-[16px] leading-[21.2px] font-medium opacity-64';
  function separateText(text: string) {
    let simpleText = '';
    let label = '';
    let tooltip = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '[') {
        for (i++; text[i] !== ']'; i++) {
          tooltip += text[i];
        }
        i++;
      } else if (text[i] === '(') {
        for (i++; text[i] !== ')'; i++) {
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

<tr class="border-b border-gray-6 text-center">
  {#if block.name_and_description}
    {@const { simpleText, label, tooltip } = separateText(block.name_and_description)}
    <td class={cn(className, 'w-[400px] border-r text-left')}>
      {simpleText}{#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="info-circle" class="right-2" />
      {/if}
    </td>
  {/if}
  {#if block.build}
    {@const { simpleText, label, tooltip } = separateText(block.build)}
    <td class={cn(className, 'w-[288px] border-r')}>
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
    <td class={cn(className, 'w-[288px] border-r')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.advanced}
    {@const { simpleText, label, tooltip } = separateText(block.advanced)}
    <td class={cn(className, 'w-[288px]  border-r')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
  {#if block.enterprise}
    {@const { simpleText, label, tooltip } = separateText(block.enterprise)}
    <td class={cn(className, 'w-[288px]')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
</tr>
