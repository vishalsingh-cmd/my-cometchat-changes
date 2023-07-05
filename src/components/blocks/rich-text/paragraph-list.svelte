<script lang="ts">
  import Icon from '$components/icon/icon.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { ParagraphListStoryblok } from '$types/bloks';

  export let block: ParagraphListStoryblok;
</script>

{#if block}
  <div use:storyblokEditable={block} class="mb-5 mt-4 font-semibold leading-tighter md:mb-3">
    <svelte:element this={block.is_numeric ? 'ol' : 'ul'}>
      {#each block.items as item, i}
        <li class="mb-3 text-lg-richtext font-medium leading-snug tracking-wide">
          <div class="flex items-center gap-2">
            {#if block.is_numeric}
              <p class="w-[32px] text-center text-brand-9">
                {#if i < 9}
                  0{i + 1}
                {:else}
                  {i + 1}
                {/if}
              </p>
            {:else}
              <Icon icon="star-04" size="2xs" class="h-[14px] w-[14px] text-brand-9" />
            {/if}
            <p class={cn(item.description && 'font-semibold leading-tight')}>{item.title}</p>
          </div>
          {#if item.description}
            <p class={cn('ml-[22px]', block.is_numeric && 'ml-10')}>{item.description}</p>
          {/if}
        </li>
      {/each}
    </svelte:element>
  </div>
{/if}
