<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import type { StandardHeroStoryblok } from '$types/bloks';

  import Badge from '$components/badge.svelte';
  import Button from '$components/buttons/button.svelte';
  import Media from '$components/media.svelte';

  import CenterTitleImageBackground from '$components/standard-hero/center-title-image-background.svelte';
  import CenterTitleNoImageBackground from '$components/standard-hero/center-title-no-image-background.svelte';
  import LeftTitleImageBackground from '$components/standard-hero/left-title-image-background.svelte';
  import LeftTitleNoImageBackground from '$components/standard-hero/left-title-no-image-background.svelte';

  export let block: StandardHeroStoryblok;
</script>

{#if block}
  <section
    class={cn(
      'relative h-[626px] overflow-hidden bg-gray-1 text-gray-12 md:h-[555px]',
      block.image &&
        block.image.filename !== '' &&
        block.image.filename !== null &&
        block.header_alignment === 'left' &&
        'h-[707px] md:h-[1148px]',
      block.image &&
        block.image.filename !== '' &&
        block.image.filename !== null &&
        block.header_alignment === 'center' &&
        'h-[584px] md:h-[1116px]'
    )}
    use:storyblokEditable={block}
  >
    <div
      class={cn(
        'container relative mx-auto flex h-full flex-col px-container pt-[100px] md:pt-[148px]',
        block.header_alignment === 'center' && 'items-center'
      )}
    >
      <div
        class={cn(
          'isolate z-10 w-full max-w-[528px]',
          block.header_alignment === 'left' && 'md:max-w-[640px] md:pl-[112px]'
        )}
      >
        {#if block.has_coming_soon_tag}
          <Badge size="medium" label={string('coming_soon')} class="mb-2 md:mb-3" />
        {/if}
        {#if block.title}
          <h1 class="mb-3 text-3xl font-semibold leading-tighter md:mb-5">{block.title}</h1>
        {/if}
        {#if block.description}
          <p class="mb-5 text-xl font-medium leading-snug tracking-wide opacity-74 md:mb-8">
            {block.description}
          </p>
        {/if}
        {#if block.buttons && block.buttons.length > 0}
          <div class="'mt-5 flex gap-3 md:mt-8">
            {#each block.buttons as link}
              {@const { href, rel, target } = getAnchorFromCmsLink(link.link)}
              <Button variant={link.variant} as="a" {href} {rel} {target}>
                {link.label}
              </Button>
            {/each}
          </div>
        {/if}
      </div>

      {#if block.image && block.image.filename !== '' && block.image.filename !== null}
        <div
          class={cn(
            'absolute isolate z-10 w-full',
            block.header_alignment === 'left' &&
              '-bottom-[90px] -left-[200px] w-[600px] max-w-[1300px] md:-left-[400px] md:bottom-[0px] md:w-[1500px] lg:-left-[200px] lg:w-full',
            block.header_alignment === 'center' &&
              'bottom-5 w-[300px] max-w-[1100px] md:-bottom-5 md:-left-[200px] md:w-[1400px] lg:left-auto lg:w-full'
          )}
        >
          <Media imageTransformOptions={{ size: [1900, 0] }} media={block.image} />
        </div>
      {/if}

      <!-- Backgrounds -->
      {#if (!block.image || !block.image.filename || block.image.source === null) && block.header_alignment === 'center'}
        <CenterTitleNoImageBackground />
      {:else if (!block.image || !block.image.filename || block.image.source === null) && block.header_alignment === 'left'}
        <LeftTitleNoImageBackground />
      {:else if block.image && block.image.filename !== '' && block.image.filename !== null && block.header_alignment === 'center'}
        <CenterTitleImageBackground />
      {:else if block.image && block.image.filename !== '' && block.image.filename !== null && block.header_alignment === 'left'}
        <LeftTitleImageBackground />
      {/if}
    </div>

    <!-- Bottom Gradient -->
    {#if block.image && block.image.filename !== '' && block.image.filename !== null && block.header_alignment === 'center'}
      <div
        class="absolute bottom-0 left-0 isolate z-20 h-[213px] w-full bg-gradient-to-t from-gray-1/100 to-transparent"
      />
    {:else if !(block.image && block.image.filename !== '' && block.image.filename !== null && block.header_alignment === 'left')}
      <div
        class="absolute bottom-0 h-[187px] w-full bg-gradient-to-t from-gray-1/100 to-transparent"
      />
    {/if}
  </section>
{/if}
