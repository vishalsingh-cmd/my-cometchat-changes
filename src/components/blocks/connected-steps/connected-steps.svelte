<script lang="ts">
  import { cn, getLabelInfo } from '$lib/utils';
  import Title from '$components/title.svelte';
  import type { ConnectedStepsStoryblok } from '$types/bloks';
  import DynamicBlock from '../dynamic-block.svelte';
  export let block: ConnectedStepsStoryblok;
</script>

{#if block}
  <section data-theme={block.theme === 'light' ? 'light' : 'dark'} class="bg-gray-1 text-gray-12">
    <div
      class={cn(
        ['relative mx-auto w-full max-w-[1440px]', 'flex flex-col pb-10'],
        ['md:pb-20'],
        ['max-[1650px]:overflow-hidden']
      )}
    >
      {#if block.title[0]}
        {@const { title, description, links, size } = block.title[0]}
        {@const label = getLabelInfo(block.title[0].label, 'orange')}
        <Title
          {label}
          {title}
          {description}
          size={size !== '' ? size : undefined}
          buttons={links}
          class="lg:pb-8 lg:pt-8"
        />
      {/if}

      <div class="mt-4 flex flex-col px-container">
        {#if block.steps.length}
          {#each block.steps as step}
            <DynamicBlock block={step} />
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
