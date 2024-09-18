<script lang="ts">
  import PricingTabSwitch from './../pricing-tab-switch.svelte';
  import type { PricingHeroQ3Y24Storyblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { typeIcon } from '$lib/storyblok';
  import Icon from '$components/icon/icon.svelte';
  import Sticky from '$components/sticky.svelte';
  // import PricingCardVideoAndVoiceEnhanced from '$components/pricing-card-video-and-voice-enhanced.svelte';
  import { activePricingTab } from '$lib/stores/pricing-stores';
  import { cn } from '$lib/utils';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import PricingHeroQ3Y24CardV1 from '$components/pricing/card/chat-and-message/pricing-hero-Q3Y24-cardV1.svelte';
  import PricingRangeSliderV2 from '$components/pricing-range-sliderV2.svelte';
  import { onMount } from 'svelte';
  import PricingBackgroundV2 from '$components/pricing/hero/pricing-backgroundV2.svelte';

  let isActive = true;
  let isBilledAnnualy = true;
  $: ischatActive = isActive ? 'chat' : 'voice';

  $: if (ischatActive === 'chat') {
    $activePricingTab = 1;
  } else {
    $activePricingTab = 0;
  }

  export let block: PricingHeroQ3Y24Storyblok;

  let maus: string[] = [];
  let pricingValues: any = {
    Build: { price: '$0', isBilledAnnually: true },
    Basic: { price: '$124', isBilledAnnually: true },
    Advanced: { price: '$249', isBilledAnnually: true },
    Enterprise: { price: '$499', isBilledAnnually: true }
  };

  function updatePricingValues(index: number, isBilledAnnually: boolean) {
    console.log('updatePricingValues', index);
    block.mau[0].mau.tbody[index].body.forEach((col: any, index: number) => {
      if (index === 0) {
        pricingValues['Build'].isBilledAnnually = isBilledAnnually;
        return;
      }
      pricingValues[block.cards[0].category1[index].name] = {
        price: col.value,
        isBilledAnnually: isBilledAnnually
      };
    });
  }

  onMount(() => {
    block.mau[0].mau.tbody.forEach((row: any) => {
      maus.push(row.body[0].value);
    });
    maus = maus;
    // console.log('maus', maus);
    updatePricingValues(1, true);
    // console.log('maus', pricingValues);
  });
</script>

{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="relative pt-[100px] md:pt-[148px]"
    style="background-image: url();"
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
      <Sticky class="md:static">
        <div
          class="flex w-full flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6"
        >
          <PricingTabSwitch
            id={0}
            isActive={ischatActive === 'chat'}
            on:click={() => {
              isActive = true;
            }}
          >
            <div class="group flex flex-row items-center justify-center gap-4 text-lg">
              <Icon
                icon="chat-and-message"
                size="xs"
                class={cn(
                  'flex-shrink-0 text-brand-9',
                  ischatActive === 'chat' ? 'opacity-100' : 'opacity-50',
                  'transition-all duration-0 ease-in-out group-hover:opacity-100'
                )}
              />
              {block.category1}
            </div>
          </PricingTabSwitch>

          <PricingTabSwitch
            id={1}
            isActive={ischatActive === 'voice'}
            on:click={() => {
              isActive = false;
            }}
          >
            <div class="group flex flex-row items-center justify-center gap-4 text-lg">
              <Icon
                icon="voice-and-calls"
                size="xs"
                class={cn(
                  'flex-shrink-0 text-brand-9',
                  ischatActive === 'voice' ? 'opacity-100' : 'opacity-50',
                  'transition-all duration-0 ease-in-out group-hover:opacity-100'
                )}
              />
              {block.category2}
            </div>
          </PricingTabSwitch>
        </div>
      </Sticky>
      <div class="container mx-auto mb-12 mt-4 flex flex-col">
        <div class="mb-[61px] mt-8 flex h-[110px] w-full justify-around border">
          <PricingRangeSliderV2
            {maus}
            on:index={(e) => {
              updatePricingValues(e.detail, isBilledAnnualy);
            }}
          />
        </div>
        <div
          class={cn(
            'grid h-[700px] w-full grid-cols-1 items-end gap-5 px-container sm:grid-cols-2 md:mt-8 md:gap-8 lg:grid-cols-3',
            isActive && 'xl:grid-cols-4',
            !isActive && 'xl:grid-cols-3'
          )}
        >
          {#if isActive && pricingValues}
            {#each block.cards[0].category1 ?? [] as plan}
              <PricingHeroQ3Y24CardV1 block={plan} value={pricingValues[plan.name]} />
              <!-- <PricingCardVideoAndVoiceEnhanced block={plan} /> -->
            {/each}
          {:else}
            <!-- {#each block.chat_and_messaging_plans as plan}
            <PricingChatAndMessageCardEnhanced block={plan} />
          {/each} -->
          {/if}
        </div>
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
