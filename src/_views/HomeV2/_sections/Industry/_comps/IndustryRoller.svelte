<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { gsap } from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import { onMount, onDestroy } from 'svelte';
  import { getIndustryContect } from '../_context/IndustryContext';
  import IndustryRollerItem from './IndustryRollerItem.svelte';
  import type { RollerPointStoryblok } from '$types/bloks';

  let interval: ReturnType<typeof setInterval> | null;
  let containerElem: HTMLDivElement;
  const { activeIndex, setActiveIndex } = getIndustryContect();
  export let industryPointBlocks: RollerPointStoryblok[];

  onMount(() => {
    if (!containerElem) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: containerElem,
      start: 'top center',
      once: true,
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
      setActiveIndex(($activeIndex + 1) % industryPointBlocks.length);
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

<div class={cn(['group/containerElem', 'flex flex-col gap-10'])} bind:this={containerElem}>
  {#each industryPointBlocks as industryPointBlock, index}
    <IndustryRollerItem
      {index}
      onClick={handleClick}
      icon={industryPointBlock.icon}
      title={industryPointBlock.title}
      description={industryPointBlock.description}
      link={industryPointBlock.link?.toString()}
      status={index === $activeIndex ? 'active' : 'inactive'}
    />
  {/each}
</div>
