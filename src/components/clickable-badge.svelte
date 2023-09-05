<script lang="ts">
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import Icon from './icon/icon.svelte';

  export let review: number;
  let className: undefined | string = undefined;
  export { className as class };

  const clickableBadge = cn(
    'inline-flex items-center gap-[3px] break-keep min-w-fit max-w-fit',
    'text-sm font-semibold tracking-widest leading-normal text-brand-10',

    'py-1 px-1.5',
    'rounded-[10px]',

    'bg-brand-10/[0.12]',
    'active:bg-brand-10/20',
    'focus-visible:bg-brand-10/[0.12]',

    'transition-colors ease-smooth',

    'outline-none',
    'ring-brand-9/30',
    'focus-visible:ring-4',

    'disabled:opacity-40',
    'disabled:pointer-events-none'
  );
</script>

{#if review}
  {@const reviewG2Text = string('reviews.g2_text')}
  <svelte:element
    this={$$restProps.href ? 'a' : 'div'}
    on:click
    on:focus
    {...$$restProps}
    class={cn(clickableBadge, $$restProps.href && 'hover:bg-brand-10/[0.16]', className)}
  >
    <div class="flex items-center justify-center gap-0.5">
      <Icon icon="star-01" size="xs" class="flex-shrink-0 text-brand-9" />
      {review}
    </div>
    {#if reviewG2Text}
      • {reviewG2Text}
    {/if}
  </svelte:element>
{/if}
