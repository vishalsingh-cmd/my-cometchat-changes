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
    'flex h-[34px] w-fit items-center gap-2 rounded-full border border-solid border-gray-12/[0.12] px-3 outline-none transition-all ease-smooth focus-within:border-brand-7 focus-within:shadow-focus hover:border-brand-6 active:border-brand-7 disabled:pointer-events-none disabled:opacity-[0.4] light:border-gray-11/[0.12] focus-within:light:border-brand-7 hover:light:border-brand-6 active:light:border-brand-7',
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
