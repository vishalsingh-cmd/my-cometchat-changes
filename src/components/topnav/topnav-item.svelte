<script lang="ts">
  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';
  import Icon from '$components/icon/icon.svelte';
  import { cn } from '$lib/utils';

  export let title: string;
  export let description: string | undefined = undefined;
  export let asset:
    | { icon: string; color?: 'primary' | 'secondary' }
    | { illustration: IllustrationOptions };
  export let href: string;
  export let size: 'regular' | 'big' = 'regular';

  let className: undefined | string = undefined;
  export { className as class };
</script>

<a {href} class={cn('group', className)}>
  <div
    class={cn(
      'text-gray-12',
      size === 'regular' ? 'flex items-center gap-2' : 'flex flex-col gap-4'
    )}
  >
    {#if 'icon' in asset}
      <Icon
        size={size === 'big' ? 'lg' : 'xs'}
        icon={asset.icon}
        class={cn(asset.color === 'secondary' ? 'text-gray-10' : 'text-brand-9')}
      />
    {:else}
      <CometIllustration size={size === 'big' ? 'lg' : 'sm'} illustration={asset.illustration} />
    {/if}
    <p
      class={cn(
        'font-semibold opacity-74 transition-all group-hover:opacity-100',
        size === 'big' ? 'text-xl' : 'text-md tracking-wide'
      )}
    >
      {title}
    </p>
  </div>
  {#if description}
    <p
      class={cn(
        'font-medium tracking-wide opacity-64 transition-all group-hover:opacity-80',
        size === 'big' ? 'mt-1 text-lg leading-snug' : 'text-sm leading-normal'
      )}
    >
      {description}
    </p>
  {/if}
</a>
