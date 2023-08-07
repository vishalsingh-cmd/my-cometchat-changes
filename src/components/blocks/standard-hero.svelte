<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  import type { StandardHeroStoryblok } from '$types/bloks';

  import Button from '$components/buttons/button.svelte';

  import CenterTitleNoImageBackground from '$components/standard-hero/center-title-no-image-background.svelte';
  import LeftTitleNoImageBackground from '$components/standard-hero/left-title-no-image-background.svelte';

  export let block: StandardHeroStoryblok;
</script>

{#if block}
  <section
    class={cn(
      'h-[626px] overflow-hidden bg-gray-1 text-gray-12 md:h-[555px]',
      block.image &&
        block.image.filename !== '' &&
        block.header_alignment === 'left' &&
        'h-[707px] md:h-[1148px]',
      block.image &&
        block.image.filename !== '' &&
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
          block.header_alignment === 'left' && 'md:pl-[112px]'
        )}
      >
        {#if block.title}
          <h1 class="mb-3 text-3xl font-semibold leading-tighter md:mb-5">{block.title}</h1>
        {/if}
        {#if block.description}
          <p class="mb-5 text-xl font-medium leading-snug tracking-wide opacity-74 md:mb-8">
            {block.description}
          </p>
        {/if}
        {#if block.buttons.length > 0}
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

      <!-- Backgrounds -->
      {#if (block.image === undefined || block.image.filename === '') && block.header_alignment === 'center'}
        <CenterTitleNoImageBackground />
      {:else if (block.image === undefined || block.image.filename === '') && block.header_alignment === 'left'}
        <LeftTitleNoImageBackground />
      {/if}
    </div>
  </section>
{/if}
