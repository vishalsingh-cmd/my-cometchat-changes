<script lang="ts">
  import PricingTabSwitch from './../pricing-tab-switch.svelte';
  import type { PricingHeroQ3Y24Storyblok, PricingValues } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { typeIcon } from '$lib/storyblok';
  import Icon from '$components/icon/icon.svelte';
  import Sticky from '$components/sticky.svelte';
  import PricingCardVideoAndVoiceEnhanced from '$components/pricing-card-video-and-voice-enhanced.svelte';
  import {
    activateTable,
    lastSelectedMAUIndex,
    maus,
    pricingValues,
    isBilledAnnualy
  } from '$lib/stores/pricing-stores';
  import { cn } from '$lib/utils';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import PricingHeroQ3Y24CardV1 from '$components/pricing/card/chat-and-message/pricing-hero-Q3Y24-cardV1.svelte';
  import PricingRangeSliderV2 from '$components/pricing-range-sliderV2.svelte';
  import { onMount } from 'svelte';
  import PricingBackgroundV2 from '$components/pricing/hero/pricing-backgroundV2.svelte';
  import PricingPeriodToggle from '$components/pricing-period-toggle.svelte';
  import Button from '$components/buttons/button.svelte';
  $activateTable = true;

  export let block: PricingHeroQ3Y24Storyblok;

  let localMaus: string[] = [];
  const updatePricingValues = (() => {
    return (isBilledAnnually: boolean, index: number | null = null) => {
      if (index !== null) {
        $lastSelectedMAUIndex = index;
      } else if ($lastSelectedMAUIndex !== null) {
        index = $lastSelectedMAUIndex;
      } else {
        console.error('No index provided and no previous index remembered.');
        return;
      }
      let i;
      i = isBilledAnnually ? 1 : 0;
      block.mau[i].mau.tbody[index].body.forEach((col: any, index: number) => {
        if (index === 0) {
          $pricingValues['Build'].isBilledAnnually = isBilledAnnually;
          return;
        }
        const categoryName: keyof PricingValues = block.cards[0].category1[index].name;
        $pricingValues[categoryName] = {
          price: col.value,
          isBilledAnnually: isBilledAnnually
        };
      });
    };
  })();

  onMount(() => {
    localMaus = [];
    block.mau[0].mau.tbody.forEach((row: any) => {
      localMaus.push(row.body[0].value);
    });
    $maus = localMaus;
    updatePricingValues($isBilledAnnualy, 1);
  });
</script>

{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="container relative mx-auto w-full px-container pt-[100px] md:pt-[148px]"
  >
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
      <PricingBackgroundV2 />
    </div>
    <div class="relative z-50 w-full">
      <div class="container z-50 mx-auto">
        <div
          class="container mx-auto mb-8 flex flex-col items-start justify-center gap-8 px-container md:items-center"
        >
          <div class="z-20 flex max-w-[528px] flex-col items-start gap-3 md:items-center md:gap-5">
            <h1 class="text-4xl">{block.title}</h1>
            {#if block.description}
              {#if typeof block.description != 'string' && block.description.content}
                {#each block.description.content as content}
                  <p
                    class={cn(
                      paragraph,
                      'text-xl font-medium tracking-wide opacity-74 md:text-center'
                    )}
                  >
                    {@html resolver.render(content)}
                  </p>
                {/each}
              {:else}
                <p class="text-xl font-medium tracking-wide opacity-74 md:text-center">
                  {block.description}
                </p>
              {/if}
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-50 w-full">
      <Sticky
        translateOnDesktop
        class="mx-auto data-[sticky]:border-b data-[sticky]:border-gray-12/8 xl:data-[sticky]:border-b-0"
      >
        <div
          class="flex w-full flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6"
        >
          <PricingTabSwitch
            id={0}
            isActive={$activateTable}
            on:click={() => {
              $activateTable = true;
            }}
          >
            <div class="group flex flex-row items-center justify-center gap-4 text-lg">
              <Icon
                icon="chat-and-message"
                size="xs"
                class={cn(
                  'flex-shrink-0 text-brand-9',
                  $activateTable ? 'opacity-100' : 'opacity-50',
                  'transition-all duration-0 ease-in-out group-hover:opacity-100'
                )}
              />
              {block.category1}
            </div>
          </PricingTabSwitch>

          <PricingTabSwitch
            id={1}
            isActive={!$activateTable}
            on:click={() => {
              $activateTable = false;
            }}
          >
            <div class="group flex flex-row items-center justify-center gap-4 text-lg">
              <Icon
                icon="voice-and-calls"
                size="xs"
                class={cn(
                  'flex-shrink-0 text-brand-9',
                  !$activateTable ? 'opacity-100' : 'opacity-50',
                  'transition-all duration-0 ease-in-out group-hover:opacity-100'
                )}
              />
              {block.category2}
            </div>
          </PricingTabSwitch>
        </div>
      </Sticky>
      <div class="container mx-auto mb-12 mt-4 flex flex-col items-center">
        {#if $activateTable}
          <div
            class="mb-[61px] mt-8 flex w-full flex-col items-center justify-around lg:h-[110px] lg:flex-row"
          >
            <PricingPeriodToggle on:change={() => updatePricingValues($isBilledAnnualy)} />
            <PricingRangeSliderV2
              maus={$maus}
              on:index={(e) => {
                updatePricingValues($isBilledAnnualy, e.detail);
              }}
            />
          </div>
        {/if}
        <div
          class={cn(
            'grid w-full grid-cols-1 gap-16 px-container sm:grid-cols-2 md:mt-8 md:gap-8 lg:grid-cols-3',
            $activateTable && 'items-end xl:grid-cols-4',
            !$activateTable && 'xl:grid-cols-3'
          )}
        >
          {#if $activateTable}
            {#each block.cards[0].category1 ?? [] as plan}
              <PricingHeroQ3Y24CardV1 block={plan} value={$pricingValues[plan.name]} />
            {/each}
          {:else}
            {#each block.cards[0].category2 ?? [] as plan}
              <PricingCardVideoAndVoiceEnhanced block={plan} />
            {/each}
          {/if}
        </div>
        {#if $activateTable}
          <Button
            variant="secondary"
            size="sm"
            class="mt-10 h-10 w-32"
            on:click={() => {
              let table = document.getElementById('pricing-table-Q3Y24');
              table?.scrollIntoView({ behavior: 'smooth' });
              let miniTable = document.getElementById('mini-pricing-table-Q3Y24');
              miniTable?.scrollIntoView({ behavior: 'smooth' });
            }}>See all features</Button
          >
        {/if}
      </div>
      <div class="container mx-auto flex justify-center">
        {#if block.info_items && block.info_items.length > 0}
          <div class="flex flex-wrap gap-8 gap-y-3">
            {#each block.info_items as { icon, name, description }}
              {@const typedIcon = typeIcon(icon || '')}
              <div class="flex items-center gap-2">
                <Icon icon={typedIcon} size="xs" class="flex-shrink-0 text-brand-9" />
                <div class="flex items-center gap-1">
                  <p class="text-lg/tigh font-semibold">{name}</p>
                  <p class="text-lg/snug font-medium tracking-wide opacity-74">{description}</p>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}
