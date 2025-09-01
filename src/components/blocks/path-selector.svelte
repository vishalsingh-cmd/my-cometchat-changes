<script lang="ts">
  import type { PathSelectorStoryblok } from '$src/types/bloks';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';

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
              class="relative flex flex-col justify-between rounded-2xl border border-[#1F1B2E] p-6 lg:h-[640px]"
            >
              <div class="flex flex-col items-start gap-6">
                <img src={iconMap[card.icon_key]} alt="Card Icon" class="h-[64px]" />
                <div>
                  <h3 class="mb-3 font-sans text-[24px] font-semibold leading-tighter text-gray-12">
                    {card.title}
                  </h3>
                  <ul class="flex flex-col items-start gap-3 text-md text-gray-11">
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
                  </ul>
                </div>
              </div>

              <!-- Image inside card -->
              <img
                src={card.image.filename}
                alt="Card Image"
                class="max-h-[300px] w-full opacity-74"
              />
            </div>
          {/each}
        </div>
      </section>
    </Container>
  </Section>
{/if}
