<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';
  import Icon from '$src/components/icon/icon.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { standardLinkStoryblok } from '$src/types/bloks';
  import { onMount } from 'svelte';

  export let index: number;
  export let icon: string;
  export let title;
  export let description;
  export let link: standardLinkStoryblok;
  export let status: 'active' | 'inactive';
  export let onClick: (index: number) => void;

  let contentElem: HTMLParagraphElement;

  const handleOnClick = () => {
    onClick(index);
  };

  onMount(() => {
    contentElem.setAttribute('style', `--scroll-height: ${contentElem.scrollHeight}px`);
  });

  const { href, target } = getAnchorFromCmsLink(link);
</script>

<div
  class={cn([
    'group/industryRollerItem',
    'relative isolate flex cursor-pointer flex-col overflow-hidden',
    'border-b border-[#FAFAFF] border-opacity-10'
  ])}
  data-state={status}
  on:click={handleOnClick}
  on:keypress
>
  <div class="grid grid-cols-[auto_1fr] gap-4 pb-10">
    <div
      class={cn([
        'h-8 w-8',
        'flex items-center justify-center',
        'rounded-md border border-[#FAFAFF] border-opacity-10',
        'transition-[border-color] duration-300',
        'group-hover/industryRollerItem:border-opacity-100',
        'group-data-[state="active"]/industryRollerItem:bg-[linear-gradient(180deg,_rgba(255,_113,_41,_0.03)_0%,_rgba(255,_113,_41,_0.15)_100%)]',
        'group-data-[state="active"]/industryRollerItem:border-[#FF7129]'
      ])}
    >
      <Icon
        size="xs"
        {icon}
        class={cn([
          '[&_path]:fill-[url(#paint0_linear_1324_49788)]',
          '[&_path]:opacity-40 group-data-[state="active"]/industryRollerItem:[&_path]:opacity-100',
          'group-data-[state="active"]/industryRollerItem:[&_path]:fill-[#FF7129]',
          '[&_path]:transition-colors [&_path]:duration-300'
        ])}
      />
    </div>

    <div class="flex flex-col justify-center">
      <h3
        class={cn(
          [
            'text-left font-sans text-[16px] font-semibold text-[#FAFAFF]',
            'text-opacity-40 group-hover/industryRollerItem:text-opacity-100',
            'transition-colors duration-300',
            'group-data-[state="active"]/industryRollerItem:text-[#FF7129]'
          ],
          ['lg:text-[22px]']
        )}
      >
        {title}
      </h3>

      <div
        class={cn([
          'flex flex-col gap-2 group-data-[state="active"]/industryRollerItem:mt-4',
          'pointer-events-none h-0 overflow-hidden',
          'group-data-[state="active"]/industryRollerItem:h-[var(--scroll-height)]',
          'group-data-[state="active"]/industryRollerItem:pointer-events-auto',
          'transition-[height] duration-300'
        ])}
        bind:this={contentElem}
      >
        <p
          class={cn(
            ['opacity-74', 'text-left font-sans text-[16px] font-semibold text-[#FAFAFF]'],
            ['lg:text-[22px]']
          )}
        >
          {description}
        </p>

        <GhostButton variant="highlighted" class="w-max" {href} as="a" {target}>
          Read more
        </GhostButton>
      </div>
    </div>
  </div>

  <div
    data-name="underline"
    class={cn([
      'h-[1px] w-full -translate-x-full bg-[#FF7F3E]',
      'transition-transform duration-200',
      'group-data-[state="active"]/industryRollerItem:duration-[8000ms]',
      ' group-data-[anim="active"]/containerElem:group-data-[state="active"]/industryRollerItem:translate-x-0 '
    ])}
  />
</div>

<style>
  [data-anim='active'] [data-state='active'] [data-name='underline'] {
    @apply translate-x-0;
  }
</style>
