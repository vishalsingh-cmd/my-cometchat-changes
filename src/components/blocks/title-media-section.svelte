<script lang="ts">
  import type { TitleMediaSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn, getLabelInfo } from '$lib/utils';
  import { string } from '$lib/strings';

  import Badge from '$components/badge.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';
  import Media from '$components/media.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';

  export let block: TitleMediaSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
    class="overflow-x-hidden bg-gray-1 pb-10 pt-12 text-gray-12 md:py-16"
  >
    <div
      class={cn(
        'container relative mx-auto flex flex-col items-start gap-8 px-container lg:items-center lg:gap-20',
        block.media_side === 'left' && 'lg:flex-row-reverse lg:gap-[128px]',
        block.media_side === 'right' && 'lg:flex-row lg:gap-[88px]'
      )}
    >
      <div class="flex-1">
        {#if block.title[0]}
          {@const { title, description, links } = block.title[0]}
          {@const label = getLabelInfo(block.title[0].label, block.accent_colour || 'orange')}
          <Title
            {label}
            {title}
            {description}
            buttons={links}
            class={cn(
              'max-w-[528px] p-0 pl-0 pr-0 lg:p-0',
              block.media_side === 'right' && 'lg:pl-[56px]'
            )}
          />
        {/if}
        {#if block.list_items && block.list_items.length > 0}
          <ul
            class={cn(
              'mt-5 flex flex-col gap-3 md:mt-8',
              block.media_side === 'right' && 'lg:pl-[56px]'
            )}
          >
            {#each block.list_items as listItem}
              <li class="flex-start flex gap-2">
                <Icon
                  icon="star-04"
                  size="xs"
                  class={cn(
                    'mt-1 flex-shrink-0',
                    block.accent_colour === 'orange' && 'text-orange-9',
                    block.accent_colour === 'brand' && 'text-brand-9'
                  )}
                />
                {#if listItem.item}
                  {#if typeof listItem.item != 'string' && listItem.item.content}
                    {#each listItem.item.content as content}
                      <p
                        class={cn(
                          paragraph,
                          'text-xl font-medium leading-snug tracking-wide opacity-74'
                        )}
                      >
                        {@html resolver.render(content)}
                      </p>
                    {/each}
                  {:else}
                    <p class="text-xl font-medium leading-snug tracking-wide opacity-74">
                      {listItem.item}
                    </p>
                  {/if}
                {/if}
                {#if listItem.coming_soon}
                  <Badge size="medium" label={string('coming_soon')} />
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      {#if block.media}
        <div
          class={cn(
            'aspect-square h-full w-full flex-1 overflow-hidden lg:max-h-[640px]',
            block.media_side === 'center' && 'lg:relative lg:aspect-auto lg:w-[1440px]'
          )}
        >
          <Media
            imageTransformOptions={{ size: [1200, 0] }}
            media={block.media}
            class="object-cover"
          />
        </div>
      {/if}
    </div>
  </section>
{/if}
