<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Icon from '$components/icon/icon.svelte';
  import Accordion from '$components/accordion.svelte';
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  import { cn, getPricingIcon } from '$lib/utils';
  import AccordionGroup from '$components/accordion-group.svelte';
  import tippy from 'svelte-tippy';
  import 'tippy.js/dist/tippy.css'; // optional

  let expanded = false;
  export let group: PricingTableGroupEnhancedStoryblok;
</script>

{#if group}
  {@const { title, subgroup } = group}
  <div use:storyblokEditable={group} class="col-span-6 flex w-full flex-col">
    <div class="flex flex-col">
      <Accordion id={title}>
        <div
          id="group"
          slot="header"
          let:expanded
          let:attributes
          let:onClick
          class="ml-0 w-full border-b border-gray-12/[.08]"
        >
          <button
            {...attributes}
            class="flex w-full items-center justify-start gap-3 text-gray-12"
            on:click={onClick}
          >
            {#if expanded}
              <Icon icon="minus" size="sm" class="text-brand-9" />
            {:else}
              <Icon icon="plus" size="sm" />
            {/if}
            <p
              id="group-title"
              class={cn(
                'bg-gray-1 py-8 text-xl/tighter font-semibold text-gray-12',
                expanded ? 'text-brand-9' : 'text-gray-12'
              )}
            >
              {title}
            </p>
          </button>
        </div>

        <!-- <div id="line" class="ml-0 border-b border-gray-12/[.08] md:ml-12" /> -->

        <div id="subgroup" class="col-span-6">
          {#if subgroup}
            {#each subgroup as line}
              {#if line}
                {@const { title, lines } = line}
                <AccordionGroup {expanded}>
                  <Accordion id={title}>
                    <div
                      slot="header"
                      let:expanded
                      let:attributes
                      let:onClick
                      class="ml-0 w-full md:ml-3"
                    >
                      <button
                        {...attributes}
                        class={cn(
                          'flex w-full items-center justify-start gap-3 text-gray-12',
                          // if expanded change the color of the title
                          { 'text-gray-12': !expanded, 'text-brand-9': expanded }
                        )}
                        on:click|stopPropagation={onClick}
                      >
                        {#if expanded}
                          <Icon icon="minus" size="sm" />
                        {:else}
                          <Icon icon="plus" size="sm" />
                        {/if}
                        <p
                          id="subgroup-title"
                          class="ml-3 self-center py-5 text-lg/snug font-medium tracking-wide"
                        >
                          {title}
                        </p>
                      </button>
                    </div>

                    <div id="line" class="col-span-6 w-full items-center justify-center">
                      {#each lines as item, i}
                        {@const { name, tooltip, scale, grow } = item}

                        {#if i === 0}
                          <div id="line" class="ml-0 border-b border-gray-12/[.08] md:ml-12" />
                        {/if}

                        <div
                          id="line"
                          class="ml-0 grid grid-cols-6 gap-10 border-b border-gray-12/[.08] md:ml-1"
                        >
                          <div
                            class="col-span-2 flex flex-row items-center justify-center gap-3 self-center py-5 text-lg/snug font-medium tracking-wide"
                          >
                            <span>
                              {name}
                            </span>

                            {#if tooltip}
                              <div
                                class="h-6 w-6 cursor-pointer hover:text-brand-9"
                                use:tippy={{
                                  content: `${tooltip}`,
                                  placement: 'right'
                                }}
                              >
                                <Icon icon="info-circle" size="xs" class="hover:text-brand-9" />
                              </div>
                            {/if}
                          </div>
                          {#if scale}
                            {@const { icon, color } = getPricingIcon(scale)}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="flex w-6 flex-col items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            </div>
                          {/if}
                          {#if grow}
                            {@const { icon, color } = getPricingIcon(grow)}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="w-6 items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            </div>
                          {/if}
                        </div>
                      {/each}
                    </div>
                  </Accordion>
                </AccordionGroup>
              {/if}
            {/each}
          {/if}
        </div>
      </Accordion>
    </div>
  </div>
{/if}
