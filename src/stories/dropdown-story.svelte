<script lang="ts">
  import Dropdown from '$components/dropdown.svelte';

  let selectedIndustryIndex = 0;

  const onOptionSelect = (e: CustomEvent) => {
    selectedIndustryIndex = e.detail.i;
  };

  const options = [
    {
      label: 'Option 1',
      value: 'option1',
      cometIllustration: 'team'
    },
    {
      label: 'Option 2',
      value: 'option2',
      cometIllustration: 'sports'
    }
  ];
</script>

<div data-theme="light" class="flex h-[200px] items-start justify-center gap-10">
  <Dropdown {options} selectedOption={selectedIndustryIndex} on:optionSelect={onOptionSelect} />
</div>
<div data-theme="dark" class="flex h-[200px] items-start justify-center gap-10 bg-gray-3">
  <Dropdown {options} selectedOption={selectedIndustryIndex} on:optionSelect={onOptionSelect} />
</div>

<style>
  div {
    padding: 20px;
  }
</style>
