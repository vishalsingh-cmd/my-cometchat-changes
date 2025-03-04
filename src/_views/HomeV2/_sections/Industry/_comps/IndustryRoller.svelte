<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { gsap } from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import { onMount, onDestroy } from 'svelte';
  import { industriesData } from '../_datas/Industries.data';
  import { getIndustryContect } from '../_context/IndustryContext';
  import IndustryRollerItem from './IndustryRollerItem.svelte';
  import type { RollerPointStoryblok } from '$types/bloks';

  let interval: any;
  let containerElem: HTMLDivElement;
  const { activeIndex, setActiveIndex } = getIndustryContect();

  onMount(() => {
    if (!containerElem) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: containerElem,
      start: 'top center',
      onEnter: () => {
        containerElem?.setAttribute('data-anim', 'active');
        setActiveIndex(0);
        startAnimation();
      }
    });
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

  export let industryPointBlocks: RollerPointStoryblok[];
</script>

<div
  class={cn(['group/containerElem', 'flex flex-col gap-10'], ['lg:gap-8'])}
  bind:this={containerElem}
>
  {#each industryPointBlocks as industryPointBlock, index}
    <IndustryRollerItem
      {index}
      onClick={handleClick}
      icon={industriesData[index].icon}
      title={industryPointBlock.title}
      description={industryPointBlock.description}
      link={industryPointBlock.link.url}
      status={index === $activeIndex ? 'active' : 'inactive'}
    />
  {/each}
</div>
