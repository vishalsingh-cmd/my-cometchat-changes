<script lang="ts">
  import Select from '$src/_comps/form/Select/Select.svelte';
  import SelectContent from '$src/_comps/form/Select/SelectContent.svelte';
  import SelectOption from '$src/_comps/form/Select/SelectOption.svelte';
  import SelectTrigger from '$src/_comps/form/Select/SelectTrigger.svelte';
  import IndustrySelectOption from './IndustrySelectOption.svelte';
  import ChevronDownIcon from '$src/_icons/ChevronDownIcon.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import { type SelectContext } from '$src/_comps/form/Select/SelectContext';
  import { type IndustriesProps } from '../_datas/Industries.data';
  import type { RollerPointStoryblok } from '$types/bloks';

  export let industryPointBlocks: RollerPointStoryblok[];
  export let selectOptions: IndustriesProps[];
  export let selectContext: SelectContext;

  const { activeIndex, setActiveIndex, isOpen, setIsOpen } = selectContext;
</script>

<Select isOpen={$isOpen} {setIsOpen}>
  <SelectTrigger
    isOpen={$isOpen}
    {setIsOpen}
    className={cn([
      'grid grid-cols-[1fr_auto] gap-2 items-center',
      'bg-[#FAFAFF] bg-opacity-10 px-4 py-3 w-full',
      'border border-[#FAFAFF] border-opacity-20 rounded-[10px]'
    ])}
  >
    {#if selectOptions[$activeIndex] && industryPointBlocks[$activeIndex]}
      <IndustrySelectOption
        isSelected={true}
        icon={selectOptions[$activeIndex].icon}
        title={industryPointBlocks[$activeIndex].title}
      />
      <ChevronDownIcon
        className={cn([
          'w-4 h-4',
          'transition-transform duration-300',
          'group-data-[state="opened"]/selectTrigger:rotate-180'
        ])}
      />
    {/if}
  </SelectTrigger>

  <SelectContent
    isOpen={$isOpen}
    className={cn([
      'absolute top-14 left-0 right-0 z-[1]',
      'py-4 bg-[#14131D]',
      'border border-[#FAFAFF] border-opacity-20 rounded-[10px]'
    ])}
  >
    {#each industryPointBlocks as industryPointBlock, index}
      <SelectOption {index} activeIndex={$activeIndex} {setActiveIndex} {setIsOpen}>
        <IndustrySelectOption
          className={cn(['py-4 px-4'])}
          isSelected={$activeIndex === index}
          icon={selectOptions[index].icon}
          title={industryPointBlock.title}
        />
      </SelectOption>
    {/each}
  </SelectContent>

  {#if industryPointBlocks[$activeIndex]}
    <p
      class={cn(
        ['mt-8 opacity-74', 'text-left font-sans text-md font-semibold text-[#FAFAFF]'],
        ['lg:text-[22px]']
      )}
    >
      {industryPointBlocks[$activeIndex].description}
    </p>
  {/if}
</Select>
