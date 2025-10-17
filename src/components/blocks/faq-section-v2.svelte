<script lang="ts">
  import type { FaqSectionStoryblok } from '$types/bloks';
  import { cn, getLabelInfo } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Title from '$components/title.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Accordion from '$components/accordion.svelte';
  import AccordionGroup from '$components/accordion-group.svelte';
  // import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  export let block: FaqSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme={block.theme} class="overflow-hidden bg-gray-1">
    <div
      class="container relative mx-auto flex flex-col items-center px-container py-12 lg:py-[100px]"
    >
      {#if block.title?.[0]}
        {#if block.title && block.title[0]}
          {@const title = block.title[0]}
          {@const label = getLabelInfo(title.label, title.label_colour || 'brand')}
          <Title
            {label}
            title={title.title}
            description={title.description}
            buttons={block.title?.[0].links}
            class="w-full items-center p-0 text-start md:text-center"
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
                        expanded ? 'rotate-0 opacity-100' : 'rotate-180 opacity-74'
                      )}
                      size="sm"
                    />
                  </button>
                </div>

                {#if text?.content}
                  {#each text.content as node}
                    {#if node.content}
                      {#each node.content as inner}
                        <p
                          class=" mt-2 font-sans text-xl leading-snug tracking-[0.11px] opacity-74"
                        >
                          {inner.text}
                        </p>
                      {/each}
                    {/if}
                  {/each}
                {/if}
              </Accordion>
            {/each}
          </AccordionGroup>
        </div>
      {/if}
    </div>
  </section>
{/if}
