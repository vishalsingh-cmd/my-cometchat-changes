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
  <div class="flex overflow-x-auto break-all shadow-[inset_0_-1px_0_0] shadow-gray-5">
    {#each tabs as { logo }, i}
      <button
        on:click={() => {
          dispatch('mediaTabSelect', { i });
        }}
        class={cn(
          'relative flex min-w-fit items-center p-5 text-md font-semibold',
          'border-b border-solid hover:text-gray-12/100',
          i === selectedTabIndex
            ? 'border-brand-9 text-gray-12 opacity-100'
            : 'border-gray-5 text-gray-12/60 opacity-54'
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
