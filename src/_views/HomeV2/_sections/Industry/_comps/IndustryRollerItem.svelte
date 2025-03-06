<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';
  import { onMount } from 'svelte';

  export let index: number;
  export let icon;
  export let title;
  export let description;
  export let link: string;
  export let status: 'active' | 'inactive';
  export let onClick: (index: number) => void;

  let contentElem: HTMLParagraphElement;

  const handleOnClick = () => {
    onClick(index);
  };

  onMount(() => {
    contentElem.setAttribute('style', `--scroll-height: ${contentElem.scrollHeight}px`);
  });
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
        'mt-0.5 h-8 w-8',
        'flex items-center justify-center',
        'rounded-md border border-[#FAFAFF] border-opacity-10',
        'transition-[border-color] duration-300',
        'group-hover/industryRollerItem:border-opacity-100',
        'group-data-[state="active"]/industryRollerItem:bg-[linear-gradient(180deg,_rgba(255,_113,_41,_0.03)_0%,_rgba(255,_113,_41,_0.15)_100%)]',
        'group-data-[state="active"]/industryRollerItem:border-[#FF7129]'
      ])}
    >
      <svelte:component
        this={icon}
        className={cn([
          'group-data-[state="active"]/industryRollerItem:[&_path]:fill-[#FF7129]',
          '[&_path]:transition-colors [&_path]:duration-300'
        ])}
      />
    </div>

    <div class="flex flex-col justify-center gap-2">
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
          'flex flex-col gap-2',
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

        <GhostButton variant="highlighted" class="w-max" href={link} as="a" taget="_blank">
          Read more
        </GhostButton>
      </div>
    </div>
  </div>

  <div
    class={cn([
      'h-[1px] w-full -translate-x-full bg-[#FF7F3E]',
      'transition-transform duration-200',
      'group-data-[state="active"]/industryRollerItem:duration-[8000ms]',
      'group-data-[state="active"]/industryRollerItem:translate-x-0'
    ])}
  />
</div>
