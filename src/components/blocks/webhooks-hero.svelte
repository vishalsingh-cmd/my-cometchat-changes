<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getLabelInfo } from '$lib/utils';
  import { getResolvedAsset } from '$lib/image-helper';

  import type { WebhooksHeroStoryblok, AssetStoryblok } from '$types/bloks';

  import Background from '$components/webhooks-hero/background.svelte';

  import Media from '$components/media.svelte';
  import Title from '$components/title.svelte';

  export let block: WebhooksHeroStoryblok;

  // Resolve illustration for external URL support
  $: resolvedIllustration = getResolvedAsset(block, 'illustration') as AssetStoryblok | undefined;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="dark"
    class="h-[730px] overflow-hidden bg-gray-1 text-gray-12"
  >
    <div
      class="container relative mx-auto flex h-full w-full flex-col-reverse overflow-x-visible md:flex-row"
    >
      <Background />

      {#if resolvedIllustration}
        <div class="isolate md:absolute md:-right-40 md:top-[30px] md:w-[1000px]">
          <Media imageTransformOptions={{ size: [1600, 0] }} media={resolvedIllustration} />
        </div>
      {/if}

      <div class="isolate mt-[52px] lg:ml-[112px] lg:mt-0">
        {#if block.title && block.title[0]}
          {@const { title, description, links } = block.title[0]}
          {@const label = getLabelInfo(block.title[0].label, 'brand')}
          <Title
            {label}
            {title}
            {description}
            buttons={links}
            alignment="left"
            class="lg:pt-[148px]"
          />
        {/if}
      </div>
    </div>
  </section>
{/if}
