<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { onMount, onDestroy } from 'svelte';
  import { industriesData } from '../_datas/Industries.data';
  import { getIndustryContect } from '../_context/IndustryContext';
  import IndustryRollerItem from './IndustryRollerItem.svelte';

  let interval: any;
  const { activeIndex, setActiveIndex } = getIndustryContect();

  onMount(() => {
    startAnimation();
  });

  onDestroy(() => {
    stopAnimation();
  });

  function startAnimation() {
    interval = setInterval(() => {
      setActiveIndex(($activeIndex + 1) % industriesData.length);
    }, 8000);
  }

  function stopAnimation() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function handleClick(index: number) {
    stopAnimation();
    setActiveIndex(index);
    startAnimation();
  }
</script>

<div class={cn(['flex flex-col gap-10'], ['lg:gap-8'])}>
  {#each industriesData as industry, index}
    <IndustryRollerItem
      {index}
      onClick={handleClick}
      icon={industry.icon}
      title={industry.title}
      description={industry.description}
      status={index === $activeIndex ? 'active' : 'inactive'}
    />
  {/each}
</div>
