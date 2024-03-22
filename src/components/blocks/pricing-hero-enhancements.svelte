<script lang="ts">
  import PricingTabSwitch from './../pricing-tab-switch.svelte';
  import type { PricingHeroEnhancementsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { typeIcon } from '$lib/storyblok';
  import Icon from '$components/icon/icon.svelte';
  import Background from '$components/pricing/hero/background.svelte';
  import PricingCardEnhanced from '$components/pricing-card-enhanced.svelte';
  import Sticky from '$components/sticky.svelte';
  import PricingCardVideoAndVoiceEnhanced from '$components/pricing-card-video-and-voice-enhanced.svelte';
  import { activePricingTab } from '$lib/stores/pricing-stores';

  let isActive = false;
  $: ischatActive = isActive ? 'chat' : 'voice';

  // on ischatActive change, reset isActive
  $: if (ischatActive === 'chat') {
    $activePricingTab = 1;
  } else {
    $activePricingTab = 0;
  }

  export let block: PricingHeroEnhancementsStoryblok;
</script>

{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="relative pt-[100px] md:pt-[148px]"
  >
    <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
      <Background />
    </div>
    <div>
      <div class="container z-10 mx-auto">
        <div
          class="container mx-auto mb-8 flex flex-col items-start justify-center gap-8 px-container md:items-center"
        >
          <div class="z-20 flex max-w-[528px] flex-col items-start gap-3 md:items-center md:gap-5">
            <h1 class="text-4xl">{block.title}</h1>
            <p class="text-xl font-medium tracking-wide opacity-74 md:text-center">
              {block.description}
            </p>
          </div>

          {#if block.info_items && block.info_items.length > 0}
            <div class="flex flex-wrap gap-8 gap-y-3">
              {#each block.info_items as { icon, name, description }}
                {@const typedIcon = typeIcon(icon)}
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
    </div>

    <div>
      <Sticky class="md:static">
        <div class="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <PricingTabSwitch
            id={0}
            isActive={ischatActive === 'voice' && true}
            on:click={() => {
              isActive = !isActive;
            }}
          >
            <div class="flex flex-row items-center justify-center gap-4 text-lg">
              <Icon icon="chat-and-message" size="xs" class="flex-shrink-0 text-brand-9" />
              Chat & Messaging
            </div>
          </PricingTabSwitch>

          <PricingTabSwitch
            id={1}
            isActive={ischatActive === 'chat' && true}
            on:click={() => {
              isActive = !isActive;
            }}
          >
            <div class="flex flex-row items-center justify-center gap-4 text-lg">
              <Icon icon="voice-and-calls" size="xs" class="flex-shrink-0 text-brand-9" />
              Voice & video calling
            </div>
          </PricingTabSwitch>
        </div>
      </Sticky>

      <div
        class="container mx-auto mb-12 mt-4 grid w-full grid-cols-1 gap-5 px-container sm:grid-cols-2 md:mt-8 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"
      >
        {#if isActive}
          {#each block.voice_and_video_plans as plan, i}
            <PricingCardVideoAndVoiceEnhanced price={plan.price} block={plan} />
          {/each}
        {:else}
          {#each block.chat_and_messaging_plans as plan, i}
            <PricingCardEnhanced price={plan.price} priceLabel={plan.name} block={plan} />
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}
