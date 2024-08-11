<script lang="ts">
  import type { PricingTableGroupLineEnhancedStoryblok } from '$types/bloks';
  import tippy from 'svelte-tippy';
  import 'tippy.js/dist/tippy.css'; // optional
  import 'tippy.js/animations/scale.css';
  import { cn, getPricingIcon } from '$lib/utils';
  import Icon from '$components/icon/icon.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';

  export let activeTabIndex = 0;
  export let lines: PricingTableGroupLineEnhancedStoryblok[];
</script>

{#if lines}
  <div id="line" class="col-span-6">
    <!-- show only on desktop -->
    <div id="line-desktop" class="col-span-6 hidden w-full items-center justify-center lg:block">
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
            {#if name}
              {#if typeof name != 'string' && name.content}
                {#each name.content as content}
                  <p id="line-title" class={cn(paragraph, 'w-auto text-start')}>
                    {@html resolver.render(content)}
                  </p>
                {/each}
              {:else}
                <span id="line-title" class="flex w-auto text-start">
                  {name}
                </span>
              {/if}
            {/if}

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
      id="line-mobile"
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
            {#if name}
              {#if typeof name != 'string' && name.content}
                {#each name.content as content}
                  <p id="line-title" class={cn(paragraph, 'w-auto min-w-0 text-start')}>
                    {@html resolver.render(content)}
                  </p>
                {/each}
              {:else}
                <span id="line-title" class="flex w-auto min-w-0 text-start">
                  {name}
                </span>
              {/if}
            {/if}

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
  </div>
{/if}
