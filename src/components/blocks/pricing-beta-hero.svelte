<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { PricingBetaHeroStoryblok, PricingBetaPlanStoryblok } from '$types/bloks';

  import { getAnchorFromCmsLink, typeIcon } from '$lib/storyblok';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Icon from '$components/icon/icon.svelte';
  import Button from '$components/buttons/button.svelte';
  import PricingCard from '$components/pricing-card.svelte';
  import Background from '$components/pricing/hero-beta/background.svelte';

  const getTypedPricingBetaPlan = (story: string | StoryblokStory<PricingBetaPlanStoryblok>) =>
    story as StoryblokStory<PricingBetaPlanStoryblok>;

  export let block: PricingBetaHeroStoryblok;
</script>

{#if block}
  <section
    data-theme="dark"
    class="relative overflow-hidden pt-[100px] md:pt-[148px]"
    use:storyblokEditable={block}
  >
    <div class="container relative z-10 mx-auto">
      <Background />
      <div
        class="container mx-auto mb-8 flex flex-col items-start justify-center gap-6 px-container md:items-center md:gap-12"
      >
        <div
          class="z-20 flex flex-col items-start gap-3 md:items-center md:gap-5 md:text-center xl:max-w-[700px]"
        >
          <h1 class="text-3xl/tighter font-semibold">{block.title}</h1>
          <p class="text-xl/snug font-medium tracking-wide opacity-74">
            {block.description}
          </p>
        </div>

        {#if block.info_items && block.info_items.length > 0}
          <div class="flex flex-wrap gap-5 gap-y-3 md:gap-8">
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
      {#if block.pricing_beta_plans && block.pricing_beta_plans.length > 0}
        {@const { title, description, cta, plans } = block.pricing_beta_plans[0]}
        <div
          class="container mx-auto my-12 grid w-full grid-cols-1 gap-5 px-container md:grid-cols-2 md:gap-10 lg:mb-20 lg:mt-[100px] xl:grid-cols-3"
        >
          <div
            class="order-last mt-5 flex flex-col items-start gap-5 md:order-first md:col-span-2 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-20 lg:mt-8 xl:col-span-1 xl:flex-col xl:items-start xl:justify-normal xl:gap-8"
          >
            <div class="flex flex-col gap-2 text-xl md:gap-3">
              <p class="font-semibold leading-tighter">{title}</p>
              <p class="font-medium leading-snug tracking-wide opacity-64">{description}</p>
            </div>

            {#if cta[0].link}
              {@const { href, target, rel } = getAnchorFromCmsLink(cta[0].link)}
              <Button as="a" variant={cta[0].variant} {href} {target} {rel} class="min-w-fit"
                >{cta[0].label}</Button
              >
            {/if}
          </div>

          {#if plans && plans.length > 0}
            {#each plans as pricingPlan}
              {@const typedPricingPlan = getTypedPricingBetaPlan(pricingPlan)}
              <PricingCard
                price={typedPricingPlan.content.price}
                block={typedPricingPlan.content}
              />
            {/each}
          {/if}
        </div>
      {/if}
    </div>

    <!-- Bottom Gradient -->
    <div
      class="absolute bottom-0 left-0 z-10 h-[50px] w-full bg-gradient-to-t from-gray-1/100 to-gray-1/0 xl:h-[100px]"
    />
  </section>
{/if}
