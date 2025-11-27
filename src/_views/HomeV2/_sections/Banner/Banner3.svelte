<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  //   import RotatingTextBox from './_comps/RotatingTextBox.svelte';
  // import planats_bg from './_assets/planats_bg.svg';
  import InvertedPlanet from './_assets/inverted-planet.svg';
  // import planats_bg from './_assets/Planats.svg';
  import planet from './_assets/Planet-Violet.svg';
  import Button from '$src/components/buttons/button.svelte';
  import type { HomeBannerV2Storyblok } from '$src/types/bloks';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  // import Divider from '$src/components/divider.svelte';

  export let block: HomeBannerV2Storyblok;
</script>

{#if block}
  <Section
    className="mt-[60px] relative isolate lg:h-[760px] overflow-hidden max-w-[1440px] mx-auto "
  >
    <Container>
      <div class=" mt-10 flex flex-col items-center gap-[60px] text-center">
        <div class="flex flex-col items-center gap-[28px]">
          <h1
            class={cn(
              ['font-sans text-[40px] font-semibold', 'mx-auto flex flex-col gap-x-2'],
              ['flex-wrap lg:flex-row lg:justify-center  lg:gap-x-5 lg:text-[58px]']
            )}
          >
            <div class="flex flex-col items-center gap-2 overflow-visible">
              <div class="bg-gradient-purple bg-clip-text text-transparent lg:text-[58px]">
                {block.beforeTitle}
              </div>
              <div
                class="bg-gradient-purple bg-clip-text leading-tighter text-transparent lg:text-[58px]"
              >
                {block.afterTitle}
              </div>
            </div>
          </h1>
          <p
            class={cn(
              ['font-sans text-[18px] font-medium text-[#FAFAFF] opacity-75', 'mx-auto max-w-3xl'],
              ['lg:text-[22px]']
            )}
          >
            {block.description}
          </p>
        </div>
        {#if block?.links?.length}
          <div class={cn(['flex items-center justify-center gap-[24px]'], ['lg:gap-6'])}>
            {#each block?.links ?? [] as linkCta}
              {@const { href, target, rel } = getAnchorFromCmsLink(linkCta.link)}
              <Button as="a" variant={linkCta.variant} {href} {target} {rel}>
                {linkCta.label}
              </Button>
            {/each}
          </div>
        {/if}
      </div>
    </Container>
    <img
      src={planet}
      alt="background"
      class={cn(
        [
          'absolute inset-0 -z-[1]',
          'h-full w-full object-cover object-bottom',
          '-translate-y-[50px]'
        ],
        ['lg:-translate-y-[20px]']
      )}
    />
    <img
      src={InvertedPlanet}
      alt="background"
      class="absolute -top-[1000px] left-1/2 -z-[6] w-[130%] max-w-none -translate-x-1/2 object-cover lg:-translate-y-[0px]"
    />

    {#if block.image1}
      <img
        src={block.image1.filename}
        alt={block.image1.alt}
        class="top-0 -z-[1] inline-block h-auto w-[170px] lg:absolute lg:left-[80px] lg:top-1/2 lg:w-[200px] lg:-translate-y-1/2"
      />
    {/if}
    {#if block.image2}
      <img
        src={block.image2.filename}
        alt={block.image2.alt}
        class="-z-[1] inline-block h-auto w-[170px] lg:absolute lg:bottom-0 lg:left-[25%] lg:w-[200px]"
      />
    {/if}
    {#if block.image3}
      <img
        src={block.image3.filename}
        alt={block.image3.alt}
        class="absolute bottom-0 right-[20%] -z-[1] hidden h-auto w-[100px] lg:block lg:w-[200px]"
      />
    {/if}
    {#if block.image4}
      <img
        src={block.image4.filename}
        alt={block.image4.alt}
        class="relative -z-[1] h-auto w-[170px] lg:absolute lg:right-[50px] lg:top-1/2 lg:w-[200px] lg:-translate-y-1/2"
      />
    {/if}

    <div
      class="absolute bottom-0 left-0 z-10 h-[60px] w-full bg-gradient-to-b from-[#0A091400]/0 via-[#0A091400]/80 to-[#0A091400]/100"
    />
  </Section>
{/if}
