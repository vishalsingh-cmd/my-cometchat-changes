<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';

  import { cn } from '$lib/utils';

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

<button
  class={cn(
    'px-3',
    'flex items-center gap-2',
    'h-[34px] w-fit',
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
  <div>
    {#each options as option}
      <p>{option.label}</p>
    {/each}
  </div>
{/if}
