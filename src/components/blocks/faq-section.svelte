<script lang="ts">
  import type { FaqSectionStoryblok } from '$types/bloks';
  import { cn, getLabelInfo } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Title from '$components/title.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Accordion from '$components/accordion.svelte';
  import AccordionGroup from '$components/accordion-group.svelte';
  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  export let block: FaqSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="overflow-hidden bg-gray-1">
    <div
      class="container relative mx-auto flex flex-col items-center px-container py-12 lg:py-[100px]"
    >
      <!-- Gradient -->
      <div
        class="absolute -bottom-[200px] -left-[100px] h-[400px] w-[600px] -rotate-45 bg-gradient-to-r from-[#756CF6] via-[#B968A4] to-[#FCB8A8] opacity-30 blur-[230px] lg:opacity-100"
        style="transform: translate3d(0, 0, 0);"
      />

      {#if block.title?.[0]}
        {#if block.title && block.title[0]}
          {@const title = block.title[0]}
          {@const label = getLabelInfo(title.label, 'orange')}
          <Title
            {label}
            title={title.title}
            description={title.description}
            buttons={block.title?.[0].links}
            class="max-w-[528px] pb-0 pl-0 pr-0 pt-0 md:items-center lg:pb-0 lg:pt-0"
          />
        {/if}
      {/if}

      {#if block.faqs && block.faqs.length > 0}
        <div class="mt-10 flex w-full max-w-[751px] flex-col flex-wrap gap-4 text-gray-12 md:mt-16">
          <AccordionGroup>
            {#each block.faqs as faq, i}
              {@const { title, text, _uid } = faq}
              <Accordion
                id={_uid}
                class="rounded-2xl border border-gray-12/[0.04] bg-gray-12/2 p-5 text-xl backdrop-blur-[20px]"
              >
                <div slot="header" let:expanded let:attributes let:onClick>
                  <button
                    {...attributes}
                    class="flex w-full items-center justify-between gap-4"
                    on:click={onClick}
                  >
                    <p
                      class={cn(
                        'font-semibold leading-tighter opacity-74',
                        expanded && 'opacity-100'
                      )}
                    >
                      {title}
                    </p>
                    <Icon
                      icon="chevron-up"
                      class={cn(
                        'shrink-0 opacity-74 transition-transform duration-300',
                        expanded && 'rotate-0 opacity-100'
                      )}
                      size="sm"
                    />
                  </button>
                </div>

                {#if text.content}
                  {#each text.content as b}
                    <RichTextRenderer doc={b} class="text-xl first:mt-0" />
                  {/each}
                {:else}
                  {text}
                {/if}
              </Accordion>
            {/each}
          </AccordionGroup>
        </div>
      {/if}
    </div>
  </section>
{/if}
