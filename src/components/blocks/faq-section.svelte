<script lang="ts">
  import AccordionGroup from '$components/accordion-group.svelte';
  import Accordion from '$components/accordion.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn, getLabelInfo } from '$lib/utils';
  import type { FaqSectionStoryblok } from '$types/bloks';

  export let block: FaqSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="overflow-hidden bg-gray-1">
    <div
      class="container relative mx-auto flex flex-col justify-between px-container py-12 lg:flex-row lg:py-[100px]"
    >
      <div
        class="absolute -bottom-[200px] -left-[100px] h-[400px] w-[600px] -rotate-45 bg-gradient-to-r from-[#756CF6] via-[#B968A4] to-[#FCB8A8] opacity-30 blur-[230px] lg:opacity-100"
        style="transform: translate3d(0, 0, 0);"
      />

      {#if block.title?.[0]}
        {#if block.title && block.title[0]}
          {@const title = block.title[0]}
          {@const label = getLabelInfo(title.label, 'orange')}
          <Title
            class="max-w-[528px] pb-0 pl-0 pr-0 pt-0 lg:pb-0 lg:pt-0"
            alignment="left"
            {label}
            title={title.title}
            description={title.description}
            buttons={block.title?.[0].links}
          />
        {/if}
      {/if}

      {#if block.faqs && block.faqs.length > 0}
        <div class="mt-10 flex flex-col flex-wrap gap-4 text-gray-12 lg:mt-[35px]">
          <AccordionGroup>
            {#each block.faqs as faq}
              {@const { title, text, _uid } = faq}
              <Accordion
                id={_uid}
                class="rounded-2xl border border-gray-12/[0.04] bg-gray-12/[0.02] p-5 text-xl backdrop-blur-[20px]"
              >
                <div slot="header" let:expanded let:attributes let:onClick class="w-full">
                  <button
                    {...attributes}
                    class="flex w-full items-center justify-between gap-4 text-left lg:max-w-[640px]"
                    on:click={onClick}
                  >
                    <p
                      class={cn(
                        'w-full font-semibold leading-tighter opacity-74',
                        expanded && 'opacity-100'
                      )}
                    >
                      {title}
                    </p>
                    <Icon
                      icon="chevron-up"
                      class={cn(
                        'shrink-0 opacity-74 transition-transform duration-300',
                        expanded && 'rotate-180 opacity-100'
                      )}
                      size="sm"
                    />
                  </button>
                </div>
                <div class="max-w-[640px] pt-3 font-medium leading-snug opacity-74">
                  {text}
                </div>
              </Accordion>
            {/each}
          </AccordionGroup>
        </div>
      {/if}
    </div>
  </section>
{/if}
