<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import RotatingTextBox from './_comps/RotatingTextBox.svelte';
  import planats_bg from './_assets/planats_bg.svg';
  import Button from '$src/components/buttons/button.svelte';
  import type { home__bannerStoryblok } from '$src/types/bloks';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';

  export let block: home__bannerStoryblok;
</script>

<Section className="relative isolate">
  <Container>
    <div class="mt-10 flex flex-col text-center">
      <h1
        class={cn(
          ['font-sans text-[40px] font-semibold', 'mx-auto flex max-w-3xl flex-col gap-x-2'],
          ['flex-wrap lg:flex-row lg:justify-center  lg:gap-x-5 lg:text-[58px]']
        )}
      >
        <span class="bg-gradient-purple bg-clip-text text-transparent"> {block.beforeTitle} </span>
        <RotatingTextBox animatedBoxes={block.animatedBoxes} />
        <span class="bg-gradient-purple bg-clip-text text-transparent"> {block.afterTitle} </span>
      </h1>
      <p
        class={cn(
          ['font-sans text-[18px] font-medium text-[#FAFAFF] opacity-75', 'mx-auto mt-4 max-w-3xl'],
          ['lg:text-[22px]']
        )}
      >
        {block.description}
      </p>

      <div class={cn(['flex items-center justify-center gap-3', 'mt-10'], ['lg:mt-16 lg:gap-6'])}>
        {#if block.primaryCta[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.primaryCta[0].link)}
          <Button as="a" variant={block.primaryCta[0].variant} {href} {target} {rel}>
            {block.primaryCta[0].label}
          </Button>
        {/if}

        {#if block.secondaryCta[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.secondaryCta[0].link)}
          <Button as="a" variant={block.secondaryCta[0].variant} {href} {target} {rel}>
            {block.secondaryCta[0].label}
          </Button>
        {/if}
      </div>
    </div>
  </Container>
  <img
    src={planats_bg}
    alt="background"
    class={cn(
      ['absolute inset-0 -z-[1]', 'h-full w-full object-cover object-top', '-translate-y-4'],
      ['lg:-translate-y-[4.5rem]']
    )}
  />
</Section>
