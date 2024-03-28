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

  // Set expanded to true for the first element of group and subgroup
  $: if (group && group[0]) {
    group[0].expanded = true;
    if (group[0].subgroup) {
      group[0].subgroup.forEach((subgroup: any) => (subgroup.expanded = true));
    }
  }
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
            {#each subgroup as line}
              {#if line}
                {@const { title, lines } = line}
                <AccordionGroup expanded={expanded ? 'true' : 'false'}>
                  <Accordion id={title} {expanded}>
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
                            class="col-span-2 ml-12 flex w-auto flex-row items-center justify-center gap-3 py-5 text-start text-lg/snug font-medium tracking-wide"
                          >
                            <span class="w-full text-start">
                              {name}
                            </span>

                            {#if tooltip}
                              <div
                                class="h-5 w-5 cursor-pointer hover:text-brand-9"
                                use:tippy={{
                                  content: `${tooltip}`,
                                  placement: 'right'
                                }}
                              >
                                <Icon icon="info-circle" size="xs" class="hover:text-brand-9" />
                              </div>
                            {/if}
                          </div>
                          <!-- scale can have values like none, paid-add-on, included or other text(note for other text just render the text instead of icon for none it's -) -->
                          {#if scale === 'no'}
                            {@const { icon, color } = getPricingIcon('none')}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="flex w-6 flex-col items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="xs" />
                              </div>
                            </div>
                          {:else if scale === 'addon'}
                            {@const { icon, color } = getPricingIcon('paid-add-on')}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="flex w-6 flex-col items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="xs" />
                              </div>
                            </div>
                          {:else if scale === 'yes'}
                            {@const { icon, color } = getPricingIcon('included')}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="flex w-6 flex-col items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="xs" />
                              </div>
                            </div>
                          {:else}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <span class="self-center">{scale}</span>
                            </div>
                          {/if}

                          <!-- same for the grow -->
                          {#if grow === 'no'}
                            {@const { icon, color } = getPricingIcon('none')}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="flex w-6 flex-col items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="xs" />
                              </div>
                            </div>
                          {:else if grow === 'addon'}
                            {@const { icon, color } = getPricingIcon('paid-add-on')}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="w-6 items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="xs" />
                              </div>
                            </div>
                          {:else if grow === 'yes'}
                            {@const { icon, color } = getPricingIcon('included')}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <div class="w-6 items-center justify-center">
                                <Icon {icon} class={cn(color, 'self-center')} size="xs" />
                              </div>
                            </div>
                          {:else}
                            <div class="col-span-2 flex w-full items-center justify-center">
                              <span class="self-center">{grow}</span>
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
