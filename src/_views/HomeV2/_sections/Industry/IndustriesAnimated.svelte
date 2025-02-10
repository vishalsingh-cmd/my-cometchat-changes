<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { createSelectContext } from '$src/_comps/form/Select/SelectContext';
  import IndustryPoints from './_comps/IndustryPoints.svelte';
  import IndustryRoller from './_comps/IndustryRoller.svelte';
  import IndustrySelect from './_comps/IndustrySelect.svelte';
  import { industriesData } from './_datas/Industries.data';
  import { createIndustryContext } from './_context/IndustryContext';

  const { setActiveIndex } = createIndustryContext(0);
  const selectContext = createSelectContext('INDUSTRY_SELECT', 0);
  $: innerWidth = 0;

  selectContext.onChange((index) => {
    setActiveIndex(index);
  });
</script>

<svelte:window bind:innerWidth />
<div class={cn(['mt-10 grid grid-cols-1 gap-6'], ['lg:mt-14 lg:grid-cols-2 lg:gap-20'])}>
  {#if innerWidth < 1024}
    <IndustrySelect selectOptions={industriesData} {selectContext} />
  {/if}

  {#if innerWidth >= 1024}
    <IndustryRoller />
  {/if}

  <IndustryPoints />
</div>
