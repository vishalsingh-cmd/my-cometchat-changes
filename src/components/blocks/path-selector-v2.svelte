<script lang="ts">
  import type { PathSelectorStoryblok } from '$src/types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Icon from '../icon/icon.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import { getResolvedAsset } from '$lib/image-helper';

  export let block: PathSelectorStoryblok;

  // Static assets
  // let byobIcon = 'agent_lp_images/AI2_icon.png';
  // let cometchatIcon = 'agent_lp_images/AI_icon.png';
  //   let cometchatImage = 'agent_lp_images/infra.png';
  //   let byobImage = '/agent_lp_images/Byob.png';
  // let bulletIcon = '/agent_lp_images/bullet_icon.png';

  // const iconMap = {
  //   byobIcon,
  //   cometchatIcon
  // };
</script>

{#if block}
  <Section>
    <Container>
      <section>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {#each block.cards ?? [] as card}
            {@const resolvedCardImage = getResolvedAsset(card, 'image')}
            <div class="gradient-border rounded-[24px] border border-gray-12/10">
              <div
                class="gradient-border-inner max-h-content relative flex flex-col justify-between"
              >
                <div class="flex flex-col items-start gap-6 p-8 pb-[40px]">
                  <div
                    class="h-[48px] w-[48px] rounded-lg border border-gray-12/10 bg-gradient-to-b from-[#0A0914] to-white/15 p-[10px] md:h-[64px] md:w-[64px] lg:p-[14px]"
                  >
                    <Icon
                      icon={card.icon_key}
                      class="h-[30px] bg-gradient-to-b from-[#3223dd] to-white opacity-40 md:h-[36px]"
                    />
                  </div>
                  <div>
                    <h3
                      class="mb-4 font-sans text-[22px] font-semibold leading-tighter text-gray-12 md:text-[22px] md:font-[640px]"
                    >
                      {card.title}
                    </h3>
                    <p class="text-lg font-normal leading-snug tracking-[0.09px] opacity-74">
                      {card.description}
                    </p>
                    <!-- <ul class="flex flex-col items-start gap-3 text-md text-gray-11">
                    {#each card.bullets ?? [] as bullet}
                      <li class="flex items-start gap-x-2 self-stretch">
                        <img src={bulletIcon} alt="" />
                        <span
                          class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                        >
                          {bullet.text}
                        </span>
                      </li>
                    {/each}
                  </ul> -->
                    {#if card.link}
                      <div class="mt-4">
                        <a
                          class="text-lg font-[640px] text-brand-9 hover:text-white"
                          href={getAnchorFromCmsLink(card.link).href}>Learn more</a
                        >
                      </div>
                    {/if}
                  </div>
                </div>

                <!-- Image inside card -->
                {#if resolvedCardImage?.filename}
                  <img
                    src={resolvedCardImage.filename}
                    alt="Card Image"
                    class="max-h-[316px] w-full opacity-74 lg:max-h-[580px]"
                  />
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </section>
    </Container>
  </Section>
{/if}

<style>
  /* .gradient-border {
    background: linear-gradient(80deg, #fafaff4d, #fafaff1a);
    padding: 1px;
    border-radius: 1.5rem;
  }

  .gradient-border-inner {
    background: #0a0a0a;
    border-radius: calc(1.5rem - 1px);
    height: 100%;
  } */
</style>
