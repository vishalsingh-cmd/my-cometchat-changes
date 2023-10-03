<script lang="ts">
  import { cn } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';
  import type { AssetStoryblok } from '$types/bloks';

  import { getImageAttributes } from '$lib/storyblok';

  import Media from '$components/media.svelte';
  import Icon from '$components/icon/icon.svelte';

  let className: string | undefined = undefined;
  export { className as class };

  const dispatch = createEventDispatcher();

  let container: HTMLElement | undefined = undefined;
  let isThereLeftOverflow = false;
  let isThereRightOverflow = false;
  let scrollMovement = 0;

  $: if (container) {
    const widthOfAllButtons = container.scrollWidth;

    if (widthOfAllButtons > container.clientWidth) {
      if (container.scrollLeft > 0) {
        isThereLeftOverflow = true;
      } else {
        isThereLeftOverflow = false;
      }

      if (container.scrollLeft < widthOfAllButtons - container.clientWidth) {
        isThereRightOverflow = true;
      } else {
        isThereRightOverflow = false;
      }
    }
  }

  const scrollElements = (direction: 'left' | 'right') => {
    if (container) {
      const movement = 200;

      container.scrollBy({
        left: direction === 'left' ? -movement : movement,
        behavior: 'smooth'
      });

      if (direction === 'left') {
        scrollMovement -= movement;
      } else {
        scrollMovement += movement;
      }

      if (scrollMovement > 0) {
        isThereLeftOverflow = true;
      } else {
        isThereLeftOverflow = false;
      }

      if (scrollMovement < container.scrollWidth - container.clientWidth) {
        isThereRightOverflow = true;
      } else {
        isThereRightOverflow = false;
      }
    }
  };

  export let tabs: { logo: AssetStoryblok; image: AssetStoryblok }[];
  export let selectedTabIndex = 0;
</script>

<div
  data-theme="dark"
  class={cn(
    'relative flex h-full max-h-[400px] flex-col overflow-hidden rounded-3xl border border-solid border-gray-5 bg-gray-1 md:max-h-[540px] lg:bg-gray-2/60',
    className
  )}
>
  {#if isThereLeftOverflow}
    <div
      class="absolute left-0 top-0 isolate z-20 flex h-[50px] w-[80px] items-center justify-start rounded-tl-3xl bg-gradient-to-r from-gray-2 from-50% to-gray-2/0"
    >
      <button
        on:click={() => {
          if (container) {
            scrollElements('left');
          }
        }}
        class="flex h-[50px] w-[50px] items-center justify-center"
      >
        <Icon icon="chevron-left-double" size="sm" class="block" />
      </button>
    </div>
  {/if}
  {#if isThereRightOverflow}
    <div
      class="absolute right-0 top-0 isolate z-20 flex h-[50px] w-[80px] items-center justify-end rounded-tr-3xl bg-gradient-to-l from-gray-2 from-50% to-gray-2/0"
    >
      <button
        on:click={() => {
          if (container) {
            scrollElements('right');
          }
        }}
        class="flex h-[50px] w-[50px] items-center justify-center"
      >
        <Icon icon="chevron-right-double" size="sm" class="block" />
      </button>
    </div>
  {/if}
  <div
    bind:this={container}
    class="flex overflow-x-auto break-all shadow-[inset_0_-1px_0_0] shadow-gray-5 md:overflow-hidden"
  >
    {#each tabs as { logo }, i}
      <button
        on:click={() => {
          dispatch('mediaTabSelect', {
            i: i
          });
        }}
        class={cn(
          'relative flex min-w-fit items-center p-5 text-md font-semibold',
          i === selectedTabIndex ? 'text-gray-12' : 'text-gray-12/60',
          'border-b border-solid hover:text-gray-12/100',
          i === selectedTabIndex
            ? 'border-brand-9 hover:border-solid'
            : 'border-gray-5 hover:border-solid',
          i === selectedTabIndex ? 'border-solid border-brand-9' : 'border-solid border-gray-5',
          i === selectedTabIndex ? 'opacity-100' : 'opacity-54'
        )}
      >
        <Media imageTransformOptions={{ size: [1000, 0] }} media={logo} class="max-h-4 w-fit" />
      </button>
    {/each}
  </div>
  <div class="h-full overflow-hidden">
    {#if tabs[selectedTabIndex].image}
      {@const { width } = getImageAttributes(tabs[selectedTabIndex].image)}
      {@const widthNumber = Number(width)}

      <div
        class="mb-12 mt-5 h-[400px] overflow-hidden md:h-[500px] md:max-h-[500px] lg:mb-0 lg:mt-0"
      >
        <Media
          imageTransformOptions={{ size: [1000, 0] }}
          media={tabs[selectedTabIndex].image}
          class={cn(
            widthNumber > 1014 && 'h-[350px] max-h-none max-w-max md:h-[500px]',
            widthNumber <= 1014 &&
              'ml-[50%] h-[350px] max-h-none max-w-max -translate-x-1/2 transform md:h-[500px]'
          )}
        />
      </div>
    {/if}
  </div>
</div>
