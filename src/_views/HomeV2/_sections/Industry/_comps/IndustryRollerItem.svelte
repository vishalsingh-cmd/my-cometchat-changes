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

<button
  class={cn([
    'group',
    'relative isolate flex flex-col overflow-hidden',
    'border-b border-[#FAFAFF] border-opacity-10'
  ])}
  data-state={status}
  on:click={handleOnClick}
>
  <div class="grid grid-cols-[auto_1fr] gap-4 pb-10">
    <div
      class={cn([
        'h-8 w-8',
        'flex items-center justify-center',
        'rounded-md border border-[#FAFAFF] border-opacity-10',
        'transition-[border-color] duration-300',
        'group-hover:border-opacity-100',
        'group-data-[state="active"]:bg-[linear-gradient(180deg,_rgba(255,_113,_41,_0.03)_0%,_rgba(255,_113,_41,_0.15)_100%)]',
        'group-data-[state="active"]:border-[#FF7129]'
      ])}
    >
      <svelte:component
        this={icon}
        className={cn([
          'group-data-[state="active"]:[&_path]:fill-[#FF7129]',
          '[&_path]:transition-colors [&_path]:duration-300'
        ])}
      />
    </div>

    <div class="flex flex-col justify-center gap-2">
      <h3
        class={cn(
          [
            'text-left font-sans text-md font-semibold text-[#FAFAFF]',
            'text-opacity-40 group-hover:text-opacity-100',
            'transition-colors duration-300',
            'group-data-[state="active"]:text-[#FF7129]'
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
          'group-data-[state="active"]:h-[var(--scroll-height)]',
          'group-data-[state="active"]:pointer-events-auto',
          'transition-[height] duration-300'
        ])}
        bind:this={contentElem}
      >
        <p
          class={cn(
            ['opacity-74', 'text-left font-sans text-md font-semibold text-[#FAFAFF]'],
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
      'group-data-[state="active"]:translate-x-0',
      'transition-transform duration-200',
      'group-data-[state="active"]:duration-[8000ms]'
    ])}
  />
</button>
