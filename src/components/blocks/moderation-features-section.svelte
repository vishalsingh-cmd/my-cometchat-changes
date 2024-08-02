<script lang="ts">
  import type { ModerationFeaturesSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import TitleSection from './title-section.svelte';
  import { cn } from '$lib/utils';
  import ModerationFeatureCard from '$components/moderation-feature-card.svelte';

  export let block: ModerationFeaturesSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1 text-gray-12">
    {#if block.title && block.title[0]}
      <TitleSection block={block.title[0]} />
    {/if}

    <div class={cn('container mx-auto flex flex-col px-container pb-10 lg:grid')}>
      <div class={cn('grid gap-x-[54px] gap-y-[52px] lg:grid-cols-3')}>
        {#if block.rows}
          {#each block.rows as row}
            {#each row.cards as card}
              <ModerationFeatureCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            {/each}
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
