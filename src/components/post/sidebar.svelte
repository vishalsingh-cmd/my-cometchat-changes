<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import Background from './assets/background.png';
  import Share from './share.svelte';

  const dispatch = createEventDispatcher();

  export let headings: HTMLHeadingElement[] = [];
  export let activeHeadingIndex = 0;
</script>

<div
  class="wrap sticky top-[80px] hidden h-fit w-full max-w-[272px] overflow-visible pb-6 md:block"
>
  <div class="relative flex h-full w-fit flex-col justify-between">
    <div class="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-gray-5 to-gray-5/0" />
    <img
      src={Background}
      alt=""
      draggable="false"
      class="pointer-events-none absolute -bottom-1/2 -right-1/4 min-h-[680px] min-w-[680px] select-none opacity-20"
    />
    <div class="ml-3 inline-flex flex-col items-start">
      {#if headings.length > 0}
        {#each headings as heading, i}
          <button
            class={cn(
              'relative text-left text-lg font-semibold leading-tight opacity-54',
              activeHeadingIndex === i && 'opacity-100',
              i === 0 &&
                'after:absolute after:-left-3 after:top-0 after:h-0.5 after:w-0.5 after:-translate-x-[0.5px] after:rounded-full after:bg-brand-9 after:shadow-[0_0_8px_8px_hsl(var(--color-brand-9)/0.05)]',
              i !== 0 && 'pt-4',
              (i < activeHeadingIndex || activeHeadingIndex === i) &&
                'opacity-100 before:absolute before:-left-3 before:top-0 before:h-full before:w-px before:bg-brand-9'
            )}
            on:click={() => {
              activeHeadingIndex = i;

              dispatch('scrollIntoView', {
                i: heading
              });
            }}
          >
            {heading.innerHTML}
          </button>
        {/each}
      {/if}
    </div>
    <Share class="ml-3 mt-[100px]" />
  </div>
</div>
