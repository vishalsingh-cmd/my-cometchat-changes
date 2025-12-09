<script lang="ts">
  // import PricingTabSwitch from '../pricing-tab-switch.svelte';
  import PricingTabSwitchV2 from '../pricing-tab-switch-v2.svelte';
  import type { PricingHeroQ3Y24V3Storyblok, PricingValues } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  // import { typeIcon } from '$lib/storyblok';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

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
  // import PricingPeriodToggle from '$components/pricing-period-toggle.svelte';
  import PricingPeriodToggleV2 from '$components/pricing-period-toggle-v2.svelte';
  import PricingPeriodToggle2 from '../pricing-period-toggle2.svelte';
  import Button from '$components/buttons/button.svelte';
  import {
    activateIndex,
    lastSelectedMAUIndex,
    maus,
    pricingValues,
    isBilledAnnualy
  } from '$lib/stores/pricing-stores-v2';

  // Changed from 0 to support three tabs: 0, 1, or 2

  export let block: PricingHeroQ3Y24V3Storyblok;

  const tabs = [
    { id: 0, label: 'Chat and Messaging', param: 'chat', icon: 'chat-and-message', iconSize: 'sm' },
    {
      id: 1,
      label: 'Voice and Video Calling',
      param: 'voice',
      icon: 'voice-and-calls',
      iconSize: 'sm'
    },
    { id: 2, label: 'AI Agents', param: 'ai', icon: 'stars-01', iconSize: 'sm' },
    {
      id: 3,
      label: 'Bring Your Own Agent',
      param: 'own-agent',
      icon: 'voice-and-calls',
      iconSize: 'sm'
    }
  ];

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

  // Detect initial tab BEFORE the component renders
  const tabParam = new URL($page.url).searchParams.get('tab');

  if (tabParam === 'voice-video-calling') {
    $activateIndex = 1;
  } else if (tabParam === 'ai-agents') {
    $activateIndex = 2;
  } else if (tabParam === 'own-agent') {
    $activateIndex = 3;
  } else {
    $activateIndex = 0;
  }

  onMount(() => {
    // Do your normal initialization (MAU setup, etc.)
    localMaus = [];
    block.mau[0].mau.tbody.forEach((row: any) => {
      localMaus.push(row.body[0].value);
    });
    $maus = localMaus;
    updatePricingValues($isBilledAnnualy, 0);
  });

  let isDropdownOpen = false;

  // const tabs = [
  //   { id: 0, label: block.category1, icon: 'chat-and-message', iconSize: 'sm' },
  //   { id: 1, label: block.category2, icon: 'voice-and-calls', iconSize: 'sm' },
  //   { id: 2, label: block.category3, icon: 'stars-01', iconSize: 'sm' }
  // ];

  $: activeTab = tabs.find((tab) => tab.id === $activateIndex);

  async function selectTab(id: number) {
    $activateIndex = id;
    isDropdownOpen = false;

    const selected = tabs.find((t) => t.id === id);
    if (selected) {
      const newUrl = `/pricing?tab=${selected.param}`;
      await goto(newUrl, { replaceState: true });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
</script>

{#if block}
  <section data-theme="dark" use:storyblokEditable={block} class="w-full pt-[100px]">
    {#if block.header}
      {@const { title, description } = block.header[$activateIndex]}
      <div class="relative z-50 w-full">
        <div class="container z-50 mx-auto">
          <div class="mb-8 flex flex-col items-start justify-center px-container md:items-center">
            <div class="z-20 flex flex-col items-center gap-3 md:gap-2">
              <h1
                class="bg-gradient-purple bg-clip-text text-center text-4xl leading-snug text-transparent"
              >
                {title}
              </h1>
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
      <Sticky class="md:static ">
        <!-- Planet background image - centered and behind everything -->
        <div class="relative mx-auto w-[1440px] overflow-visible">
          <div
            class="pointer-events-none absolute left-1/2 top-[130px] z-[0] hidden w-[1312px] -translate-x-1/2 lg:block lg:-translate-x-[700px]"
          >
            <img src={PlanetImage} alt="planet" class="" />
          </div>
        </div>

        <!-- Tab switches with higher z-index -->
        <div
          class="relative z-10 flex w-full flex-row items-center justify-center gap-2 bg-[#0A0914] py-4 sm:gap-1 md:gap-4 lg:gap-6"
        >
          <!-- Mobile Dropdown (visible on mobile only) -->
          <div class="relative z-50 w-full px-4 lg:hidden">
            <button
              on:click={toggleDropdown}
              class="relative z-50 flex w-full items-center justify-between rounded-[16px] border border-brand-9/80 bg-brand-9/10 px-4 py-[13px] text-lg font-semibold text-white transition-all"
            >
              <div class="flex items-center gap-3">
                <Icon
                  icon={activeTab?.icon || 'chat-and-message'}
                  size={activeTab?.iconSize || 'sm'}
                  class="flex-none flex-shrink-0 "
                />
                <span>{activeTab?.label}</span>
              </div>
              <Icon
                icon="chevron-down"
                size="xs"
                class={cn(
                  'transition-transform duration-200',
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                )}
              />
            </button>

            <!-- Dropdown Menu with Animation -->
            {#if isDropdownOpen}
              <div
                transition:slide={{ duration: 300, easing: quintOut }}
                class="absolute left-4 right-4 top-full z-[100] mt-2 overflow-hidden rounded-[16px] border border-brand-9/80 bg-brand-2/80 p-[6px] shadow-lg backdrop-blur-lg"
              >
                {#each tabs as tab, i}
                  <button
                    on:click={() => selectTab(tab.id)}
                    class={cn(
                      'flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left text-lg transition-all last:border-b-0',
                      'text-gray-11 hover:bg-gray-12/[0.04] hover:text-white'
                    )}
                    style="animation: fadeInItem 0.3s ease-out {i * 0.05}s backwards;"
                  >
                    <div class="flex items-center gap-3">
                      <Icon
                        icon={tab.icon}
                        size={tab.iconSize}
                        class={cn(
                          'flex-shrink-0',
                          $activateIndex === tab.id ? 'text-gray-12' : 'text-gray-11 opacity-60'
                        )}
                      />
                      <span class={$activateIndex === tab.id ? 'text-gray-12' : 'text-gray-11'}
                        >{tab.label}</span
                      >
                    </div>
                    <div class="relative flex w-4 items-center justify-center">
                      <div class="h-4 w-4">
                        <Icon
                          icon="check"
                          size="md"
                          class={cn(
                            'flex-shrink-0',
                            $activateIndex === tab.id
                              ? 'z-20 text-brand-9'
                              : 'text-gray-11 opacity-0'
                          )}
                        />
                      </div>
                      <div
                        class={cn(
                          'absolute inset-0 z-[30] h-4 w-4 rounded-full bg-brand-9/20 text-brand-9 blur-sm transition-opacity',
                          $activateIndex === tab.id ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </div>
                  </button>
                {/each}
              </div>
            {/if}
          </div>

          <!-- Desktop Tabs (visible on desktop only) -->
          <div
            class="hidden flex-col items-center justify-center rounded-[16px] border border-gray-12/[0.12] bg-gray-12/[0.04] p-[5px] lg:flex lg:flex-row"
          >
            <!-- Tab 1: Chat and Message -->
            <PricingTabSwitchV2
              id={0}
              isActive={$activateIndex === 0}
              on:click={() => {
                $activateIndex = 0;
              }}
            >
              <div
                class="group flex w-full flex-row items-center justify-center gap-4 px-4 text-lg lg:w-[260px] lg:font-[640]"
              >
                <Icon
                  icon="chat-and-message"
                  size="xs"
                  class={cn(
                    'mb-2 flex-shrink-0 text-brand-9',
                    $activateIndex === 0 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category1}
              </div>
            </PricingTabSwitchV2>

            <!-- Tab 2: Voice and Calls -->
            <PricingTabSwitchV2
              id={1}
              isActive={$activateIndex === 1}
              on:click={() => {
                $activateIndex = 1;
              }}
            >
              <div
                class={`group flex flex-row items-center justify-center gap-4 ${
                  $activateIndex === 1 || $activateIndex === 0 ? 'border-l' : ''
                } border-white/10 px-4 text-lg lg:font-[640]`}
              >
                <Icon
                  icon="voice-and-calls"
                  size="xs"
                  class={cn(
                    'mb-2 flex-shrink-0 text-brand-9',
                    $activateIndex === 1 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category2}
              </div>
            </PricingTabSwitchV2>

            <!-- Tab 3: AI Agent -->
            <PricingTabSwitchV2
              id={2}
              isActive={$activateIndex === 2}
              on:click={() => {
                $activateIndex = 2;
              }}
            >
              <div
                class={`group flex w-[100px] flex-row items-center justify-center gap-2 lg:w-[260px] ${
                  $activateIndex >= 1 ? 'border-l' : ''
                }border-white/10 px-4 text-lg leading-tighter lg:font-[640]`}
              >
                <Icon
                  icon="stars-01"
                  size="md"
                  class={cn(
                    'flex-shrink-0 text-white',
                    $activateIndex === 3 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category3}
              </div>
            </PricingTabSwitchV2>

            <!-- Tab 4: Bring Your Own Agent -->
            <PricingTabSwitchV2
              id={3}
              isActive={$activateIndex === 3}
              on:click={() => {
                console.log('clicked');
                $activateIndex = 3;
              }}
            >
              <div
                class={`group flex w-[100px] flex-row items-center justify-center gap-2 lg:w-[260px] ${
                  $activateIndex === 1 || $activateIndex === 2 ? 'border-l' : ''
                }border-white/10 px-4 text-lg leading-tighter lg:font-[640]`}
              >
                <Icon
                  icon="stars-01"
                  size="md"
                  class={cn(
                    'flex-shrink-0 text-white',
                    $activateIndex === 3 ? 'opacity-100' : 'opacity-50',
                    'transition-all duration-0 ease-in-out group-hover:opacity-100'
                  )}
                />
                {block.category4}
              </div>
            </PricingTabSwitchV2>
          </div>
        </div>
      </Sticky>

      <!-- Click outside to close dropdown -->
      {#if isDropdownOpen}
        <button
          class="fixed z-[45] lg:hidden"
          on:click={() => (isDropdownOpen = false)}
          aria-label="Close dropdown"
        />
      {/if}

      <div class="container relative z-10 mx-auto mb-12 mt-4 flex flex-col items-center">
        {#if $activateIndex === 0}
          <div
            class="mb-[61px] mt-8 flex w-full flex-col items-center justify-around lg:h-[110px] lg:flex-row"
          >
            <!-- <PricingPeriodToggle on:change={() => updatePricingValues($isBilledAnnualy)} /> -->
            <PricingPeriodToggleV2 on:change={() => updatePricingValues($isBilledAnnualy)} />
            <PricingRangeSliderV2
              maus={$maus}
              on:index={(e) => {
                updatePricingValues($isBilledAnnualy, e.detail);
              }}
            />
          </div>
        {:else if $activateIndex === 2}
          <PricingPeriodToggle2 />
        {:else if $activateIndex === 3}
          <PricingPeriodToggle2 />
        {/if}

        <div
          class={cn(
            'grid w-full grid-cols-1 gap-8 px-container md:mt-8 md:gap-8',
            $activateIndex === 0 &&
              'items-end sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3 xl:grid-cols-4',
            $activateIndex === 1 && 'lg:grid-cols-3 xl:grid-cols-3',
            $activateIndex === 2 && 'xl:grid-cols-4',
            $activateIndex === 3 && 'lg:grid-cols-1 xl:grid-cols-2'
          )}
        >
          {#if $activateIndex === 0}
            {#each block.cards[0].category1 ?? [] as plan}
              <!-- <PricingHeroQ3Y24CardV1 block={plan} value={$pricingValues[plan.name]} /> -->
              <PricingHeroQ3Y24CardV2 block={plan} value={$pricingValues[plan.name]} />
            {/each}
          {:else if $activateIndex === 1}
            {#each block.cards[0].category2 ?? [] as plan}
              <PricingCardVideoAndVoiceEnhanced block={plan} />
            {/each}
          {:else if $activateIndex === 2}
            {#each block.cards[0].category1 ?? [] as plan}
              <PricingHeroQ3Y24CardV2 block={plan} value={$pricingValues[plan.name]} />
            {/each}
          {:else if $activateIndex === 3}
            {#each block.cards[0].category4 ?? [] as plan}
              <PricingCardVideoAndVoiceEnhanced block={plan} />
            {/each}
          {/if}
        </div>

        {#if $activateIndex === 0}
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

<style>
  @keyframes fadeInItem {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
