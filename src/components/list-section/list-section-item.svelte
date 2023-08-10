<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import Icon from '$components/icon/icon.svelte';

  import type { ListItemStoryblok } from '$types/bloks';

  let className: undefined | string = undefined;
  export { className as class };
  export let block: ListItemStoryblok;
  export let accentColour: 'orange' | 'brand' = 'orange';

  const typeIcon = (icon: string | number) => {
    return icon as string;
  };
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn('flex flex-col items-start gap-2 md:gap-3', className)}
  >
    {#if block.icon}
      {@const typedIcon = typeIcon(block.icon)}
      <div
        class={cn(
          'flex h-[38px] w-[38px] items-center justify-center rounded-full',
          accentColour === 'orange' && 'bg-orange-9/15 text-orange-9',
          accentColour === 'brand' && 'bg-brand-9/10 text-brand-9'
        )}
      >
        <Icon size="xs" icon={typedIcon} />
      </div>
    {/if}
    <div class="flex flex-col gap-1 text-lg text-gray-12">
      <h3 class="font-semibold leading-tight">{block.title}</h3>
      <p class="font-medium leading-snug tracking-wide opacity-74">{block.description}</p>
    </div>
  </div>
{/if}
