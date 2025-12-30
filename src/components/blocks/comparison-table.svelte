<script lang="ts">
  import type { ComparisonTableStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';

  export let block: ComparisonTableStoryblok;

  // Get index of highlighted column
  $: highlightedColumnIndex = block.columns?.findIndex((col: any) => col.is_highlight) ?? -1;
</script>

{#if block}
  <Section>
    <Container class="mt-[60px] font-sans lg:px-[176px] lg:pb-[80px]">
      <div class="w-full overflow-x-auto" use:storyblokEditable={block}>
        <div class="relative mx-auto max-w-[1140px]">
          <!-- Shadow overlay for highlighted column -->
          {#if highlightedColumnIndex >= 0}
            <div
              class="pointer-events-none absolute inset-y-0 z-10"
              style="
                left: {(highlightedColumnIndex + 1) * (100 / 3)}%;
                width: {100 / 3}%;
                box-shadow: 0px 4px 16px 0px rgba(105, 83, 214, 0.4);
              "
            />
          {/if}

          <div class="grid grid-cols-[1fr_1fr_1fr] gap-0">
            <!-- Header Row -->
            <div class="bg-[#0F0B1E] px-4 pb-6 pt-8 md:px-6 lg:px-[32px] lg:pb-[32px] lg:pt-[48px]">
              <p
                class="text-lg font-[640px] leading-tighter text-gray-12 md:text-xl lg:text-[22px]"
              >
                Category
              </p>
            </div>

            {#each block.columns ?? [] as column}
              <div
                class={`flex items-center justify-start border bg-[#0F0B1E] px-4 pb-6 pt-8 md:px-6 lg:px-[32px] lg:pb-[32px] lg:pt-[48px] ${
                  column.is_highlight
                    ? 'border-b-0 border-brand-9/80 bg-brand-9/[0.06]'
                    : 'border-0'
                }`}
              >
                {#if column.logo?.filename}
                  <img
                    src={column.logo.filename}
                    alt={column.name}
                    class="h-6 md:h-7 lg:h-[30px]"
                  />
                {/if}
                {#if column.name}
                  <p class="ml-2 text-lg font-semibold text-white md:text-xl lg:text-[22px]">
                    {column.name}
                  </p>
                {/if}
              </div>
            {/each}

            <!-- Data Rows -->
            {#each block.categories ?? [] as category, index}
              <!-- Category Label -->
              <div
                class="border border-gray-12/10 bg-transparent py-3 pl-4 md:py-4 md:pl-6 lg:py-[19px] lg:pl-[32px]"
              >
                <p
                  class="text-base font-medium leading-snug tracking-[0.09px] text-gray-12 md:text-lg"
                >
                  {category.text}
                </p>
              </div>

              <!-- Column Data -->
              {#each block.columns ?? [] as column}
                <div
                  class={`flex items-center border px-4 pt-3 md:px-6 md:pt-4 lg:px-[32px] lg:py-[16px] ${
                    column.is_highlight
                      ? `border-x-brand-9/80 ${
                          block.categories.length - 1 === index
                            ? 'border-b-brand-9/80'
                            : 'border-b-gray-12/10'
                        } border-t-gray-12/10 bg-brand-9/[0.06]`
                      : 'border-gray-12/10'
                  }`}
                >
                  <p
                    class="text-lg font-medium leading-snug tracking-[0.5%] text-gray-11 opacity-74 md:text-lg"
                  >
                    {column.rows?.[index]?.text || '-'}
                  </p>
                </div>
              {/each}
            {/each}
          </div>
        </div>
      </div>
    </Container>
  </Section>
{/if}

<style>
  /* Custom scrollbar for horizontal scroll */
  .overflow-x-auto::-webkit-scrollbar {
    height: 8px;
  }

  .overflow-x-auto::-webkit-scrollbar-track {
    background: rgba(250, 250, 255, 0.05);
    border-radius: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: rgba(250, 250, 255, 0.2);
    border-radius: 4px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(250, 250, 255, 0.3);
  }
</style>
