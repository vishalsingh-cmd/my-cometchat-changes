<script lang="ts">
  import type { PricingTableGroupStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Icon from '$components/icon/icon.svelte';
  import AccordionGroup from '$components/accordion-group.svelte';
  import Accordion from '$components/accordion.svelte';
  import { cn, getPricingIcon } from '$lib/utils';

  export let group: PricingTableGroupStoryblok;
</script>

{#if group}
  {@const { title, lines } = group}
  <div use:storyblokEditable={group} class="flex flex-col bg-gray-1">
    <AccordionGroup>
      <Accordion id={title}>
        <div slot="header" let:expanded let:attributes let:onClick class="w-full">
          <button
            {...attributes}
            class="flex w-full items-center justify-between text-gray-12"
            on:click={onClick}
          >
            <p class="bg-gray-1 py-8 text-xl/tighter font-semibold text-gray-12">{title}</p>
            {#if expanded}
              <Icon icon="minus" size="sm" />
            {:else}
              <Icon icon="plus" size="sm" />
            {/if}
          </button>
        </div>

        {#if lines && lines.length > 0}
          {#each lines as line, i}
            {#if line}
              {@const { name, essentials, pro, enterprise } = line}
              <div
                use:storyblokEditable={line}
                class="grid grid-cols-4 gap-10 border-b border-gray-12/[.08]"
              >
                <p class="self-center py-5 text-lg/snug font-medium tracking-wide">{name}</p>
                {#if essentials}
                  {@const { icon, color } = getPricingIcon(essentials)}
                  <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                {/if}
                {#if pro}
                  {@const { icon, color } = getPricingIcon(pro)}
                  <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                {/if}
                {#if enterprise}
                  {@const { icon, color } = getPricingIcon(enterprise)}
                  <Icon {icon} class={cn(color, 'self-center')} size="sm" />
                {/if}
              </div>
            {/if}
          {/each}
        {/if}
      </Accordion>
    </AccordionGroup>
  </div>
{/if}
