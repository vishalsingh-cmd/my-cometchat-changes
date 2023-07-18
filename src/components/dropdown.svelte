<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Icon from '$components/icon/icon.svelte';
  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';

  import { cn } from '$lib/utils';
  import { clickOutside } from '$lib/actions/click-outside';

  const dispatch = createEventDispatcher();

  export let options: {
    label: string;
    value: string;
    cometIllustration?: IllustrationOptions;
  }[];
  export let selectedOption = 0;
  export let disabled = false;

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<div class="relative isolate z-10">
  <button
    class={cn(
      'px-3',
      'flex items-center gap-2',
      'h-[38px] w-fit',
      'rounded-full',
      'border border-solid border-brand-11/20',
      'text-brand-12',
      'outline-none',
      'ring-brand-9/20',
      'transition-all ease-smooth',
      'focus-within:border-brand-7 focus-within:shadow-focus',
      'hover:border-brand-9/50',
      'focus-visible:border-brand-9/50 focus-visible:shadow-focus focus-visible:ring-4',
      'active:border-brand-7 active:border-brand-9/80 active:shadow-focus ',
      'disabled:pointer-events-none disabled:opacity-60',
      !options[selectedOption].cometIllustration && 'pl-4'
    )}
    on:click={toggle}
    {disabled}
    {...$$restProps}
  >
    {#if options[selectedOption].cometIllustration}
      <CometIllustration
        class="inline-block scale-[1.4]"
        illustration={options[selectedOption].cometIllustration ?? 'community'}
        size="sm"
      />
    {/if}
    <span class="text-md font-semibold leading-tight tracking-wide text-gray-12">
      {options[selectedOption].label}
    </span>
    <Icon
      class="text-gray-12 opacity-54 light:text-gray-11"
      size="xs"
      icon={isOpen ? 'chevron-up' : 'chevron-down'}
    />
  </button>
  {#if isOpen}
    <div
      class="border-px absolute left-1/2 top-[46px] flex max-h-[290px] w-[300px] -translate-x-1/2 flex-col overflow-y-scroll rounded-2xl border border-solid border-gray-12/[0.04] bg-gray-3/80 p-1.5 backdrop-blur-[15px]"
      use:clickOutside={() => {
        toggle();
      }}
    >
      {#each options as option, i}
        <button
          class="transition-smooth flex flex-row items-center justify-between gap-2 rounded-xl bg-gray-12/0 p-2.5 transition hover:bg-gray-12/5"
          on:click={() => {
            toggle();
            dispatch('optionSelect', {
              i: i
            });
          }}
        >
          <span class="flex items-center gap-2.5">
            <CometIllustration
              class="inline-block scale-[1.4]"
              illustration={option.cometIllustration ?? 'community'}
              size="sm"
            />
            {option.label}
          </span>
          {#if i === selectedOption}
            <Icon class="text-brand-9" size="xs" icon="check" />
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
