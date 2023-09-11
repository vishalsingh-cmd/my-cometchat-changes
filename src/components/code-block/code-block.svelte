<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Code from '$components/code-block/highlighted-code.svelte';

  const dispatch = createEventDispatcher();

  let className: string | undefined = undefined;
  export { className as class };

  export let snippets: { code: string; codeToCopy: string; language: string; label: string }[];

  export let selectedLanguageIndex = 0;

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
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<div
  data-theme="dark"
  class={cn(
    'relative flex h-full flex-col rounded-3xl border border-solid border-gray-5 bg-gray-1 lg:bg-gray-2/60',
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
    {#each snippets as { label }, i}
      <button
        on:click={() => {
          dispatch('languageSelect', {
            i: i
          });
        }}
        class={cn(
          'relative flex min-w-fit items-center p-5 text-md font-semibold',
          i === selectedLanguageIndex ? 'text-gray-12' : 'text-gray-12/60',
          'border-b border-solid hover:text-gray-12/100',
          i === selectedLanguageIndex
            ? 'border-brand-9 hover:border-solid'
            : 'border-gray-5 hover:border-solid',
          i === selectedLanguageIndex ? 'border-solid border-brand-9' : 'border-solid border-gray-5'
        )}
      >
        {label}
      </button>
    {/each}
  </div>
  <div class="h-full overflow-scroll">
    {#each snippets as snippet, i}
      {#if i === selectedLanguageIndex}
        {@const { code, language } = snippet}
        <Code {code} {language} />
      {/if}
    {/each}
  </div>
  <div class="justify-self-end border-t border-gray-5 p-4 md:p-5">
    <GhostButton
      on:click={() => navigator.clipboard.writeText(snippets[selectedLanguageIndex].codeToCopy)}
    >
      Copy code
      <Icon icon="copy-01" size="sm" />
    </GhostButton>
  </div>
</div>
