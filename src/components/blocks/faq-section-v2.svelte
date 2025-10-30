<script lang="ts">
  import type { FaqSectionStoryblok } from '$types/bloks';
  import { cn, getLabelInfo } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  // import Title from '$components/title.svelte';
  import { resolver } from '../rich-text/rich-text-renderer.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Accordion from '$components/accordion.svelte';
  import AccordionGroup from '$components/accordion-group.svelte';
  // import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  export let block: FaqSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme}
    class="mt-[41px] overflow-hidden bg-gray-1"
  >
    <div class="container relative mx-auto flex flex-col items-center px-container">
      {#if block.title?.[0]}
        {@const title = block.title[0]}
        {@const label = getLabelInfo(title.label, title.label_colour || 'brand')}

        <div
          class="flex w-full flex-col items-center p-0 px-container py-12 text-start md:text-center lg:pb-[48px] lg:pt-[100px]"
        >
          {#if label?.content}
            <p
              class={`mb-2 max-w-[528px] text-xl font-semibold leading-tighter md:mb-3 ${
                label.color === 'orange' ? 'text-orange-9' : 'text-brand-9'
              }`}
            >
              {label.content}
            </p>
          {/if}

          {#if title.title}
            <h2 class="max-w-[528px] text-3xl font-semibold leading-tighter text-gray-12">
              {title.title}
            </h2>
          {/if}

          {#if title.description}
            {#if typeof title.description !== 'string' && title.description.content}
              {#each title.description.content as content}
                <p
                  class="mt-4 max-w-[528px] text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-[0.74]"
                >
                  {@html resolver.render(content)}
                </p>
              {/each}
            {:else}
              <p
                class="mt-4 max-w-[528px] text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-[0.74]"
              >
                {title.description}
              </p>
            {/if}
          {/if}
        </div>
      {/if}

      {#if block.faqs && block.faqs.length > 0}
        <div class=" flex w-full max-w-[751px] flex-col flex-wrap gap-4 text-gray-12">
          <AccordionGroup>
            {#each block.faqs as faq, i}
              {@const { title, text, _uid } = faq}
              <Accordion
                id={_uid}
                class="rounded-2xl border border-gray-12/[0.04] bg-gray-12/2 p-[23px] text-xl backdrop-blur-[20px]"
              >
                <div slot="header" let:expanded let:attributes let:onClick>
                  <button
                    {...attributes}
                    class="flex w-full justify-between gap-4"
                    on:click={onClick}
                  >
                    <p
                      class={cn(
                        'items-start self-start font-semibold leading-tighter opacity-74',
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
                          class=" mt-2 font-sans text-xl font-medium leading-snug tracking-[0.11px] opacity-74"
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
