<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { getResolvedAsset } from '$lib/image-helper';

  import type { IndustryStoryblok, SolutionsHeroStoryblok, AssetStoryblok } from '$types/bloks';

  import BackgroundBottom from '$components/solutions/hero/background-bottom.svelte';
  import Button from '$components/buttons/button.svelte';
  import CometIllustration, {
    type IllustrationOptions
  } from '$components/comet-illustration/comet-illustration.svelte';
  import Stars from '$components/stars.svelte';
  import Media from '$components/media.svelte';

  export let block: SolutionsHeroStoryblok;

  // Resolve illustration for external URL support
  $: resolvedIllustration = getResolvedAsset(block, 'illustration') as AssetStoryblok | undefined;

  const parseItem = (item: string | StoryblokStory<IndustryStoryblok>) => {
    const typedItem = item as StoryblokStory<IndustryStoryblok>;

    return {
      illustration: typedItem.content.illustration as IllustrationOptions,
      name: typedItem.content.short_name
    };
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="h-[663px] overflow-hidden bg-gray-1 pt-[108px] text-gray-12 md:h-[781px] md:pt-[148px]"
  >
    <div
      class="container relative mx-auto flex h-full flex-col gap-10 px-container md:gap-16 lg:flex-row"
    >
      <BackgroundBottom />

      <div class="w-full max-w-[528px]">
        <div class="flex items-center gap-[10px]">
          {#if block.solution_type}
            {@const parsedItem = parseItem(block.solution_type)}
            <CometIllustration size="sm" illustration={parsedItem.illustration} />
            <p class="text-xl font-semibold leading-tighter opacity-74">{parsedItem.name}</p>
          {/if}
        </div>

        <h1 class="mt-2 text-3xl font-semibold leading-tighter md:mt-3">{block.title}</h1>
        <p class="mt-3 text-xl font-medium leading-snug opacity-74 md:mt-5">{block.description}</p>
        {#if block.links.length}
          <div class="mt-5 flex gap-3 md:mt-8">
            {#each block.links as link}
              {@const { href, rel, target } = getAnchorFromCmsLink(link.link)}
              <Button variant={link.variant} as="a" {href} {rel} {target}>
                {link.label}
              </Button>
            {/each}
          </div>
        {/if}
      </div>
      {#if resolvedIllustration}
        <Media
          imageTransformOptions={{ size: [1000, 0] }}
          media={resolvedIllustration}
          class="bottom-0 w-full max-w-[784px] translate-x-4 transform self-end md:translate-x-16"
        />
      {/if}

      <div class="pointer-events-none absolute left-6 top-0 h-[803px] w-[1389px]">
        <Stars backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-gray-8']} />
      </div>
      <div
        class="pointer-events-none absolute right-0 hidden h-full w-[145px] bg-gradient-to-l from-gray-1/100 to-transparent md:block"
      />
      <div
        class="pointer-events-none absolute bottom-0 h-[200px] w-full bg-gradient-to-t from-gray-1/100 to-transparent"
      />
    </div>
  </section>
{/if}
