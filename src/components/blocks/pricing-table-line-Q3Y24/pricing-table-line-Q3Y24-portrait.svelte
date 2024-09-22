<script lang="ts">
  import { cn } from '$lib/utils';
  import Tooltip from './tooltip.svelte';
  import SimpleText from './simple-text.svelte';
  import Label from './label.svelte';
  export let block;
  export let plans;
  export let selectedOption;
  let className =
    'pl-4 relative py-5 border-gray-6 text-[14px] md:text-[16px] leading-[21.2px] font-medium text-[#FAFAFFA6]';
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

<tr class="border-b border-gray-6 text-center">
  {#if block.name_and_description}
    {@const { simpleText, label, tooltip } = separateText(block.name_and_description)}
    <td class={cn(className, 'w-[232px] border-r text-left')}>
      {simpleText}{#if label}
        <Label {label} />
      {/if}
      {#if tooltip}
        <Tooltip {tooltip} icon="info-circle-outlined" class="absolute -top-2 right-2" />
      {/if}
    </td>
  {/if}
  {#if block[plans[selectedOption].value.toLowerCase()]}
    {@const { simpleText, label, tooltip } = separateText(
      block[plans[selectedOption].value.toLowerCase()]
    )}
    <td class={cn(className, 'px-auto w-[100px]')}>
      <SimpleText {simpleText} />{#if label}
        <Label {label} />
      {/if}{#if tooltip}
        <Tooltip {tooltip} icon="plus-circle" />
      {/if}</td
    >
  {/if}
</tr>
