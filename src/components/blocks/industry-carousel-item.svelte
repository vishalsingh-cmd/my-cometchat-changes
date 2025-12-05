<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import { getIndustryContect } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  import { onMount } from 'svelte';
  import Link from '../buttons/link.svelte';

  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

  const { activeIndex } = getIndustryContect();

  export let onClick: (index: number) => void;
  export let index: number;
  export let icon: string;
  export let title: string;
  export let subHeading: string;
  export let description: string;
  export let points;
  export let link: string | undefined = undefined;
  export let linkText: string | undefined = undefined;

  $: status = $activeIndex === index ? 'active' : 'inactive';

  let contentElem: HTMLParagraphElement;
  let mounted = false; // 👈 flag to delay underline animation

  const handleOnClick = () => {
    onClick(index);
  };

  onMount(() => {
    mounted = true;
    contentElem?.setAttribute('style', `--scroll-height: ${contentElem.scrollHeight}px`);
  });
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
  <div class="grid grid-cols-[auto_1fr] gap-[16px] pb-[40px]">
    <!-- Icon -->
    <div
      class={cn([
        'h-8 w-8',
        'flex items-center justify-center',
        'rounded-md border border-[#FAFAFF] border-opacity-10',
        'transition-[border-color] duration-300',
        'group-hover/single_roller:border-opacity-100',
        'group-data-[state="active"]/single_roller:bg-[linear-gradient(180deg,_rgba(104,_82,_214,_0.03)_0%,_rgba(104,_82,_214,_0.15)_100%)]',
        'opacity-32 group-data-[state="active"]/single_roller:border-[#6852D6]'
      ])}
    >
      <Icon
        size="xs"
        {icon}
        class={cn([
          'h-[20px] w-[20px]',
          '[&_path]:fill-[url(#paint0_linear_1324_49788)]',
          '[&_path]:opacity-40 group-data-[state="active"]/single_roller:[&_path]:opacity-100',
          'group-data-[state="active"]/single_roller:[&_path]:fill-[#6852D6]',
          '[&_path]:transition-colors [&_path]:duration-300'
        ])}
      />
    </div>

    <!-- Text -->
    <div class="flex flex-col justify-center">
      <h3
        class={cn(
          [
            'text-left font-sans text-[16px] font-semibold text-[#FAFAFF]',
            'text-opacity-40 group-hover/single_roller:text-opacity-74',
            'transition-colors duration-300',
            'group-data-[state="active"]/single_roller:text-brand-9'
          ],
          ['leading-snug lg:text-[22px]']
        )}
      >
        {title}
      </h3>

      <!-- Hidden content -->
      <div
        class={cn([
          'flex flex-col gap-[16px] group-data-[state="active"]/single_roller:mt-2',
          'pointer-events-none h-0 overflow-hidden',
          'group-data-[state="active"]/single_roller:h-[var(--scroll-height)]',
          'group-data-[state="active"]/single_roller:pointer-events-auto',
          'transition-[height] duration-300'
        ])}
        bind:this={contentElem}
      >
        <p
          class={cn(
            ['text-gray-12', 'font-sans font-semibold leading-tighter tracking-none opacity-74'],
            [' text-xl']
          )}
        >
          {subHeading}
        </p>
        <p
          class={cn([
            'leading-snug tracking-[0.09px]',
            'font-sans text-lg font-medium text-gray-12 opacity-74'
          ])}
        >
          {description}
        </p>
        <div class="flex flex-col items-start gap-[12px] self-stretch">
          {#each points as point}
            <div class="flex items-start gap-[8px] self-stretch">
              <img src="/agent_lp_images/bullet_icon.png" alt="" class="" />
              <p
                class={cn(
                  ['opacity-74', 'text-left font-sans font-medium text-gray-12'],
                  ['text-[18px] font-medium leading-snug tracking-[0.09px]']
                )}
              >
                {point.text}
              </p>
            </div>
          {/each}
        </div>
        <div>
          {#if link}
            {@const { href, target } = getAnchorFromCmsLink(link)}
            <Link {target} {href} variant="primary" class="">
              {linkText}
            </Link>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Underline -->
  <div
    data-name="underline"
    class={cn([
      'h-[1px] w-full transform bg-brand-9',
      mounted && $activeIndex === index
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
