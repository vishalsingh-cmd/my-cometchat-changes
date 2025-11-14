<script lang="ts">
  import Icon from '$components/icon/icon.svelte';
  import ListParagraph from '$components/rich-text/list-paragraph.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { ParagraphListStoryblok } from '$types/bloks';

  export let block: ParagraphListStoryblok;
</script>

{#if block}
  <div use:storyblokEditable={block} class="pb-6 pt-4 font-semibold leading-tighter">
    <svelte:element this={block.is_numeric ? 'ol' : 'ul'}>
      {#each block.items as item, i}
        <li class="mb-3 text-lg-richtext font-medium leading-snug tracking-wide">
          <div class="flex-start flex gap-2">
            {#if block.is_numeric}
              <p class="w-[32px] text-center text-brand-9">
                {#if i < 9}
                  0{i + 1}.
                {:else}
                  {i + 1}.
                {/if}
              </p>
            {:else}
              <Icon
                icon="star-04"
                size="2xs"
                class={cn(
                  'mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-brand-9',
                  !item.title && 'mt-1'
                )}
              />
            {/if}
            {#if item.title}
              <p class={cn(item.description && 'font-semibold leading-tight')}>{item.title}</p>
            {/if}
            {#if item.description && (!item.title || item.title === '')}
              <div>
                <ListParagraph content={item.description} />
              </div>
            {/if}
          </div>
          {#if item.description && item.title && item.title !== ''}
            <div class={cn('ml-[22px] [&_p]:m-0', block.is_numeric && 'ml-10')}>
              <ListParagraph content={item.description} />
            </div>
          {/if}
        </li>
      {/each}
    </svelte:element>
  </div>
{/if}
