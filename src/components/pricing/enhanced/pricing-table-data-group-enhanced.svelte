<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Icon from '$components/icon/icon.svelte';
  import Accordion from '$components/accordion.svelte';
  import type { PricingTableGroupEnhancedStoryblok } from '$types/bloks';
  import { cn, getPricingIcon } from '$lib/utils';
  import AccordionGroupPricing from '$components/accordion-group/accordion-group-pricing-enhanced/accordion-group-pricing.svelte';
  import tippy from 'svelte-tippy';
  import 'tippy.js/dist/tippy.css'; // optional
  import 'tippy.js/animations/scale.css';
  import AccordionGroup from '$components/accordion-group.svelte';

  let expanded = false;
  export let activeTabIndex = 0;
  export let group: PricingTableGroupEnhancedStoryblok;

  // const data: IAccordionGroup[] = [
  //   {
  //     groupTitle: 'Group 1',
  //     subgroups: [
  //       {
  //         subgroupTitle: 'Subgroup 1.1',
  //         lines: ['Line 1.1.1', 'Line 1.1.2']
  //       },
  //       {
  //         subgroupTitle: 'Subgroup 1.2',
  //         lines: ['Line 1.2.1']
  //       }
  //     ]
  //   },
  //   {
  //     groupTitle: 'Group 2',
  //     subgroups: [
  //       {
  //         subgroupTitle: 'Subgroup 2.1',
  //         lines: ['Line 2.1.1', 'Line 2.1.2', 'Line 2.1.3']
  //       }
  //     ]
  //   }
  // ];
</script>

<AccordionGroupPricing {group} index={0} {activeTabIndex} />

