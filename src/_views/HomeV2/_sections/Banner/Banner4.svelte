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

  import Image1 from './_assets/hero/image1-v2.png';
  import Image2 from './_assets/hero/image2-v2.png';
  import Image3 from './_assets/hero/image2.png';
  import Image4 from './_assets/hero/image4.png';
  // import mobile_screen from './_assets/hero/mobile_responsive.png';
  import mobile_planet from './_assets/hero/mobile_planet.png';

  export let block: HomeBannerV2Storyblok;

  let mobile_text: string = block.beforeTitle + ' ' + block.afterTitle;
</script>

{#if block}
  <div class="max-w-screen relative isolate mx-auto overflow-hidden">
    <Section className="mt-[60px] relative isolate lg:h-[760px] max-w-[1440px] mx-auto ">
      <Container>
        <div class=" mt-10 flex flex-col items-center gap-[60px] text-center">
          <div class="flex flex-col items-center gap-[28px]">
            <h1
              class={cn(
                ['font-sans text-[40px] font-semibold', 'mx-auto flex flex-col gap-x-2'],
                ['flex-wrap lg:flex-row lg:justify-center  lg:gap-x-5 lg:text-[58px]']
              )}
            >
              <div class="hidden flex-col items-center gap-2 overflow-visible lg:flex">
                <div class="bg-gradient-purple bg-clip-text text-transparent lg:text-[58px]">
                  {block.beforeTitle}
                </div>
                <div
                  class="bg-gradient-purple bg-clip-text leading-tighter text-transparent lg:text-[58px]"
                >
                  {block.afterTitle}
                </div>
              </div>

              <!-- MOBILE VIEW -->
              <div class="flex flex-wrap justify-center gap-x-3 lg:hidden">
                <!-- <div class="bg-gradient-purple bg-clip-text text-transparent lg:text-[58px]"> -->
                {#each mobile_text.split(' ') as word, index (index)}
                  <span class="bg-gradient-purple bg-clip-text text-transparent">{word}</span>
                {/each}
              </div>
            </h1>
            <p
              class={cn(
                [
                  'font-sans text-[18px] font-medium text-[#FAFAFF] opacity-75',
                  'mx-auto max-w-3xl'
                ],
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
        <img
          src={planet}
          alt="background"
          class={cn(
            [
              'absolute inset-0 -z-[1]',
              ' h-full w-full object-cover object-bottom',
              '-translate-y-[50px]'
            ],
            ['hidden lg:block lg:-translate-y-[20px]']
          )}
        />

        <img
          src={Image1}
          alt="image1"
          class="top-0 -z-[1] hidden h-auto w-[170px] lg:absolute lg:left-[80px] lg:top-1/2 lg:block lg:w-[277px] lg:-translate-y-1/2"
        />

        <img
          src={Image2}
          alt="image2"
          class="-z-[1] ml-9 hidden h-auto w-[170px] lg:absolute lg:bottom-40 lg:left-[22%] lg:inline-block lg:w-[225px] lg:-translate-x-16"
        />
        <img
          src={Image3}
          alt="image3"
          class="absolute bottom-0 right-[20%] -z-[1] hidden h-auto w-[100px] lg:block lg:w-[200px]"
        />
        <img
          src={Image4}
          alt="image4"
          class="relative -z-[1] mx-auto mt-8 hidden h-auto w-[170px] lg:absolute lg:right-[50px] lg:top-1/2 lg:mt-0 lg:block lg:w-[200px] lg:-translate-y-1/2"
        />
        <!-- <img src={mobile_screen} alt="" class="block w-screen -translate-y-[20px] lg:hidden" /> -->
        <img
          src={mobile_planet}
          alt="background"
          class="absolute left-1/2 top-4 -z-[6] w-full max-w-none -translate-x-1/2 object-cover lg:hidden"
        />
      </Container>
      <!-- <img
      src={planet}
      alt="background"
      class={cn(
        [
          'absolute inset-0 -z-[1]',
          ' h-full w-full object-cover object-bottom',
          '-translate-y-[50px]'
        ],
        ['hidden lg:block lg:-translate-y-[20px]']
      )}
    />
    <img
      src={InvertedPlanet}
      alt="background"
      class="absolute -top-[1000px] left-1/2 -z-[6] hidden w-[2000px] max-w-none -translate-x-1/2 object-cover lg:block lg:-translate-y-[0px]"
    />

    <img
      src={Image1}
      alt={block.image1.alt}
      class="top-0 -z-[1] hidden h-auto w-[170px] lg:absolute lg:left-[80px] lg:top-1/2 lg:block lg:w-[200px] lg:-translate-y-1/2"
    />

    <img
      src={Image2}
      alt={block.image2.alt}
      class="-z-[1] ml-9 hidden h-auto w-[170px] lg:absolute lg:bottom-8 lg:left-[22%] lg:inline-block lg:w-[200px]"
    />
    <img
      src={Image3}
      alt={block.image3.alt}
      class="absolute bottom-8 right-[20%] -z-[1] hidden h-auto w-[100px] lg:block lg:w-[200px]"
    />
    <img
      src={Image4}
      alt={block.image4.alt}
      class="relative -z-[1] mx-auto mt-8 hidden h-auto w-[170px] lg:absolute lg:right-[50px] lg:top-1/2 lg:mt-0 lg:block lg:w-[200px] lg:-translate-y-1/2"
    />
    <img src={mobile_screen} alt="" class="block w-screen -translate-y-[60px] lg:hidden" />
    <img
      src={mobile_planet}
      alt="background"
      class="absolute top-4 -z-[6] w-full max-w-none object-cover lg:hidden"
    /> -->

      <div
        class="absolute bottom-0 left-0 z-10 h-[60px] w-full bg-gradient-to-b from-[#0A091400]/0 via-[#0A091400]/80 to-[#0A091400]/100"
      />
    </Section>
    <img
      src={InvertedPlanet}
      alt="background"
      class="absolute -top-[1300px] left-1/2 -z-[6] hidden w-[2300px] max-w-none -translate-x-1/2 lg:block lg:-translate-y-[0px]"
    />
  </div>
{/if}
