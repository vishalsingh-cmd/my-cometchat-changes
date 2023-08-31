<script lang="ts">
  import Badge from '$components/badge.svelte';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Icon from '$components/icon/icon.svelte';

  import type { PanelItemStoryblok } from '$types/bloks';

  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { string } from '$lib/strings';
  import { cn } from '$lib/utils';

  let className: undefined | string = undefined;
  export { className as class };
  export let item: PanelItemStoryblok;

  const typeIcon = (icon: string | number) => {
    return icon as string;
  };
</script>

<div class={cn('flex flex-col items-start', className)}>
  {#if item.icon}
    {@const typedIcon = typeIcon(item.icon)}
    <div
      class={cn(
        'mb-2 flex h-[38px] w-[38px] items-center justify-center rounded-full md:mb-3',
        item.accent_colour === 'orange' && 'bg-orange-9/15 text-orange-9',
        item.accent_colour === 'brand' && 'bg-brand-9/10 text-brand-9'
      )}
    >
      <Icon size="xs" icon={typedIcon} />
    </div>
  {/if}
  <div class="flex flex-col gap-1 text-xl text-gray-12 md:gap-2">
    <h3 class="font-semibold leading-tight">{item.title}</h3>
    {#if item.description}
      <p class="font-medium leading-snug tracking-wide opacity-74">{item.description}</p>
    {/if}
  </div>
  {#if item.list && item.list.length > 0}
    <ul class={cn('mt-5 flex flex-col gap-3 md:mt-8 ')}>
      {#each item.list as listItem}
        <li class="flex-start flex gap-2">
          <Icon
            icon="star-04"
            size="xs"
            class={cn(
              'mt-1 flex-shrink-0',
              item.accent_colour === 'orange' && 'text-orange-9',
              item.accent_colour === 'brand' && 'text-brand-9'
            )}
          />
          <p class="text-xl font-medium leading-snug tracking-wide opacity-74">
            {listItem.item}
          </p>
          {#if listItem.coming_soon}
            <Badge size="medium" label={string('coming_soon')} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
  {#if item.link && item.link[0]}
    {@const { target, rel, href } = getAnchorFromCmsLink(item.link[0].link)}
    <GhostButton variant="highlighted" as="a" {target} {rel} {href} class="mt-3 md:mt-4">
      {item.link[0].label}
    </GhostButton>
  {/if}
</div>