{#if group}
  {@const { title, subgroup } = group}
  <div use:storyblokEditable={group} class="col-span-6 flex w-full flex-col">
    <div class="flex flex-col">
      <Accordion id={title + '-group' + activeTabIndex} {expanded}>
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
                'bg-gray-1 py-8 text-start text-xl/tighter font-semibold text-gray-12',
                expanded ? 'text-brand-9' : 'text-gray-12'
              )}
            >
              {title}
            </p>
          </button>
        </div>

        <div id="subgroup" class="col-span-6 text-start">
          {#if subgroup}
            {#each subgroup as line, i}
              {#if line}
                {@const { title, lines } = line}
                <AccordionGroup expanded={expanded ? 'true' : 'false'}>
                  <Accordion id={title} {expanded}>
                    <div
                      slot="header"
                      let:expanded
                      let:attributes
                      let:onClick
                      class="ml-0 w-full overflow-clip md:ml-3"
                    >
                      <button
                        {...attributes}
                        class={cn(
                          'flex w-full items-center justify-start gap-3 text-start text-gray-12',
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
                          class="ml-3 w-full py-5 text-start text-lg/snug font-medium tracking-wide"
                        >
                          {title}
                        </p>
                      </button>
                    </div>

                    <!-- show only on desktop -->
                    <div
                      id="line"
                      class="col-span-6 hidden w-full items-center justify-center lg:block"
                    >
                      {#each lines as item, i}
                        {@const { name, tooltip, scale, grow } = item}

                        {#if i === 0}
                          <div id="line" class="ml-0 border-b border-gray-12/[.08]" />
                        {/if}

                        <div
                          id="line-container"
                          class="ml-0 grid grid-cols-6 items-center justify-center gap-10 border-b border-gray-12/[.08]"
                        >
                          <div
                            id="line-title-container"
                            class="col-span-2 ml-14 flex w-full flex-row items-start justify-start gap-3 py-5 text-start text-lg/snug font-medium tracking-wide"
                          >
                            <span id="line-title" class="flex w-auto text-start">
                              {name}
                            </span>

                            {#if tooltip}
                              <div class="min-w-fit">
                                <div
                                  class="h-5 w-5 cursor-help hover:text-brand-9"
                                  use:tippy={{
                                    content: `${tooltip}`,
                                    placement: 'right',
                                    animation: 'scale'
                                  }}
                                >
                                  <Icon icon="info-circle" size="sm" class="hover:text-brand-9" />
                                </div>
                              </div>
                            {/if}
                          </div>

                          <!-- show line grow and scale only on desktop -->
                          <div id="grow" class="col-span-2">
                            {#if grow === 'no'}
                              {@const { icon, color } = getPricingIcon('none')}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            {:else if grow === 'addon'}
                              {@const { icon, color } = getPricingIcon('paid-add-on')}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            {:else if grow === 'yes'}
                              {@const { icon, color } = getPricingIcon('included')}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            {:else}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <span class="self-center">{grow}</span>
                              </div>
                            {/if}
                          </div>

                          <div id="scale" class="col-span-2">
                            {#if scale === 'no'}
                              {@const { icon, color } = getPricingIcon('none')}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            {:else if scale === 'addon'}
                              {@const { icon, color } = getPricingIcon('paid-add-on')}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            {:else if scale === 'yes'}
                              {@const { icon, color } = getPricingIcon('included')}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                              </div>
                            {:else}
                              <div class="col-span-2 flex w-full items-center justify-center">
                                <span class="self-center">{scale}</span>
                              </div>
                            {/if}
                          </div>
                        </div>
                      {/each}
                    </div>

                    <!-- show only on mobile -->
                    <div
                      id="line"
                      class="col-span-6 ml-0 block w-full items-center justify-center lg:hidden"
                    >
                      {#each lines as item, i}
                        {@const { name, tooltip, scale, grow } = item}

                        {#if i === 0}
                          <div id="line" class="ml-0 border-b border-gray-12/[.08]" />
                        {/if}

                        <div
                          id="line-container"
                          class="ml-0 grid w-full grid-cols-6 items-center justify-center border-b border-gray-12/[.08]"
                        >
                          <div
                            id="line-title-container"
                            class="col-span-4 ml-0 flex w-full flex-shrink-0 flex-row items-start justify-start gap-3 py-5 text-start text-lg/snug font-medium tracking-wide md:ml-14"
                          >
                            <span id="line-title" class="flex w-auto min-w-0 text-start">
                              {name}
                            </span>

                            {#if tooltip}
                              <div class="min-w-fit">
                                <div
                                  class="h-5 w-5 cursor-help hover:text-brand-9"
                                  use:tippy={{
                                    content: `${tooltip}`,
                                    placement: 'bottom',
                                    animation: 'scale'
                                  }}
                                >
                                  <Icon icon="info-circle" size="sm" class="hover:text-brand-9" />
                                </div>
                              </div>
                            {/if}
                          </div>

                          <!-- show line grow and scale only on mobile -->
                          <div
                            id="line+grow+scale"
                            class="col-span-2 block h-auto items-center justify-center lg:hidden"
                          >
                            {#if activeTabIndex === 0}
                              {#if grow === 'no'}
                                {@const { icon, color } = getPricingIcon('none')}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <Icon {icon} size="sm" class={cn(color, 'self-center')} />
                                </div>
                              {:else if grow === 'addon'}
                                {@const { icon, color } = getPricingIcon('paid-add-on')}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <Icon {icon} size="sm" class={cn(color, 'self-center')} />
                                </div>
                              {:else if grow === 'yes'}
                                {@const { icon, color } = getPricingIcon('included')}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <Icon {icon} size="sm" class={cn(color, 'self-center')} />
                                </div>
                              {:else}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <span class="self-center">{grow}</span>
                                </div>
                              {/if}
                            {:else if activeTabIndex === 1}
                              {#if scale === 'no'}
                                {@const { icon, color } = getPricingIcon('none')}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <Icon {icon} size="sm" class={cn(color, 'self-center')} />
                                </div>
                              {:else if scale === 'addon'}
                                {@const { icon, color } = getPricingIcon('paid-add-on')}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <Icon {icon} size="sm" class={cn(color, 'self-center')} />
                                </div>
                              {:else if scale === 'yes'}
                                {@const { icon, color } = getPricingIcon('included')}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <Icon {icon} size="sm" class={cn(color, 'self-center')} />
                                </div>
                              {:else}
                                <div class="col-span-2 flex w-full items-center justify-center">
                                  <span class="self-center">{scale}</span>
                                </div>
                              {/if}
                            {/if}
                          </div>
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
