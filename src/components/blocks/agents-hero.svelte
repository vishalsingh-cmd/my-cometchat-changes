<script lang="ts">
  import type { AgentsHeroStoryblok } from '$src/types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Button from '$src/components/buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

  export let block: AgentsHeroStoryblok;
</script>

{#if block}
  <Section>
    <Container>
      <section
        class="top-[75px] flex max-w-[1440px] flex-col items-center justify-center gap-8 pt-16 font-sans text-white lg:flex-row lg:py-20"
      >
        <!-- Left Content -->
        <div class="flex max-w-[538px] flex-col items-start justify-center gap-8">
          <div class="flex flex-col items-start gap-6 self-stretch">
            <div class="flex flex-col items-start gap-4 self-stretch">
              <!-- Badge -->
              <div class="flex h-[48px] items-center justify-center">
                <img src="/agent_lp_images/Profile.png" alt="icon" class="" />
                {#if block.badge_text}
                  <h1
                    class="rounded-[50px] border border-purple-11 bg-transparent bg-gradient-purple bg-clip-text px-[16px] py-[8px] text-center text-[18px] font-semibold leading-snug tracking-none text-transparent"
                  >
                    {block.badge_text}
                  </h1>
                {/if}
              </div>

              <!-- Heading -->
              <div class="flex flex-col items-start gap-[10px] self-stretch">
                {#each block?.heading ?? [] as heading}
                  <h1 class="text-4xl font-medium leading-tighter">
                    {heading.title}<span class=" bg-gradient-purple bg-clip-text text-transparent">
                      {heading.gradient_title}</span
                    >
                  </h1>
                {/each}
              </div>
            </div>

            <!-- Description -->
            <div class="text-sans flex flex-col items-start gap-[12px]">
              {#if block.description}
                <div class="text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-74">
                  {block.description}
                </div>
              {/if}
              {#if block.description_2}
                <div class="text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-74">
                  {block.description_2}
                </div>
              {/if}
              {#if block.description_3}
                <div class="text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-74">
                  {block.description_3}
                </div>
              {/if}
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            {#if block.secondary_button_text && block.secondary_button_link}
              {@const { href, target, rel } = getAnchorFromCmsLink(block.secondary_button_link)}
              <Button as="a" variant="secondary" {href} {target} {rel}>
                {block.secondary_button_text}
              </Button>
            {/if}
            {#if block.primary_button_text && block.primary_button_link}
              {@const { href, target, rel } = getAnchorFromCmsLink(block.primary_button_link)}
              <Button as="a" {href} {target} {rel}>
                {block.primary_button_text}
              </Button>
            {/if}
          </div>
        </div>

        <!-- Right Content -->
        <div class="relative">
          {#if block.hero_image?.filename}
            <img
              src={block.hero_image.filename}
              alt={block.hero_image.alt || 'Hero image'}
              class="aspect-[109/90] w-[350px] flex-shrink-0 rounded-xl shadow-xl lg:h-[475px] lg:w-[575.76px]"
              loading="lazy"
            />
          {/if}
        </div>
      </section>
    </Container>
  </Section>
{/if}
