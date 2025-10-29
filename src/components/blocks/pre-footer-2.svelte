<script lang="ts">
  import Button from '$src/components/buttons/button.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import type { PreFooter2Storyblok } from '$src/types/bloks';

  export let block: PreFooter2Storyblok;
</script>

<Section className="relative overflow-hidden">
  <!-- Ellipse background -->
  <img
    src="/agent_lp_images/big_ellipse.png"
    alt="Ellipse"
    class="pointer-events-none absolute left-1/2 top-[200px] min-w-[1000px] shrink-0 -translate-x-1/2 select-none opacity-80 lg:top-[160px]"
  />
  <Container pyEnabled={false}>
    <div
      class="relative my-[40px] flex h-[647px] flex-col items-center justify-center overflow-hidden text-center"
    >
      <!-- CometChat logo -->
      <img
        src="/agent_lp_images/cometchat_logo.png"
        alt="CometChat Logo"
        class=" absolute top-[40px] -translate-x-10"
      />

      <div
        class="absolute top-[320px] z-10 flex max-w-[640px] flex-col items-center gap-[16px] px-4"
      >
        {#if block.heading}
          <p class="text-3xl font-semibold leading-tight text-white">{@html block.heading}</p>
        {/if}

        {#if block.subheading}
          <p
            class="text-center text-xl font-medium leading-snug tracking-[0.11px] text-gray-11 opacity-74"
          >
            {block.subheading}
          </p>
        {/if}

        <div class="flex flex-wrap justify-center gap-4 text-sm">
          {#if block.secondary_button_text && block.secondary_button_link}
            <Button variant="secondary" as="a" href={block.secondary_button_link.cached_url}>
              {block.secondary_button_text}
            </Button>
          {/if}

          {#if block.primary_button_text && block.primary_button_link}
            <Button as="a" href={block.primary_button_link.cached_url}>
              {block.primary_button_text}
            </Button>
          {/if}
        </div>
      </div>
    </div>
  </Container>
</Section>
