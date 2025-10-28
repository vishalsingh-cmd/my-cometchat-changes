<script lang="ts">
  // import PricingTabSwitch from '../pricing-tab-switch.svelte';
  import PricingTabSwitchV2 from '../pricing-tab-switch-v2.svelte';
  import type { PricingHeroQ3Y24V2Storyblok, PricingValues } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  // import { typeIcon } from '$lib/storyblok';

  import Icon from '$components/icon/icon.svelte';
  import Sticky from '$components/sticky.svelte';
  import PricingCardVideoAndVoiceEnhanced from '$components/pricing-card-video-and-voice-enhanced.svelte';
  import PlanetImage from '$lib/assets/Planats.png';
  import { cn } from '$lib/utils';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  // import PricingHeroQ3Y24CardV1 from '$components/pricing/card/chat-and-message/pricing-hero-Q3Y24-cardV1.svelte';
  import PricingHeroQ3Y24CardV2 from '$components/pricing/card/chat-and-message/pricing-hero-Q3Y24-cardV2.svelte';
  import PricingRangeSliderV2 from '$components/pricing-range-sliderV2.svelte';
  import HeroFormV2Pricing from '$components/blocks/hero-form-pricing.svelte';
  import { onMount } from 'svelte';
  import PricingPeriodToggle from '$components/pricing-period-toggle.svelte';
  import Button from '$components/buttons/button.svelte';
  import {
    activateTable,
    lastSelectedMAUIndex,
    maus,
    pricingValues,
    isBilledAnnualy
  } from '$lib/stores/pricing-stores-v2';

  // Changed from 0 to support three tabs: 0, 1, or 2

  export let block: PricingHeroQ3Y24V2Storyblok;

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
    updatePricingValues($isBilledAnnualy, 0);
  });
</script>

{#if block}
  <section data-theme="dark" use:storyblokEditable={block} class="w-full pt-[100px]">
    {#if block.header}
      {@const { title, description } = block.header[$activateTable]}
      <div class="relative z-50 w-full">
        <div class="container z-50 mx-auto">
          <div class="mb-8 flex flex-col items-start justify-center px-container md:items-center">
            <div class="z-20 flex flex-col items-start gap-3 md:items-center md:gap-2">
              <h1 class="bg-gradient-purple bg-clip-text text-4xl text-transparent">{title}</h1>
              {#if description}
                {#if typeof description != 'string' && description.content}
                  {#each description.content as content}
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
                    {description}
                  </p>
                {/if}
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/if}
    <div class="relative z-50 w-full">
      <Sticky class="md:static">
        <!-- Planet background image - centered and behind everything -->
        <div class="pointer-events-none absolute left-1/2 top-24 z-0 w-screen -translate-x-[700px]">
          <img src={PlanetImage} alt="planet" class="" />
        </div>

        <!-- Tab switches with higher z-index -->
        <div
          class="relative z-10 flex w-full flex-row items-center justify-center gap-2 sm:gap-1 md:gap-4 lg:gap-6"
        >
          <div
            class="flex flex-row items-center justify-center rounded-[16px] border border-gray-12/[0.12] bg-gray-12/[0.04] p-[5px]"
          >
            <!-- Tab 1: Chat and Message -->
            <PricingTabSwitchV2
              id={0}
              isActive={$activateTable === 0}
              on:click={() => {
                $activateTable = 0;
              }}
            >
              <div
                class="group flex w-[260px] flex-row items-center justify-center gap-4 px-4 text-lg lg:font-[640]"
              >
                <Icon
                  icon="chat-and-message"
                  size="xs"
                  class={cn(
                    'mb-2 flex-shrink-0 text-brand-9',
                    $activateTable === 0 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category1}
              </div>
            </PricingTabSwitchV2>

            <!-- Tab 2: Voice and Calls (First) -->
            <PricingTabSwitchV2
              id={1}
              isActive={$activateTable === 1}
              on:click={() => {
                $activateTable = 1;
              }}
            >
              <div
                class={`group flex flex-row items-center justify-center gap-4 ${
                  $activateTable === 1 || $activateTable === 0 ? 'border-l' : ''
                } border-white/10 px-4 text-lg lg:text-xl lg:font-[640]`}
              >
                <Icon
                  icon="voice-and-calls"
                  size="xs"
                  class={cn(
                    'mb-2 flex-shrink-0 text-brand-9',
                    $activateTable === 1 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category2}
              </div>
            </PricingTabSwitchV2>

            <!-- Tab 3: AI Agent -->
            <PricingTabSwitchV2
              id={2}
              isActive={$activateTable === 2}
              on:click={() => {
                $activateTable = 2;
              }}
            >
              <div
                class={`group flex w-[260px] flex-row items-center justify-center gap-2 ${
                  $activateTable === 1 || $activateTable === 2 ? 'border-l' : ''
                }border-white/10 px-4 text-lg leading-tighter lg:text-xl lg:font-[640]`}
              >
                <Icon
                  icon="stars-01"
                  size="md"
                  class={cn(
                    'flex-shrink-0  text-white',
                    $activateTable === 2 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category3}
              </div>
            </PricingTabSwitchV2>
          </div>
        </div>
      </Sticky>

      <div class="container relative z-10 mx-auto mb-12 mt-4 flex flex-col items-center">
        {#if $activateTable === 0}
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
            'grid w-full grid-cols-1 gap-8 px-container  md:mt-8 md:gap-8 ',
            $activateTable === 0 &&
              'items-end sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3 xl:grid-cols-4',
            $activateTable === 1 && 'lg:grid-cols-3 xl:grid-cols-3 ',
            $activateTable === 2 && 'xl:grid-cols-1'
          )}
        >
          {#if $activateTable === 0}
            {#each block.cards[0].category1 ?? [] as plan}
              <!-- <PricingHeroQ3Y24CardV1 block={plan} value={$pricingValues[plan.name]} /> -->
              <PricingHeroQ3Y24CardV2 block={plan} value={$pricingValues[plan.name]} />
            {/each}
          {:else if $activateTable === 1}
            {#each block.cards[0].category2 ?? [] as plan}
              <PricingCardVideoAndVoiceEnhanced block={plan} />
            {/each}
          {:else if $activateTable === 2}
            {#each block.cards[0].category3 ?? [] as plan}
              <HeroFormV2Pricing block={plan} />
            {/each}
          {/if}
        </div>

        {#if $activateTable === 0}
          <Button
            variant="secondary"
            size="sm"
            class="mt-10 h-10 w-32"
            on:click={() => {
              let table = document.getElementById('pricing-table-Q3Y24-v2');
              table?.scrollIntoView({ behavior: 'smooth' });
              let miniTable = document.getElementById('mini-pricing-table-Q3Y24');
              miniTable?.scrollIntoView({ behavior: 'smooth' });
            }}>See all features</Button
          >
        {/if}
      </div>

      <!-- <div class="container mx-auto flex justify-center px-container pb-[30px] lg:pb-[60px]">
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
      </div> -->
    </div>
  </section>
{/if}
