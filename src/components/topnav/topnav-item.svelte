<script lang="ts" context="module">
  export const getItemAsset = (asset: {
    icon?: number | string;
    illustration?: number | string;
  }) => {
    if (asset.icon && typeof asset.icon === 'string') {
      return { icon: asset.icon };
    }

    if (asset.illustration && isValidIllustration(asset.illustration)) {
      return { illustration: asset.illustration };
    }
  };
</script>

<script lang="ts">
  import CometIllustration, {
    isValidIllustration,
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';
  import Icon from '$components/icon/icon.svelte';
  import { cn } from '$lib/utils';

  export let title: string;
  export let description: string | undefined = undefined;
  export let asset:
    | undefined
    | { icon: string; color?: 'primary' | 'secondary' }
    | { illustration: IllustrationOptions };
  export let href: string | undefined;
  export let target: '_blank' | '_self' | undefined = undefined;
  export let rel: string | undefined = undefined;
  export let size: 'regular' | 'big' = 'regular';

  let className: undefined | string = undefined;
  export { className as class };
</script>

<a {href} {rel} {target} class={cn('group', className)}>
  <div
    class={cn(
      'text-gray-12',
      size === 'regular' ? 'flex items-center gap-2' : 'flex flex-col gap-4'
    )}
  >
    <div class="flex flex-shrink-0">
      {#if asset && 'icon' in asset}
        <Icon
          size={size === 'big' ? 'lg' : 'xs'}
          icon={asset.icon}
          class={cn(asset.color === 'secondary' ? 'text-gray-10' : 'text-brand-9')}
        />
      {:else if asset}
        <CometIllustration size={size === 'big' ? 'lg' : 'sm'} illustration={asset.illustration} />
      {/if}
    </div>
    <p
      class={cn(
        'font-semibold opacity-74 transition-all group-hover:opacity-100',
        size === 'big' ? 'text-xl' : 'text-md tracking-wide'
      )}
    >
      {title}
    </p>
    {#if target === '_blank'}
      <Icon
        size={size === 'big' ? 'lg' : 'xs'}
        icon="link-external-02"
        class="hidden group-hover:block"
      />
    {/if}
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
