<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  //   import RotatingTextBox from './_comps/RotatingTextBox.svelte';
  import planats_bg from './_assets/planats_bg.svg';
  import Button from '$src/components/buttons/button.svelte';
  import type { HomeBannerV2Storyblok } from '$src/types/bloks';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  // import Divider from '$src/components/divider.svelte';

  export let block: HomeBannerV2Storyblok;
</script>

{#if block}
  <Section className="relative isolate">
    <Container>
      <div class="mt-10 flex flex-col items-center gap-[60px] text-center">
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
        {#if block?.links?.length ?? false}
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
      src={planats_bg}
      alt="background"
      class={cn(
        ['absolute inset-0 -z-[1]', 'h-full w-full object-cover object-bottom', '-translate-y-4'],
        ['lg:-translate-y-[4.5rem]']
      )}
    />
  </Section>
{/if}
