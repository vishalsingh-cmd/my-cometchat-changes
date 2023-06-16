<script lang="ts" context="module">
  import type { MultilinkStoryblok } from '$types/bloks';

  export type InfoItemType = {
    icon?: {
      icon: string;
      colour: 'brand' | 'orange';
    };
    title: string;
    description: string;
    link?: {
      label: string;
      link: MultilinkStoryblok;
    };
  };
</script>

<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  let className: undefined | string = undefined;
  export { className as class };
  export let item: InfoItemType;
</script>

<div class={cn('flex flex-col items-start gap-2.5', className)}>
  {#if item.icon}
    <div
      class={cn(
        'flex h-[38px] w-[38px] items-center justify-center rounded-full',
        item.icon.colour === 'orange' && 'bg-orange-9/15 text-orange-9',
        item.icon.colour === 'brand' && 'bg-brand-9/10 text-brand-9'
      )}
    >
      <Icon size="xs" icon={item.icon.icon} />
    </div>
  {/if}
  <div class="flex flex-col gap-1 text-lg text-gray-12">
    <p class="font-semibold leading-tight">{item.title}</p>
    <p class="font-medium leading-snug tracking-wide opacity-74">{item.description}</p>
  </div>
  {#if item.link}
    {@const { target, rel, href } = getAnchorFromCmsLink(item.link.link)}
    <GhostButton variant="highlighted" as="a" {target} {rel} {href}>{item.link.label}</GhostButton>
  {/if}
</div>
