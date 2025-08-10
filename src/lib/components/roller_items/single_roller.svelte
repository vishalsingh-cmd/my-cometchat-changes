<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  // import GhostButton from '$src/components/buttons/ghost-button.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  // import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  // import type { standardLinkStoryblok } from '$src/types/bloks';
  import { getIndustryContect } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  import { onMount } from 'svelte';

  const { activeIndex } = getIndustryContect();

  export let onClick: (index: number) => void;
  export let index: number;
  export let icon: string;
  export let title: string;
  export let subHeading: string;
  export let description: string;
  export let points;

  // export let link: standardLinkStoryblok;

  $: status = $activeIndex === index ? 'active' : 'inactive';

  let contentElem: HTMLParagraphElement;
  // let interval: any;

  const handleOnClick = () => {
    onClick(index);
  };

  onMount(() => {
    contentElem.setAttribute('style', `--scroll-height: ${contentElem.scrollHeight}px`);
  });

  // const { href, target } = getAnchorFromCmsLink(link);
</script>

<div
  class={cn([
    'group/single_roller relative isolate flex cursor-pointer flex-col overflow-hidden',
    'border-b border-[#FAFAFF] border-opacity-10'
  ])}
  data-state={status}
  on:click={handleOnClick}
  on:keypress
>
  <div class="grid grid-cols-[auto_1fr] gap-4 pb-10">
    <!-- Icon -->
    <div
      class={cn([
        'flex h-8 w-8 items-center justify-center rounded-md border border-[#FAFAFF] border-opacity-10',
        'transition-[border-color] duration-300',
        'group-hover/single_roller:border-opacity-100',
        'group-data-[state="active"]/single_roller:bg-[linear-gradient(180deg,_rgba(255,_113,_41,_0.03)_0%,_rgba(255,_113,_41,_0.15)_100%)]',
        'group-data-[state="active"]/single_roller:border-brand-9'
      ])}
    >
      <Icon
        size="xs"
        {icon}
        class={cn([
          '[&_path]:fill-[url(#paint0_linear_1324_49788)]',
          '[&_path]:opacity-40 group-data-[state="active"]/single_roller:[&_path]:opacity-100',
          'group-data-[state="active"]/single_roller:[&_path]:fill-brand-9',
          '[&_path]:transition-colors [&_path]:duration-300',
          'flex items-center justify-center'
        ])}
      />
    </div>

    <!-- Text -->
    <div class="flex flex-col justify-center">
      <h3
        class={cn(
          [
            'text-left font-sans text-[16px] font-semibold text-[#FAFAFF]',
            'text-opacity-40 group-hover/single_roller:text-opacity-100',
            'transition-colors duration-300',
            'group-data-[state="active"]/single_roller:text-brand-9'
          ],
          ['lg:text-[22px]']
        )}
      >
        {title}
      </h3>

      <!-- Hidden content -->
      <div
        class={cn([
          'flex flex-col gap-2 group-data-[state="active"]/single_roller:mt-2',
          'pointer-events-none h-0 overflow-hidden',
          'group-data-[state="active"]/single_roller:h-[var(--scroll-height)]',
          'group-data-[state="active"]/single_roller:pointer-events-auto',
          'transition-[height] duration-300'
        ])}
        bind:this={contentElem}
      >
        <p
          class={cn(
            ['text-gray-11', 'text-left font-sans font-semibold leading-tighter tracking-none'],
            ['mb-3 text-xl']
          )}
        >
          {subHeading}
        </p>
        <p
          class={cn(
            ['leading-snug tracking-wide', 'text-left font-sans font-medium text-gray-11'],
            ['text-[18px]']
          )}
        >
          {description}
        </p>
        <div>
          {#each points as point}
            <div class="flex items-center gap-2">
              <img src="/agent_lp_images/bullet_icon.png" alt="" class="h-[16px] w-[16px]" />
              <p
                class={cn(
                  ['opacity-74', 'text-left font-sans font-medium text-gray-11'],
                  ['mb-2 text-[18px] font-medium leading-snug tracking-wide']
                )}
              >
                {point}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Underline -->
  <div
    data-name="underline"
    class={cn([
      'h-[1px] w-full bg-brand-9',
      $activeIndex === index
        ? 'translate-x-0 transition-transform duration-[20000ms]'
        : '-translate-x-full transition-none'
    ])}
  />
</div>

<style>
  [data-anim='active'] [data-state='active'] [data-name='underline'] {
    @apply translate-x-0;
  }
</style>
