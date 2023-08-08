<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { PanelItemStoryblok } from '$types/bloks';

  let className: undefined | string = undefined;
  export { className as class };
  export let item: PanelItemStoryblok;

  const typeIcon = (icon: string | number) => {
    return icon as string;
  };
</script>

<div class={cn('flex flex-col items-start gap-2 md:gap-3', className)}>
  {#if item.icon}
    {@const typedIcon = typeIcon(item.icon)}
    <div
      class={cn(
        'flex h-[38px] w-[38px] items-center justify-center rounded-full',
        item.accent_colour === 'orange' && 'bg-orange-9/15 text-orange-9',
        item.accent_colour === 'brand' && 'bg-brand-9/10 text-brand-9'
      )}
    >
      <Icon size="xs" icon={typedIcon} />
    </div>
  {/if}
  <div class="flex flex-col gap-1 text-lg text-gray-12">
    <h3 class="font-semibold leading-tight">{item.title}</h3>
    <p class="font-medium leading-snug tracking-wide opacity-64">{item.description}</p>
  </div>
  {#if item.list && item.list.length > 0}
    <ul>
      {#each item.list as listItem}
        <li class="font-medium leading-snug tracking-wide opacity-64">{listItem}</li>
      {/each}
    </ul>
  {/if}
  {#if item.link && item.link[0]}
    {@const { target, rel, href } = getAnchorFromCmsLink(item.link[0])}
    <GhostButton variant="highlighted" as="a" {target} {rel} {href}>
      {item.link[0].label}
    </GhostButton>
  {/if}
</div>
