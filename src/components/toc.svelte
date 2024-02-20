<script lang="ts">
  import { cn } from '$lib/utils';
  import TocButton from './toc-button.svelte';
  import { createEventDispatcher } from 'svelte';
  import scrollDirection from '$lib/stores/scroll-direction';

  const dispatch = createEventDispatcher();
  let activeIndex = -1;

  export let menuOpen = false;
  export let headings: HTMLHeadingElement[] = [];
  export let activeHeadingIndex = 0;
</script>

<section class=" sticky top-20 z-40 inline-block min-w-[300px] gap-3 md:hidden">
  <TocButton
    on:click={() => (menuOpen = !menuOpen)}
    {menuOpen}
    activeHeading={headings && headings[activeHeadingIndex]
      ? headings[activeHeadingIndex].innerText
      : 'Table of content'}
  />

  {#if headings.length > 0}
    <div
      class={cn(
        'bg-gray-100 absolute z-30 min-w-[230px] max-w-[500px] rounded-lg border border-gray-6 bg-white py-5',
        menuOpen ? 'block' : 'hidden',
        {
          'translate-y-0': $scrollDirection === 'up',
          '-translate-y-16': $scrollDirection === 'down' && scrollY > 100 && activeIndex === -1
        }
      )}
    >
      {#each headings as heading, i}
        <button
          class={cn(
            'relative px-3 py-2 text-left text-lg font-semibold leading-tight opacity-50',
            activeHeadingIndex === i && 'opacity-100',
            i === 0 &&
              'after:absolute after:-left-3 after:top-0 after:h-0.5 after:w-0.5 after:-translate-x-[0.5px] after:rounded-full after:bg-brand-9 after:shadow-[0_0_8px_8px_hsl(var(--color-brand-9)/0.05)]',
            i !== 0 && 'pt-4',
            (i < activeHeadingIndex || activeHeadingIndex === i) &&
              'opacity-100 before:absolute before:-left-3 before:top-0 before:h-full before:w-px before:bg-brand-9'
          )}
          on:click={() => {
            activeHeadingIndex = i;
            dispatch('scrollIntoView', { i: heading });

            menuOpen = false;
          }}
        >
          {heading.innerText}
        </button>
      {/each}
    </div>
  {/if}
</section>
