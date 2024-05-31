<script lang="ts">
  import type { PricingTableGroupRevampStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Icon from '$components/icon/icon.svelte';
  // import Accordion from '$components/accordion.svelte';
  import { cn, getPricingIcon } from '$lib/utils';
  import tippy from 'tippy.js';

  export let group: PricingTableGroupRevampStoryblok;
</script>

{#if group}
  {@const { title, lines } = group}
  <div use:storyblokEditable={group} class="flex flex-col bg-gray-1">
    <!-- <Accordion id={title}> -->
    <!-- <div slot="header" let:expanded let:attributes let:onClick class="w-full"> -->
    <div class="w-full">
      <!-- <button
          {...attributes}
          class="flex w-full items-center justify-between text-gray-12"
          on:click={onClick}
        > -->
      <p class="bg-gray-1 py-8 text-xl/tighter font-semibold text-gray-12">{title}</p>
      <!-- {#if expanded}
            <Icon icon="minus" size="sm" />
          {:else}
            <Icon icon="plus" size="sm" />
          {/if} -->
      <!-- </button> -->
    </div>

    {#if lines}
      <div id="line">
        <!-- show only on desktop -->
        <div id="line-desktop" class="hidden w-full items-center justify-center gap-10 lg:block">
          {#each lines as item, i}
            {@const { name, tooltip, basic, advanced, premium } = item}

            {#if i === 0}
              <div id="line" class="ml-0 border-b border-gray-12/[.08]" />
            {/if}

            <div
              id="line-container"
              class="ml-0 grid grid-cols-4 items-center justify-center gap-10 border-b border-gray-12/[.08] text-gray-11"
            >
              <div
                id="line-title-container"
                class="flex w-full flex-row items-start justify-start gap-3 py-5 text-start text-lg/snug font-medium tracking-wide"
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
                        animation: 'basic'
                      }}
                    >
                      <Icon icon="info-circle" size="sm" class="hover:text-brand-9" />
                    </div>
                  </div>
                {/if}
              </div>

              <!-- show line advanced and basic only on desktop -->
              <div id="basic" class="">
                {#if basic === 'no'}
                  {@const { icon, color } = getPricingIcon('none')}
                  <div class="justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else if basic === 'addon'}
                  {@const { icon, color } = getPricingIcon('paid-add-on')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else if basic === 'yes'}
                  {@const { icon, color } = getPricingIcon('included')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else}
                  <div class=" justify-left flex w-full items-center">
                    <span class="self-center">{basic}</span>
                  </div>
                {/if}
              </div>
              <div id="advanced" class="">
                {#if advanced === 'no'}
                  {@const { icon, color } = getPricingIcon('none')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else if advanced === 'addon'}
                  {@const { icon, color } = getPricingIcon('paid-add-on')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else if advanced === 'yes'}
                  {@const { icon, color } = getPricingIcon('included')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else}
                  <div class=" justify-left flex w-full items-center">
                    <span class="self-center">{advanced}</span>
                  </div>
                {/if}
              </div>
              <div id="premium" class="">
                {#if premium === 'no'}
                  {@const { icon, color } = getPricingIcon('none')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else if premium === 'addon'}
                  {@const { icon, color } = getPricingIcon('paid-add-on')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else if premium === 'yes'}
                  {@const { icon, color } = getPricingIcon('included')}
                  <div class=" justify-left flex w-full items-center">
                    <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                  </div>
                {:else}
                  <div class=" justify-left flex w-full items-center">
                    <span class="self-center">{premium}</span>
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    <!-- </Accordion> -->
  </div>
{/if}
