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
      'flex items-center',
      'h-[44px] w-fit',
      'gap-2',
      'px-3.5',

      'text-brand-12',

      'bg-gray-12/[0.02]',
      'hover:bg-brand-9/[0.03]',

      'border',
      'border-brand-12/10',
      'rounded-[14px]',
      'outline-none',

      'hover:border-brand-9/30',

      'focus-within:border-brand-9/40',
      'focus-within:bg-brand-9/[0.02]',

      'focus-visible:bg-brand-9/[0.02]',
      'focus-visible:ring-4',
      'ring-brand-9/30',

      'active:border-brand-7',
      'active:border-brand-9/60',
      'active:bg-brand-9/[0.02]',

      'disabled:opacity-60',
      'disabled:pointer-events-none',

      'transition-all ease-smooth',
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
    <span class="text-md font-semibold leading-tight tracking-wide">
      {options[selectedOption].label}
    </span>
    <Icon class="opacity-74" size="xs" icon={isOpen ? 'chevron-up' : 'chevron-down'} />
  </button>
  {#if isOpen}
    <div
      class="border-px absolute left-1/2 top-[46px] flex max-h-[290px] w-[300px] -translate-x-1/2 flex-col overflow-y-scroll rounded-2xl border border-gray-12/[0.04] bg-gray-3/80 p-1.5 backdrop-blur-[15px]"
      use:clickOutside={() => {
        toggle();
      }}
    >
      {#each options as option, i}
        <button
          class="transition-smooth flex flex-row items-center justify-between gap-2 rounded-xl bg-gray-12/0 px-3 py-[14px] transition hover:bg-gray-12/5"
          on:click={() => {
            toggle();
            dispatch('optionSelect', {
              i: i
            });
          }}
        >
          <span class="flex items-center gap-2.5 text-md font-semibold tracking-wide text-gray-12">
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
