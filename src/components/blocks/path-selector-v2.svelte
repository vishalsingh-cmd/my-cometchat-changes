<script lang="ts">
  import type { PathSelectorStoryblok } from '$src/types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Link from '$components/buttons/link.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

  export let block: PathSelectorStoryblok;

  // Static assets
  let byobIcon = 'agent_lp_images/AI2_icon.png';
  let cometchatIcon = 'agent_lp_images/AI_icon.png';
  //   let cometchatImage = 'agent_lp_images/infra.png';
  //   let byobImage = '/agent_lp_images/Byob.png';
  let bulletIcon = '/agent_lp_images/bullet_icon.png';

  const iconMap = {
    byobIcon,
    cometchatIcon
  };
</script>

{#if block}
  <Section>
    <Container>
      <section>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {#each block.cards ?? [] as card}
            <div
              class="relative flex flex-col justify-between rounded-3xl border border-[#1F1B2E] p-8 lg:h-[640px]"
            >
              <div class="flex flex-col items-start gap-6">
                <img src={iconMap[card.icon_key]} alt="Card Icon" class="h-[64px]" />
                <div>
                  <h3 class="mb-4 font-sans text-[24px] font-[640px] leading-tighter text-gray-12">
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
                        href={getAnchorFromCmsLink(card.link)}>Learn more</a
                      >
                    </div>
                  {/if}
                </div>
              </div>

              <!-- Image inside card -->
              <img
                src={card.image.filename}
                alt="Card Image"
                class="max-h-[316px] w-full opacity-74 lg:max-h-[580px]"
              />
            </div>
          {/each}
        </div>
      </section>
    </Container>
  </Section>
{/if}
