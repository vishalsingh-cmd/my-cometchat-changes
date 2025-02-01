<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import { bannerData } from './_data/banner.data';
  import RotatingTextBox from './_comps/RotatingTextBox.svelte';
  import planats_bg from './_assets/planats_bg.svg';
  import Button from '$src/components/buttons/button.svelte';
</script>

<Section className="relative isolate">
  <Container isHero={true}>
    <div class="flex flex-col text-center">
      <h1
        class={cn(
          ['font-sans text-[40px] font-semibold', 'mx-auto flex max-w-3xl flex-col gap-x-2'],
          ['flex-wrap lg:flex-row lg:justify-center  lg:gap-x-5 lg:text-[58px]']
        )}
      >
        <span class="bg-gradient-purple bg-clip-text text-transparent"> Production-ready </span>
        <RotatingTextBox {bannerData} />
        <span class="bg-gradient-purple bg-clip-text text-transparent"> Built in minutes. </span>
      </h1>
      <p
        class={cn(
          ['font-sans text-[18px] font-medium text-[#FAFAFF] opacity-75', 'mx-auto mt-4 max-w-3xl'],
          ['lg:text-[22px]']
        )}
      >
        Stop wrestling with chat SDKs. Design visually, generate production code, deploy instantly.
        The first platform that lets developers ship enterprise chat in minutes - in any framework,
        at any scale.
      </p>

      <div class={cn(['flex items-center justify-center gap-3', 'mt-16'], ['lg:gap-6'])}>
        <Button>Start visual chat builder</Button>
        <Button variant="secondary">Contact us</Button>
      </div>
    </div>
  </Container>
  <img
    src={planats_bg}
    alt="background"
    class="absolute inset-0 -z-[1] h-full w-full object-cover object-top"
  />
</Section>
