<script lang="ts">
  import type { ListSectionStoryblok } from '$types/bloks';

  import Icon from '$components/icon/icon.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  export let block: ListSectionStoryblok;
</script>

{#if block}
  <section
    data-theme="light"
    class="bg-gray-1 px-container pb-12 pt-6 md:pb-16 md:pt-12"
    use:storyblokEditable={block}
  >
    <div
      class={cn(
        'mx-auto flex max-w-content flex-col gap-12 md:grid md:gap-y-16',
        (block.items.length <= 3 || block.items.length > 4) && 'grid-cols-3 md:gap-x-16',
        block.items.length === 4 && 'grid-cols-4 md:gap-x-12'
      )}
    >
      {#if block.items.length > 0}
        {#each block.items as item}
          <div class="flex max-w-[395px] flex-col gap-2.5">
            <div
              class="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-orange-9/15 text-orange-9"
            >
              <Icon size="xs" icon={`${item.icon}`} />
            </div>
            <div class="flex flex-col gap-1 text-lg text-gray-12">
              <p class="font-semibold leading-tight">{item.title}</p>
              <p class="font-medium leading-snug tracking-wide opacity-74">{item.description}</p>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </section>
{/if}
