<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import Illustration from '$components/colour-picker/assets/Illustration.svelte';

  import { cn } from '$lib/utils';

  const button = cva(
    [
      'h-5',
      'w-5',
      'rounded-full',
      'shadow-[inset_0_0_0px_1px_hsl(var(--color-gray-7)/0.2)]',
      'hover:outline-1',
      'hover:outline',
      'hover:outline-offset-2'
    ],
    {
      variants: {
        colour: {
          'purple-9': `bg-purple-9 hover:outline-purple-9`,
          'red-9': `bg-red-9 hover:outline-red-9`,
          'orange-9': `bg-orange-9 hover:outline-orange-9`,
          'green-9': `bg-green-9 hover:outline-green-9`,
          'blue-11': `bg-blue-11 hover:outline-blue-11`,
          'brand-9': `bg-brand-9 hover:outline-brand-9`,
          'blue-7': `bg-blue-7 hover:outline-blue-7`,
          'gray-6': `bg-gray-6 hover:outline-gray-6`
        },
        isActive: {
          true: `outline-offset-2`
        }
      },
      compoundVariants: [
        {
          colour: 'purple-9',
          isActive: true,
          className: `outline-1 outline outline-purple-9`
        },
        {
          colour: 'red-9',
          isActive: true,
          className: `outline-1 outline outline-red-9`
        },
        {
          colour: 'orange-9',
          isActive: true,
          className: `outline-1 outline outline-orange-9`
        },
        {
          colour: 'orange-9',
          isActive: true,
          className: `outline-1 outline outline-orange-9`
        },
        {
          colour: 'green-9',
          isActive: true,
          className: `outline-1 outline outline-green-9`
        },
        {
          colour: 'blue-11',
          isActive: true,
          className: `outline-1 outline outline-blue-11`
        },
        {
          colour: 'brand-9',
          isActive: true,
          className: `outline-1 outline outline-brand-9`
        },
        {
          colour: 'blue-7',
          isActive: true,
          className: `outline-1 outline outline-blue-7`
        },
        {
          colour: 'gray-6',
          isActive: true,
          className: `outline-1 outline outline-gray-6`
        }
      ]
    }
  );

  const illustration = cva([], {
    variants: {
      colour: {
        'purple-9': `text-purple-9`,
        'red-9': `text-red-9`,
        'orange-9': `text-orange-9`,
        'green-9': `text-green-9`,
        'blue-11': `text-blue-11`,
        'brand-9': `text-brand-9`,
        'blue-7': `text-blue-7`,
        'gray-6': `text-gray-6`
      }
    }
  });

  const colours = [
    'purple-9',
    'red-9',
    'orange-9',
    'green-9',
    'blue-11',
    'brand-9',
    'blue-7',
    'gray-6'
  ] as VariantProps<typeof button>['colour'][];

  let selectedColourIndex = 0;

  const changeSelectedColour = (index: number) => {
    selectedColourIndex = index;
  };
</script>

<div class="flex flex-col md:items-center">
  <div class="mb-5 w-fit">
    <p class="mb-3 text-sm font-semibold leading-normal tracking-widest text-gray-12/54">
      Pick a color
    </p>
    <div class="flex gap-2">
      {#each colours as colour, i}
        {@const isActive = selectedColourIndex === i}
        <button class={cn(button({ colour, isActive }))} on:click={() => changeSelectedColour(i)} />
      {/each}
    </div>
  </div>
  <div class="relative">
    <div
      class="absolute bottom-0 left-[-20px] h-[360px] w-[205px] bg-gradient-to-r from-gray-1 to-gray-1/0 md:right-[79px] md:h-full md:w-[473px] md:to-30%"
    />
    <Illustration class={cn(illustration({ colour: colours[selectedColourIndex] }), 'w-full')} />
  </div>
</div>
